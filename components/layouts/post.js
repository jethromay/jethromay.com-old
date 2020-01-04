import React from "react";
import Header from "../header";
import Footer from "../footer";
import { MDXProvider } from "@mdx-js/tag";
import MarkdownComponent from "../markdown-component";
import Seo from "../seo";
import config from '../../site.config';
import Page from "../page";

export default function Post({meta, children}) {

    function convertToSlug(title) {
        return title
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    }

    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }

    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(meta.title)}&url=${
        config.siteUrl
    }/posts/${convertToSlug(meta.title)}/&via=may_jethro`;

    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                <article className="md:mt-20 lg:mb-20">
                    <header>
                        <h1 className="mb-0">{meta.title}</h1>
                        <div className="flex items-center text-gray-600">
                            <time className="text-gray-600 mr-2">{reformatDate(meta.date)}</time> |
                            <a className="font-bold text-gray-600 ml-2 hover:text-blue-500"
                               href={twitterShare}
                               target="_blank"
                               rel="noopener noreferrer">
                                Share
                            </a>
                        </div>
                    </header>
                    <MDXProvider components={MarkdownComponent}>
                        <Page title={`${meta.title} - Jethro May`}>
                            <Seo {...meta} />
                        </Page>
                        {children}
                    </MDXProvider>
                </article>
            </main>
            <Footer />
        </div>
    )
}