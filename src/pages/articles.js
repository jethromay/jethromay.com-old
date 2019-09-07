import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

const Articles = () => (
    <Layout>
        <SEO title="Articles" />
        <h1>Articles</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default Articles
