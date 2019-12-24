import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from '../../components/layouts/page'

export default function PostTemplate(props) {
    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }
    const markdownBody = props.content;
    const frontmatter = props.data;

    return (
        <Layout siteTitle={props.siteTitle}>
            <header>
                <h1>{frontmatter.title}</h1>
                <p>{reformatDate(frontmatter.date)}</p>
            </header>
            <ReactMarkdown source={markdownBody} />
            <footer>
                Written By: {frontmatter.author}
            </footer>
        </Layout>
    );

}

PostTemplate.getInitialProps = async function(ctx) {
    const { slug } = ctx.query;
    const content = await import(`../../posts/${slug}.md`);
    const config = await import(`../../site.config`);
    const data = matter(content.default);
    return {
        siteTitle: config.siteTitle,
        ...data
    }
};