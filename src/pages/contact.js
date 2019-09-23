import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import config from "../../config/website"
import Layout from "../layout/layout"
import SEO from "../components/seo"

export default class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Contact – ${config.siteTitle}`}/>
                <SEO/>
                <div className="container lg:mt-20 lg:mb-20">
                    <h1 className="font-bold text-5xl mb-4">Get in touch</h1>
                    <p className="mt-2 mb-6">You may contact me via email or connect with me around the web.</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <span className="font-bold">Email:</span>
                            <a className="text-blue-500 hover:text-blue-800"
                               href="mailto:hello@jethromay.com">hello@jethromay.com</a>
                        </li>
                        <li>
                            <span className="font-bold">GitHub:</span>
                            <a className="text-blue-500 hover:text-blue-800"
                               href="https://github.com/jethromay">jethromay</a>
                        </li>
                        <li>
                            <span className="font-bold">Twitter:</span>
                            <a className="text-blue-500 hover:text-blue-800"
                               href="https://twitter.com/may_jethro">may_jethro</a>
                        </li>
                        <li>
                            <span className="font-bold">LinkedIn:</span>
                            <a className="text-blue-500 hover:text-blue-800"
                               href="https://www.linkedin.com/in/jethro-may-za/">jethromay</a>
                        </li>
                    </ul>
                </div>
            </Layout>
        )
    }
}
