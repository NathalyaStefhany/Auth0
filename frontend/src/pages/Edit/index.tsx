import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { api } from "../../service/api";

import { Button } from "../../components/Button";

import { BooksProps } from "../Books/types";
import {
  BookContainer,
  BookContent,
  Container,
  Form,
  FormContainer,
} from "./styles";

export const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [books, setBooks] = useState<BooksProps[] | []>([]);

  const { getAccessTokenSilently } = useAuth0();

  const getBooks = async () => {
    const token = await getAccessToken();

    api
      .get("/book", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setBooks(response.data))
      .catch((err) => console.log(err));
  };

  const getAccessToken = async () => {
    return getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: "read:current_user",
    });
  };

  const handleAddBook = async () => {
    const token = await getAccessToken();

    api
      .post(
        "/book",
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => alert("O livro foi adicionado!"))
      .catch(() => alert("Erro ao adicionar o livro!"));

    getBooks();
  };

  const handleDeleteBook = async (id: string) => {
    const token = await getAccessToken();

    api
      .delete(`/book/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => alert("O livro foi deletado!"))
      .catch(() => alert("Erro ao deletar o livro!"));

    getBooks();
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>Adicionar</h1>

      <FormContainer>
        <Form>
          <div>
            <label>Título</label>
            <input onChange={(input) => setTitle(input.target.value)} />
          </div>

          <div>
            <label>Descrição</label>
            <textarea
              onChange={(input) => setDescription(input.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handleAddBook}>Adicionar</Button>
          </div>
        </Form>
      </FormContainer>

      <h1>Deletar</h1>

      <BookContainer>
        {books.map((book) => (
          <BookContent>
            <div>
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
            </div>

            <div>
              <span onClick={() => handleDeleteBook(book.id)}>DELETAR</span>
            </div>
          </BookContent>
        ))}
      </BookContainer>
    </Container>
  );
};
