import React, { Component } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import SEO from "../components/seo";
import Layout from "../layout/layout";
import config from "../../config/website"

export default class Page extends React.Component {
    render() {
        const { slug } = this.props.pageContext
        const postNode = this.props.data.markdownRemark
        const page = postNode.frontmatter

        if (!page.id) {
            page.id = slug
        }

        return (
            <Layout>
                <Helmet>
                    <title>{`${page.title} - ${config.siteTitle}`}</title>
                </Helmet>
                <SEO postPath={slug} postNode={postNode}/>
                <div className="container lg:mt-20 lg:mb-20">
                    <article>
                        <header>
                            <h1 className="font-bold text-5xl mb-4">{page.title}</h1>
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                    </article>
                </div>
            </Layout>
        )
    }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        template
      }
      fields {
        slug
      }
    }
  }
`