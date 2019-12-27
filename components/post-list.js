import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const PostList = (props) => {

    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }

    function latestPost(date) {
        return moment(date) > moment().subtract(1, 'months');
    }

    return (
        <>
            {props.allPosts.map((post) => (
                <article key={post.slug}>
                    <header>
                        <div className="flex items-center">
                            <h1 className="text-2xl mb-0 mr-3">
                                <Link href={{ pathname: `/posts/${post.slug}` }}>
                                    <a>
                                        {post.document.data.title}
                                    </a>
                                </Link>
                            </h1>
                            {latestPost(post.document.data.date) && (
                                <span className="rounded-full bg-green-500 px-3 py-1 mt-1 uppercase text-xs text-white font-bold mr-3">New</span>
                            )}
                        </div>
                        <time className="text-gray-600">{reformatDate(post.document.data.date)}</time>
                    </header>
                    <ReactMarkdown source={post.document.data.description} />
                    <footer>
                        <Link href={{ pathname: `/posts/${post.slug}` }}>
                            <a className="underline text-blue-400 hover:text-blue-500">
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
