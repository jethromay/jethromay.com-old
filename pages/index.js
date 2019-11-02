import React from "react";
import Articles from "../components/articles";
import Project from "../components/project";
import Newsletter from "../components/newsletter";
import MainLayout from '../components/layouts/main';

export const meta = {
    title: 'Client-side setup'
};

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="intro lg:pt-20 lg:pb-10 mb-10">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-6xl xs:text-5xl sm:text-5xl">Hi, I'm Jethro.</h1>
                        <p className="mb-4">I am a web developer & writer with a passion for Laravel.</p>
                        <div className="social flex">
                            <a className="twitter-follow-button"
                               href="https://twitter.com/may_jethro"
                               data-size="large"
                               data-show-screen-name="false">
                                Follow
                            </a>
                        </div>
                    </div>
                </div>

                <section className="mt-8 mb-10">
                    <div className="container mx-auto">
                        <h2 className="font-bold text-3xl mb-6 text-left">Latest Articles</h2>
                        <Articles />
                    </div>
                </section>

                <hr className="border bg-green-100" />

                <section className="mt-8 mb-16">
                    <div className="container mx-auto">
                        <h2 className="font-bold text-3xl mb-6 text-left">Featured Projects</h2>
                        <Project />
                    </div>
                </section>

                <Newsletter />
            </div>


        )
    }
}

Index.Layout = MainLayout;