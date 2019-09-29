const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const {createPage} = actions

    return new Promise((resolve, reject) => {
        //const postTemplate = path.resolve('src/templates/post.js')
        const pageTemplate = path.resolve('src/templates/page.js')

        resolve(
            graphql(`
              {
                allMarkdownRemark {
                  edges {
                    node {
                      frontmatter {
                        template
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                result.data.allMarkdownRemark.edges.forEach(edge => {

                    // if (edge.node.frontmatter.template === 'post') {
                    //     createPage({
                    //         path: edge.node.fields.slug,
                    //         component: postTemplate,
                    //         context: {
                    //             slug: edge.node.fields.slug,
                    //         },
                    //     })
                    // }

                    if (edge.node.frontmatter.template === 'page') {
                        createPage({
                            path: edge.node.fields.slug,
                            component: pageTemplate,
                            context: {
                                slug: edge.node.fields.slug,
                            },
                        })
                    }
                })
            })
        )
    })
}