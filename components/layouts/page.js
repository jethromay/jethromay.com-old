import React from "react";
import Header from "../header";
import Footer from "../footer";
import Meta from "../meta";
import { NextSeo } from 'next-seo';
import config from "../../site.config";

export default function Page({meta, children}) {

    function convertToLowerCase(title) {
        return title
            .toLowerCase()
    }

    return (
        <div className="flex flex-col min-h-full">
            {/*<Meta*/}
            {/*    siteTitle={meta.title ? `${meta.title} - Jethro May` : `Jethro May - Web Developer & Writer`}*/}
            {/*    siteDescription={config.siteDescription}*/}
            {/*    siteUrl={`${config.siteUrl}/${convertToLowerCase(meta.title)}`}*/}
            {/*/>*/}
            <NextSeo
                title={meta.title ? `${meta.title} - Jethro May` : `Jethro May - Web Developer & Writer`}
                description={config.siteDescription}
            />
            <Header />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                <article className="md:mt-20 lg:mb-20">
                    {children}
                </article>
            </main>
            <Footer />
        </div>
    )
}

