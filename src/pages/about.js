import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

export default class About extends Component {
    render() {
        return (
            <Layout>
                <SEO title="About"/>
                <h1>About</h1>
                <Link to="/">Go back to the homepage</Link>
            </Layout>
        )
    }
}
