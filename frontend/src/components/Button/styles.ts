import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--blue-500);
  color: var(--white);
  border: 0;

  height: 44px;

  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;

  padding: 12px 42px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
    }
  }
`;
