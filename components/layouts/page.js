import React from "react";
import Header from "../header";
import Footer from "../footer";
import config from "../../site.config";
import Meta from "../meta";

export default function Page({meta, children}) {
    return (
        <div className="flex flex-col min-h-full">
            <Meta
                siteTitle={`${meta.title} - Jethro May`}
                siteDescription={meta.summary}
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

