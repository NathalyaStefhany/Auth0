import { Route, Routes as ReactRoutes } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";

import { Home } from "../pages/Home";
import { Books } from "../pages/Books";
import { Edit } from "../pages/Edit";
import { Profile } from "../pages/Profile";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />

      <PrivateRoute path="/livros" element={<Books />} />
      <PrivateRoute admin path="/editar" element={<Edit />} />
      <PrivateRoute path="/perfil" element={<Profile />} />
    </ReactRoutes>
  );
};
