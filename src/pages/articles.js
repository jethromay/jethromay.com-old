import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import config from "../../config/website"
import Layout from "../layout/layout"
import SEO from "../components/seo"

export default class Articles extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Articles – ${config.siteTitle}`} />
                <SEO />
                <h1>Articles</h1>
                <Link to="/">Go back to the homepage</Link>
            </Layout>
        )
    }
}
