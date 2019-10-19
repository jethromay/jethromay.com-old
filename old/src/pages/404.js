import React from "react"
import Helmet from "react-helmet"
import config from '../../config/website'
import Layout from "../layout/layout"
import SEO from "../components/seo"

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Page Not Found – ${config.siteTitle}`} />
                <SEO />
                <h1>Not Found</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </Layout>
        )
    }
}
