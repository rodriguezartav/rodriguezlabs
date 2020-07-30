import React from "react";

import Head from "next/head";

import Footer from "../components/Footer";

export default function MyApp(props) {
  return (
    <React.Fragment>
      <Head>
        <title>rodriguezLab.co</title>

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      {props.children}
      <Footer />
    </React.Fragment>
  );
}
