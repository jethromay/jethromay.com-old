import React from 'react'
import App from 'next/app'
import '../public/css/main.css'
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";

class MyApp extends App {
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

export default MyApp