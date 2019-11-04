import React from "react"
import Head from "next/dist/next-server/lib/head";
import config from "../../config/config";

export default function ArticleLayout({meta, children}) {
    return (
        <div>
            <Head>
                <title>{`${config.siteTitle} - Web Developer & Writer`}</title>
                <meta
                    type="description"
                    content={`${config.siteDescription}`}
                />
            </Head>
            <article className="md:mt-20 lg:mb-20">
                {children}
            </article>
        </div>
    )
}

