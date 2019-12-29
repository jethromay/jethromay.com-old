import React from "react";
import Layout from "../components/layouts/default";
import PostList from "../components/post-list";
import config from "../site.config";

const Posts = (props) => {
    return (
        <Layout
            siteTitle={`Posts - ` + config.siteTitle}
            siteDescription={config.siteDescription}>
            <div className="container lg:mt-20 lg:mb-20" id="posts">
                <h1 className="font-bold text-5xl mb-4">Posts</h1>
                <PostList />
            </div>
        </Layout>
    )
};

export default Posts;