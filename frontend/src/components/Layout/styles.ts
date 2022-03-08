import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  overflow-y: auto !important;

  width: 100%;
  height: 100%;

  padding: 24px;
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
