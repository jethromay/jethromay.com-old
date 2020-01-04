import React from "react";
import Header from "../header";
import Footer from "../footer";
import Meta from "../meta";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-full">
            <Meta
                siteTitle={`${props.siteTitle} - Jethro May`}
                siteDescription={props.siteDescription}
            />
            <Header siteTitle={props.siteTitle} />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}