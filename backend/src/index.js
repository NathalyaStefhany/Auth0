const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const checkScope = require("express-jwt-authz");
const jwtDecode = require("jwt-decode");

require("dotenv").config();

const app = express();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ["RS256"],
});

app.use(cors());

app.use(jwtCheck);

app.use(express.json());

const checkRole = (role) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    const tokenDecoded = jwtDecode(token);

    const namespace = "https://www.book-store.com.br/";

    const userRole = tokenDecoded?.[namespace + "app_metadata"]?.role;

    if (userRole !== role)
      return res.status(403).json({ error: "Insufficient role" });

    return next();
  };
};

const customScopeKey = "permissions";

let books = [];

app.get(
  "/book",
  checkScope(["read:book"], { customScopeKey }),
  (request, response) => {
    return response.json(books);
  }
);

app.post("/book", checkRole("admin"), (request, response) => {
  const { title, description } = request.body;

  const book = {
    id: uuidv4(),
    title,
    description,
  };

  books.push(book);

  return response.status(201).send();
});

app.delete(
  "/book/:id",
  checkScope(["delete:book"], { customScopeKey }),
  (request, response) => {
    const { id } = request.params;

    const bookExists = books.find((book) => book.id === id);

    if (!bookExists)
      return response.status(400).json({ error: "Book not exists!" });

    books = books.filter((book) => book.id !== id);

    return response.send();
  }
);

app.listen(4000);
