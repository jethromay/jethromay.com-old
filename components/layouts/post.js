import React from "react";
import Header from "../header";
import Footer from "../footer";
import Meta from "../meta";

export default function Post(props) {
    return (
        <div className="flex flex-col min-h-full">
            <Meta
                siteTitle={props.siteTitle ? `${props.siteTitle} - Jethro May` : `Jethro May - Web Developer & Writer`}
                siteDescription={props.siteDescription} />
            <Header />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                <article className="md:mt-20 lg:mb-20">
                    {props.children}
                </article>
            </main>
            <Footer />
        </div>
    )
}