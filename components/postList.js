import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const PostList = (props) => {

    function truncateSummary(content) {
        return content.slice(0, 200).trimEnd();
    }

    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }

    return (
        <>
            {props.allPosts.map(post => (
                <article>
                    <h1 className="text-2xl">
                        <Link key={post.slug} href={{ pathname: `/posts/${post.slug}` }}>
                            <a>
                            {post.document.data.title}
                            </a>
                        </Link>
                    </h1>
                    <time>{reformatDate(post.document.data.date)}</time>
                    <p>
                        <ReactMarkdown source={truncateSummary(post.document.content)} />
                    </p>
                </article>
            ))}
        </>
    );
};

export default PostList;
