import React from 'react'
import App, { Container } from "next/app";
import MainLayout from "../components/layouts/main";
import PageLayout from "../components/layouts/page";
import '../public/css/main.css';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
        Component.isIndexPage
            ? (
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            )
            : (
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            )
        )
    }
}