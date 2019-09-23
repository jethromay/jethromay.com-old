import React from "react"
import Helmet from "react-helmet"
import config from "../../config/website"

export default class SEO extends React.Component {
  render() {
    return (
        <Helmet>
          <meta name="description" content="" />
          <meta name="image" content="" />

          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />
        </Helmet>
    )
  }
}