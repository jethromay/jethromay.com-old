import React from "react";
import PostList from "../components/post-list";
import config from "../site.config";
import Page from "../components/page";
import Seo from "../components/social-meta";
import Header from "../components/header";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

const Posts = () => {
    return (
        <Page title="Posts - Jethro May">
            <Seo
                image="/img/me.jpg"
                title="Articles - Jethro May"
                url={`${config.siteUrl}/articles`}
                description={config.siteDescription}
            />

            <Header />

            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                <div className="container lg:mt-20 lg:mb-20" id="posts">
                    <h1 className="font-bold text-5xl mb-4">Posts</h1>
                    <PostList />
                    <Newsletter />
                </div>
            </main>


            <Footer />
        </Page>
    )
};

export default Posts;
