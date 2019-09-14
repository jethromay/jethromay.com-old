// import React, {Component} from "react"
// import { graphql } from "gatsby"
// import Layout from "../layout/layout"
// import SEO from "../components/seo"
//
// export default function Template({
//                                      data, // this prop will be injected by the GraphQL query below.
//                                  }) {
//     const { markdownRemark } = data // data.markdownRemark holds our post data
//     const { frontmatter, html } = markdownRemark
//     return (
//         <div className="blog-post-container">
//             <div className="blog-post">
//                 <h1>{frontmatter.title}</h1>
//                 <div
//                     className="blog-post-content"
//                     dangerouslySetInnerHTML={{ __html: html }}
//                 />
//             </div>
//         </div>
//     )
// }
// export const pageQuery = graphql`
//   query PageBySlug(slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         template
//       }
//       fields {
//         slug
//         date
//       }
//     }
//   }
// `;