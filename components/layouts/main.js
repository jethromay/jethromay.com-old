import React from "react";
import Head from 'next/head';
import Header from "../header";
import Footer from "../footer";
import config from "../../config/config";

export default function Layout({meta, children}) {
    return (
        <div>
            <Head>
                <title>{`${config.siteTitle} - Web Developer & Writer`}</title>
                <meta
                    name="description"
                    content={`${config.siteDescription}`}
                />
            </Head>
            <div className="flex flex-col min-h-full">
                <Header />
                <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}