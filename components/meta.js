import React from "react";
import Head from "next/head";
import config from "../site.config";

export default function Meta(props) {
    return (
        <>
            <Head>
                <title>{props.siteTitle}</title>
                <meta name="description" content={props.siteDescription} />

                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content={props.siteTitle} />
                <meta property="og:description" content={props.siteDescription} />
                <meta property="og:image" content="https://jethromay.com/img/me.jpg" />
                <meta property="og:url" content={props.siteUrl} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.twitterAccount} />
                <meta name="twitter:title" content={props.siteTitle} />
                <meta name="twitter:description" content={props.siteDescription} />
                <meta name="twitter:image" content="https://jethromay.com/img/me.jpg" />
            </Head>
        </>
    )
}