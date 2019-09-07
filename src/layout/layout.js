/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../styles/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
        <div className="flex flex-col min-h-full">
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className="container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 mt-24 lg:mt-20">{children}</main>
            <footer className="flex-none pt-10 pb-10 pr-5 pl-5">
                <div className="flex items-center justify-center">
                    <span className="text-gray-500">© {new Date().getFullYear()}</span>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">Ko-Fi</Link>
                    <Link to="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">Twitter</Link>
                    <Link to="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">GitHub</Link>
                    <Link to="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">RSS</Link>
                    <Link to="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">Source</Link>
                </div>
            </footer>
        </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout