import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import SEO from "../components/seo";
import Layout from "../layout/layout";
import config from "../../config/website"

export default class Post extends React.Component {
    render() {

        return (
            <div>

            </div>
        )
    }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        template
      }
      fields {
        slug
      }
    }
  }
`