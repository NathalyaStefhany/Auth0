import React from "react";

import { Auth0Provider as Provider } from "@auth0/auth0-react";

export const Auth0Provider: React.FC = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUrl = process.env.REACT_APP_AUTH0_REDIRECT_URL;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const envAuth0 = process.env.REACT_APP_ENV ?? "";

  return (
    <Provider
      domain={domain ?? ""}
      clientId={clientId ?? ""}
      redirectUri={redirectUrl}
      audience={audience}
      scope="openid profile email"
      cacheLocation={envAuth0 === "development" ? "localstorage" : "memory"}
    >
      {children}
    </Provider>
  );
};
