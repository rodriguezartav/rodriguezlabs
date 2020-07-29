import React, { useEffect } from "react";

import Head from "next/head";

import { Provider } from "../data/Context";

import Footer from "../components/Footer";
import Alerts from "../components/alert/Alerts";

import "../styles/index.css";
import Router from "next/router";
var mixpanel = require("mixpanel-browser");

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    mixpanel.init("07b1c9b68a904562001e4fb13b1dcc18");
    const handleRouteChange = (url) => {
      mixpanel.track("Page View", { url: url });
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
