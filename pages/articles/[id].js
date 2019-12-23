import React from 'react';
import Head from 'next/head';
import posts from '../../posts';
import config from "../../config/config";

const Post = props => {
    return (
        <div>
            <Head>
                <title>{`${props.post.title} - Web Developer & Writer`}</title>
                <meta
                    type="description"
                    content={`${config.siteDescription}`}
                />
            </Head>
            <header>
                <h1>{props.post.title}</h1>
            </header>
            <p>{props.post.content}</p>
        </div>
    )
};

Post.getInitialProps = ({ query }) => {
    return {
        post: posts[query.id]
    }
};

export default Post
