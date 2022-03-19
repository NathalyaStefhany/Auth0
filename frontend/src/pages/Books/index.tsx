import { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import { api } from "../../service/api";

import { BooksProps } from "./types";
import { BookContainer, BookContent, Container } from "./styles";

export const Books = () => {
  const [books, setBooks] = useState<BooksProps[] | []>([]);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getAccessToken = async () => {
      return getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: "read:current_user",
      });
    };

    const getBooks = async () => {
      const token = await getAccessToken();

      api
        .get("/book", { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => setBooks(response.data))
        .catch((err) => console.log(err));
    };

    getBooks();
  }, [getAccessTokenSilently]);

  return (
    <Container>
      <h1>Livros</h1>

      <BookContainer>
        {books.map((book) => (
          <BookContent>
            <p>
              <b>ID: </b>
              {book.id}
            </p>

            <p>
              <b>Título: </b>
              {book.title}
            </p>

            <p>
              <b>Descrição: </b>
              {book.description}
            </p>
          </BookContent>
        ))}
      </BookContainer>
    </Container>
  );
};
