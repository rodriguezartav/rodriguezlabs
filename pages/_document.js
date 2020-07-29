import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>rodriguezLabs.co</title>

          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
