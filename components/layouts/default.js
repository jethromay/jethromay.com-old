import React from "react";
import Head from 'next/head';
import Header from "../header";
import Footer from "../footer";
import config from "../../site.config";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-full">
            <Head>
                <title>{'Jethro May - Web Developer & Writer'}</title>
                <meta name="description" content={config.siteDescription} />
            </Head>
            <Header />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}