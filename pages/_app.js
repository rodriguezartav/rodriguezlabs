import React, { useEffect } from "react";

import Head from "next/head";

import { Provider } from "../data/Context";

import Footer from "../components/Footer";
import Alerts from "../components/alert/Alerts";

import "../styles/index.css";
import Router from "next/router";

import * as gtag from "../data/Gtag";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Provider>
      <Head>
        <title>rodriguezlabs.co</title>
      </Head>
      <Component {...pageProps} />
      <Alerts />
    </Provider>
  );
}
