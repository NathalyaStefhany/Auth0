import { Layout } from "./components/Layout";

import { Routes } from "./routes";
import GlobalStyles from "./styles/global";

export const App = () => {
  return (
    <Layout>
      <Routes />
      <GlobalStyles />
    </Layout>
  );
};
