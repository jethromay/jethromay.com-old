import React from 'react'
import App, { Container } from 'next/app'
import '../public/css/main.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp