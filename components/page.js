import Head from 'next/head';
import config from "../site.config";
import React from "react";

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
