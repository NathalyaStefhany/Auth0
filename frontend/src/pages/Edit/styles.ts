import styled from "styled-components";

export const Container = styled.div`
  color: #202024;

  h1 {
    text-align: center;

    margin-bottom: 40px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: fit-content;

  margin-bottom: 40px;

  > div:not(:last-of-type) {
    display: flex;
    flex-direction: column;
  }

  div + div {
    margin-top: 24px;
  }

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 30px;
  }

  input,
  textarea {
    width: 500px;
    padding: 8px;
  }

  textarea {
    height: 100px;
  }
`;

export const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: fit-content;

  justify-content: center;

  gap: 16px;
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30%;

  padding: 16px;

  border: 1px solid var(--gray-300);
  border-radius: 8px;

  p {
    word-wrap: break-word;
  }

  p + p {
    margin-top: 8px;
  }

  div {
    padding: 16px;
  }

  span {
    font-weight: bold;
    color: var(--blue-500);

    cursor: pointer;
  }
`;
