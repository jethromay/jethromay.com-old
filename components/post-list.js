import React from "react";
import Link from "next/link";
import moment from "moment";
import posts from "../posts/index";

const PostList = () => {

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

    function latestPost(date) {
        return moment(date) > moment().subtract(1, 'months');
    }

    return (
        <>
            {posts.map(post => (
                <article key={post.title}>
                    <header>
                        <div className="flex items-center">
                            <h1 className="text-2xl mb-0 mr-3">
                                <Link href={post.path}>
                                    <a>
                                        {post.title}
                                    </a>
                                </Link>
                            </h1>
                            {latestPost(post.date) && (
                                <span className="rounded-full bg-green-500 px-3 py-1 mt-1 uppercase text-xs text-white font-bold mr-3">New</span>
                            )}
                        </div>
                        <time className="text-gray-600">{reformatDate(post.date)}</time>
                    </header>
                    <p>{post.description}</p>
                    <footer>
                        <Link href={`/posts/` + convertToSlug(post.title)} as={post.path}>
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
