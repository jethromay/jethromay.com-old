import React from "react";
import Header from "../header";
import Footer from "../footer";
import Meta from "../meta";
import config from '../../site.config';
import { MDXProvider } from '@mdx-js/react';
import MarkdownComponent from "../markdown-component";

export default function Post({ meta, children }) {

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
    }/${convertToSlug(meta.title)}/&via=may_jethro`;

    return (
        <div className="flex flex-col min-h-full">
            <Meta
                siteTitle={meta.title ? `${meta.title} - Jethro May` : `Jethro May - Web Developer & Writer`}
                siteDescription={meta.summary} />
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
                    <MDXProvider components={MarkdownComponent} children={children} />
                </article>
            </main>
            <Footer />
        </div>
    )
}