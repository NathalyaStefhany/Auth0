import { RouteProps } from "react-router-dom";

export type PrivateRoutesProps = {
  element: JSX.Element;
  admin?: boolean;
} & RouteProps;
