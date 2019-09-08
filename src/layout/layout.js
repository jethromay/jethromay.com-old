import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"
import Newsletter from "../components/newsletter";

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
            <Footer />
        </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
