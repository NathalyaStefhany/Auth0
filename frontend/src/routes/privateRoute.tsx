import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Route, useNavigate } from "react-router-dom";

import { PrivateRoutesProps } from "./types";

export const PrivateRoute = ({
  element,
  admin = false,
  ...props
}: PrivateRoutesProps) => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  const navigate = useNavigate();
  const namespace = "https://www.book-store.com.br/";

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/");

    if (admin && user?.[namespace + "app_metadata"]?.role !== "admin")
      navigate("/");
  }, [isLoading, isAuthenticated, navigate, admin, user]);

  return <Route element={element} {...props} />;
};
