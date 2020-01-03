import React from "react";
import Header from "../header";
import Meta from "../meta";
import Footer from "../footer";
import { NextSeo } from 'next-seo';

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-full">
            {/*<Meta*/}
            {/*    siteTitle={props.siteTitle}*/}
            {/*    siteDescription={props.siteDescription}*/}
            {/*    siteUrl={props.siteUrl}*/}
            {/*/>*/}
            <NextSeo
                title={props.siteTitle}
                description={props.siteDescription}
            />
            <Header siteTitle={props.siteTitle} />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}