import React from "react";
import App, { Container } from "next/app";
import Router from 'next/router'
import * as gtag from '../lib/gtag';
import "../public/css/main.css";

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />
        )
    }
}

export default MyApp