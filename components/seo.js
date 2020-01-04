import React from "react";
import Head from "next/head";
import config from "../site.config";

export default function Seo(props) {
    return (
        <>
            <Head>
                <title>{props.siteTitle}</title>
                <meta name="description" content={props.siteDescription} />
                <link rel="icon" href="/favicon.ico" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.twitterAccount} />
                <meta name="twitter:title" content={props.siteTitle} />
                <meta name="twitter:description" content={props.siteDescription} />
                <meta name="twitter:image" content="https://jethromay.com/img/me.jpg" />
            </Head>
        </>
    )
}