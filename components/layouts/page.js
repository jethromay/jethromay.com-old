import React from "react";
import Header from "../header";
import Footer from "../footer";
import Seo from "../social-meta";
import { MDXProvider } from "@mdx-js/react";
import MarkdownComponent from "../markdown-component";
import Page from "../page";

export default function PageLayout({meta, children}) {
    return (
        <Page title={`${meta.title} - Jethro May`}>
            <Seo {...meta} />
            <Header />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                <article className="md:mt-20 lg:mb-20">
                    <MDXProvider components={MarkdownComponent} children={children} />
                </article>
            </main>
            <Footer />
        </Page>
    )
}

