import React from "react";

import Head from "next/head";

import Footer from "../components/Footer";

export default function MyApp(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Laboratorio de Emprendedurismo Social y Tecnológico</title>

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={
            props.text ||
            "El centro de desarrollo de prototipos del inventor Roberto Rodríguez para la solución de los problemas humanos a través de innovaciones organizacionales y tecnológicas."
          }
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <meta
          property="og:site_name"
          content="RodriguezLab.co"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={
            props.title
              ? `RodriguezLab: ${props.title}`
              : "Laboratorio de Emprendedurismo Social y Tecnológico"
          }
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            props.text ||
            "El centro de desarrollo de prototipos del inventor Roberto Rodríguez para la solución de los problemas humanos a través de innovaciones organizacionales y tecnológicas."
          }
          key="ogdesc"
        />

        {props.image && <meta property="og:image" content={props.image} />}
      </Head>

      {props.children}
      <Footer />
    </React.Fragment>
  );
}
