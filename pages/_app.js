import React from 'react'
import App, { Container } from "next/app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import '../public/css/main.css';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.Layout || ArticleLayout;

        return (
            <MainLayout>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MainLayout>
        )
    }
}