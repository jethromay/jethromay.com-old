import React from "react";
import App, { Container } from "next/app";
import Router from 'next/router'
import * as gtag from '../lib/gtag';
import "../public/css/main.css";

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        } else if (Component.isMDXComponent) {
            pageProps = await Component({}).props.originalType.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />
        )
    }
}

export default MyApp