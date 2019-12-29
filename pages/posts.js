import React from "react";
import Layout from "../components/layouts/default";
import PostList from "../components/post-list";

const Posts = (props) => {
    return (
        <Layout
            siteTitle={`Posts - ` + props.siteTitle}
            siteDescription={props.siteDescription}>
            <div className="container lg:mt-20 lg:mb-20" id="posts">
                <h1 className="font-bold text-5xl mb-4">Posts</h1>
                <PostList />
            </div>
        </Layout>
    )
};

export default Posts;