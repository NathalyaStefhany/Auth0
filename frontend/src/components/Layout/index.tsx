import { useAuth0 } from "@auth0/auth0-react";

import ReactLoading from "react-loading";

import { Header } from "./Header";

import { Container, Content, Loading } from "./styles";

export const Layout: React.FC = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading && !isAuthenticated)
    return (
      <Loading>
        <ReactLoading type="spin" color="#280d70" />
      </Loading>
    );

  return (
    <Container>
      <Header />

      <Content>{children}</Content>
    </Container>
  );
};
