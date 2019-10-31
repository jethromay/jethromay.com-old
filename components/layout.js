import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = props => (
    <div className="flex flex-col min-h-full">
        <Header />
        <main className="container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 mt-24 lg:mt-20">
            <div className="container lg:mt-20 lg:mb-20">
                {props.children}
            </div>
        </main>
        <Footer />
    </div>
);

export default Layout;