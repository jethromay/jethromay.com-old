import React from "react";
import Router from "next/router";
import Head from 'next/head';
import * as gtag from "../lib/gtag";
import config from "../site.config";

Router.events.on('routeChangeComplete', url => gtag.trackPageView(url));

function Page({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title || 'Jethro May - Web Developer & Writer'}</title>
                {description !== false && (
                    <meta
                        name="description"
                        content={description || config.siteDescription}
                    />
                )}
            </Head>
            <div className="flex flex-col min-h-full">
                {children}
            </div>
        </div>
    );
}

export default Page;
