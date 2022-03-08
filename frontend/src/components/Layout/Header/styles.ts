import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue-500);

  display: flex;
  justify-content: space-between;

  padding: 16px 40px;

  li {
    cursor: pointer;

    font-size: 1.25rem;
    font-weight: 500;
    color: var(--white);

    height: 24px;
  }
`;

export const Menu = styled.ul`
  display: flex;

  li + li {
    margin-left: 32px;
  }
`;
