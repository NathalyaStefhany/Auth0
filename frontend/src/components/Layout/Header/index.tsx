import { useAuth0 } from "@auth0/auth0-react";
import { SignOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { Container, Menu } from "./styles";

export const Header = () => {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();
  const navigate = useNavigate();

  const namespace = "https://www.book-store.com.br/";

  return (
    <Container>
      <Menu>
        <li onClick={() => navigate("/")}>Home</li>

        {isAuthenticated && (
          <>
            <li onClick={() => navigate("/livros")}>Livros</li>

            {user?.[namespace + "app_metadata"]?.role === "admin" && (
              <li onClick={() => navigate("/editar")}>Editar</li>
            )}

            <li onClick={() => navigate("/perfil")}>Perfil</li>
          </>
        )}
      </Menu>

      {isAuthenticated ? (
        <li onClick={() => logout({ returnTo: window.location.origin })}>
          <SignOut size={24} color="white" />
        </li>
      ) : (
        <li onClick={loginWithRedirect}>Login</li>
      )}
    </Container>
  );
};
