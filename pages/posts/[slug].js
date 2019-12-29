import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import PostLayout from "../../components/layouts/post";
import Code from "../../components/code";
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
        <PostLayout siteTitle={frontmatter.title} siteDescription={frontmatter.description}>
            <header>
                <h1 className="mb-0">{frontmatter.title}</h1>
                <div className="flex items-center text-gray-600">
                    <time className="text-gray-600 mr-2">{reformatDate(frontmatter.date)}</time> |
                    <a className="font-bold text-gray-600 ml-2 hover:text-blue-500"
                        href={twitterShare}
                        target="_blank"
                        rel="noopener noreferrer">
                        Share
                    </a>
                </div>
            </header>
            <ReactMarkdown source={markdownBody} renderers={{ code: Code }} />
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