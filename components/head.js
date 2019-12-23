import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
import { siteMeta } from '../site.config';

const Head = props => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>
            {props.title ? `${props.title} - Jethro May` : `Jethro May - Web Developer & Writer`}
        </title>
        <meta
            name="description"
            content={props.description || siteMeta.siteDescription}
        />

        <meta property="og:url" content={props.url || siteMeta.siteLogo} />
        <meta property="og:title" content={props.title || ''} />
        <meta
            property="og:description"
            content={props.description || siteMeta.siteDescription}
        />
        <meta name="twitter:site" content={props.url || siteMeta.siteLogo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="twitter:image"
            content={`${siteMeta.siteUrl}${props.ogImage || siteMeta.siteLogo}`}
        />
        <meta
            property="og:image"
            content={`${siteMeta.siteUrl}${props.ogImage || siteMeta.siteLogo}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </NextHead>
);

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string,
};

export default Head
