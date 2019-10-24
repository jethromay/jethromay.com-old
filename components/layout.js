import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import config from "../config/website"
import "../styles/main.css"

export default class Layout extends React.Component {

    render() {

        const { children } = this.props

        return (
            <div className="flex flex-col min-h-full">
                <Header />
                <main className="container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 mt-24 lg:mt-20">{children}</main>
                <Footer />
            </div>
        )
    }
}
