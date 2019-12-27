import React from "react";
import Head from "next/head";
import config from "../site.config";

export default function Meta(props) {
    return (
        <>
            <Head>
                <title>{props.siteTitle}</title>
                <meta name="description" content={props.siteDescription} />

                <meta property="og:title" content={props.siteTitle} />
                <meta property="og:description" content={props.siteDescription} />
                <meta property="og:image" content="" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.twitterAccount} />
                <meta name="twitter:title" content={props.siteTitle} />
                <meta name="twitter:description" content={props.siteDescription} />
                <meta name="twitter:image" content="" />
            </Head>
        </>
    )
}