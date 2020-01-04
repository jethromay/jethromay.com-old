import React from "react";
import App from "next/app";
import "../public/css/main.css";
import Router from "next/router";
import * as gtag from "../lib/gtag";

Router.events.on('routeChangeComplete', url => gtag.trackPageView(url));


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />
        )
    }
}

export default MyApp