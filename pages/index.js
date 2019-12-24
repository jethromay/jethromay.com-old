import React  from "react";
import Layout from "../components/layouts/default";
import Project from "../components/project";
import Newsletter from "../components/newsletter";
import PostList from "../components/postList";
import matter from "gray-matter";
import { TwitterFollowButton } from "react-twitter-embed";

const Index = (props) => {
    return (
        <Layout pathname="/" siteTitle={props.siteTitle} siteDescription={props.siteDescription}>
            <div className="intro lg:pt-20 lg:pb-10 mb-10">
                <div className="flex flex-col">
                    <h1 className="font-bold text-6xl xs:text-5xl sm:text-5xl">Hi, I'm Jethro.</h1>
                    <p className="mt-0 mb-4">I am a web developer & writer with a passion for Laravel.</p>
                    <div className="social flex">
                        <TwitterFollowButton
                            screenName={'may_jethro'}
                            options={{ size: 'large' }} />
                    </div>
                </div>
            </div>

            <section className="mt-8 mb-10" id="latest-posts">
                <div className="container mx-auto">
                    <h2 className="font-bold text-3xl mb-8 text-left">Latest Posts</h2>
                    <PostList allPosts={props.allPosts}/>
                </div>
            </section>

            <hr className="border bg-green-100" />

            <section className="mt-8 mb-16">
                <div className="container mx-auto">
                    <h2 className="font-bold text-3xl mb-8 text-left">Latest Projects</h2>
                    <Project />
                </div>
            </section>

            <Newsletter />
        </Layout>
    )
};

export default Index;

Index.getInitialProps = async function() {
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