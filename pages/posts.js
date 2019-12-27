import React from "react";
import matter from "gray-matter";
import Layout from "../components/layouts/default";
import PostList from "../components/postList";

const Posts = (props) => {
    return (
        <Layout
            siteTitle={`Posts - ` + props.siteTitle}
            siteDescription={props.siteDescription}>
            <div className="container lg:mt-20 lg:mb-20" id="posts">
                <h1 className="font-bold text-5xl mb-4">Posts</h1>
                <p>A collection of the various posts i have written.</p>
                <PostList allPosts={props.allPosts}/>
            </div>
        </Layout>
    )
};

export default Posts;

Posts.getInitialProps = async function() {
    const siteConfig = await import(`../site.config`);
    //get posts & context from folder
    const posts = (context => {
        const keys = context.keys();
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key
                .replace(/^.*[\\\/]/, "")
                .split(".")
                .slice(0, -1)
                .join(".");
            const value = values[index];
            // Parse yaml metadata & markdownbody in document
            const document = matter(value.default);
            return {
                document,
                slug
            };
        });
        return data;
    })(require.context("../posts", true, /\.md$/));

    return {
        allPosts: posts,
        ...siteConfig,
    }
};