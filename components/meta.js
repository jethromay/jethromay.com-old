import React from "react";
import Head from 'next/head';

export default function Meta(props) {
    return (
        <>
            <Head>
                <title>{props.siteTitle}</title>
                <meta name="description" content={props.description} />
            </Head>
        </>
    )
}