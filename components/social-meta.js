import React from "react";
import Head from "next/head";

export default ({ title, description, image, url }) => (
    <Head>
        <meta name="twitter:site" content="@may_jethro" />
        <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
        {title && <meta name="og:title" content={title} />}
        {url && <meta name="og:url" content={url} />}
        {description && <meta name="description" content={description} />}
        {description && <meta name="og:description" content={description} />}
        {image && <meta name="og:image" content={`https://jethromay.com/img/me.jpg`} />}
    </Head>
);