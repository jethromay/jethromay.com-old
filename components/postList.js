import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const PostList = (props) => {

    function truncateSummary(content) {
        return content.slice(0, 150).trimEnd();
    }

    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }

    return (
        <>
            {props.allPosts.map((post) => (
                <article key={post.slug}>
                    <header>
                        <h1 className="text-2xl mb-0">
                            <Link href={{ pathname: `/posts/${post.slug}` }}>
                                <a>
                                    {post.document.data.title}
                                </a>
                            </Link>
                        </h1>
                        <time className="text-gray-600">{reformatDate(post.document.data.date)}</time>
                    </header>
                    <ReactMarkdown source={truncateSummary(post.document.content)} />
                    <footer>
                        <Link href={{ pathname: `/posts/${post.slug}` }}>
                            <a className="underline text-blue-600">
                                Read more
                            </a>
                        </Link>
                    </footer>
                </article>
            ))}
        </>
    );
};

export default PostList;
