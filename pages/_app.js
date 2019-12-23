import React from 'react'
import App, { Container } from 'next/app'
import '../public/css/main.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />
        )
    }
}

export default MyApp