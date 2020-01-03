import React from "react";
import Header from "../header";
import Footer from "../footer";
import { NextSeo } from 'next-seo';
import config from "../../site.config";

export default function Page({meta, children}) {
    return (
        <div className="flex flex-col min-h-full">
            <NextSeo
                title={`${meta.title} - Jethro May`}
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

