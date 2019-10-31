import React from 'react'
import App from 'next/app'
import '../public/css/main.css'
import Layout from "../components/layout";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

export default MyApp