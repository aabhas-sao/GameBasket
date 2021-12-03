import "../styles/global.css";
import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";

/**
 * App component Next
 */

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
