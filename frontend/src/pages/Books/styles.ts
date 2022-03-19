import styled from "styled-components";

export const Container = styled.div`
  color: #202024;

  h1 {
    text-align: center;

    margin-bottom: 32px;
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
`;
