import React from 'react'
import App, { Container } from "next/app";
import {MDXProvider} from '@mdx-js/react'
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
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
                <ArticleLayout>
                    <Component {...pageProps} />
                </ArticleLayout>
            )
        )
    }
}