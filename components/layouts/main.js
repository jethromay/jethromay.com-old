import React from "react"
import Header from "../header"
import Footer from "../footer"

const Layout = props => (
    <div className="flex flex-col min-h-full">
        <Header />
        <main className="container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 lg:mt-20">
            {props.children}
        </main>
        <Footer />
    </div>
);

export default Layout;