import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import GitHubButton from 'react-github-btn'
import project from '../images/tailwind-screenshot.jpg'
import Newsletter from "../components/newsletter";

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Home" />
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
                            <GitHubButton
                                href="https://github.com/jethromay"
                                data-size="large"
                                data-show-count="true"
                                aria-label="Follow @jethromay on GitHub"
                            >
                                Follow
                            </GitHubButton>
                        </div>
                    </div>
                </div>

                <section className="mt-8 mb-10">
                    <div className="container mx-auto">
                        <h2 className="font-bold text-3xl mb-6 text-left">Latest Articles</h2>

                        <article className="mb-8">
                            <header>
                                <Link to="/article"
                                   className="text-lg text-black font-bold no-underline hover:underline">
                                    Website Overhaul
                                </Link>
                            </header>
                            <p className="text-grey-darkest text-base leading-normal mt-1">
                                I wanted to redesign my website and give it a much needed face lift. After many
                                different iterations, i finally got to a point where i was happy with the look and
                                functionality that my new site gave me.
                            </p>
                            <footer className="text-grey-darkest text-base leading-normal mt-2">
                                <Link to="/article"
                                   className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Read
                                    this article →
                                </Link>
                            </footer>
                        </article>
                    </div>
                </section>

                <hr className="border bg-green-100" />

                <section className="mt-8 mb-8">
                    <div className="container mx-auto">
                        <h2 className="font-bold text-3xl mb-6 text-left">Featured Projects</h2>

                        <div className="bg-blue-600 overflow-hidden shadow rounded">
                            <div className="md:flex">
                                <div className="md:w-1/2 md:pt-16 md:pr-0 md:pl-12">
                                    <Link className="project-link block relative"
                                       to="/">
                                        <img className="project absolute block rounded-t md:shadow-lg-dark"
                                             src={project} alt="Tailwind CSS"
                                        />
                                    </Link>
                                </div>
                                <div className="px-6 pt-8 pb-6 md:w-1/2 md:px-12 md:py-8 md:flex md:items-center">
                                    <div>
                                        <div className="text-white antialiased text-xl md:text-2xl font-medium">Personal
                                            Website
                                        </div>
                                        <div className="mt-2 md:mt-3 text-white antialiased text-sm md:text-md leading-tight md:leading-normal opacity-75">
                                            I wanted to redesign my website and give it a much needed face lift as well
                                            as create a platform where i can share the knowledge i learn throughout my
                                            career.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Newsletter />

            </Layout>
        )
    }
}
