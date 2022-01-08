import "../styles/global.css";
import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "../redux/store";

/**
 * App component Next
 */

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
