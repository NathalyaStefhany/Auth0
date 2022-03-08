import { useAuth0 } from "@auth0/auth0-react";

import { Container, Content } from "./styles";

export const Profile = () => {
  const { user } = useAuth0();

  return (
    <Container>
      <Content>
        <img src={user?.picture} alt="Foto de Perfil" />
        <h1>Bem vindo {user?.name}</h1>
      </Content>

      <p>
        <b>E-mail:</b> {user?.email}
      </p>
    </Container>
  );
};
