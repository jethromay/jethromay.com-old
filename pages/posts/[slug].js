import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import PostLayout from "../../components/layouts/post";
import config from '../../site.config';

export default function PostTemplate(props) {

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

    const markdownBody = props.content;
    const frontmatter = props.data;
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(frontmatter.title)}&url=${
        config.siteUrl
    }/${convertToSlug(frontmatter.title)}/&via=may_jethro`;

    return (
        <PostLayout siteTitle={props.siteTitle}>
            <header>
                <h1>{frontmatter.title}</h1>
                <p>{reformatDate(frontmatter.date)}</p>
                <a
                    className="twitter-link"
                    href={twitterShare}
                    target="_blank"
                    rel="noopener noreferrer">
                    Share
                </a>
            </header>
            <ReactMarkdown source={markdownBody} />
            <footer>
                Written By: {frontmatter.author}
            </footer>
        </PostLayout>
    );

}

PostTemplate.getInitialProps = async function(ctx) {
    const { slug } = ctx.query;
    const content = await import(`../../posts/${slug}.md`);
    const config = await import(`../../site.config`);
    const data = matter(content.default);
    return {
        siteTitle: config.siteTitle,
        ...data,
    }
};