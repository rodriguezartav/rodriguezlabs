import React from "react";

import Head from "next/head";

import { Provider } from "../data/Context";

import Footer from "../components/Footer";
import Alerts from "../components/alert/Alerts";

import "../styles/index.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <Provider>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <Component {...pageProps} />
      <Footer />
      <Alerts />
    </Provider>
  );
}
