import React from "react"
import Helmet from "react-helmet"
import config from "../../config/website"

export default class SEO extends React.Component {
  render() {
    return (
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <meta name="image" content="" />

          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:description" content={config.siteDescription} />
          <meta property="og:image" content="" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={config.twitterAccount} />
          <meta name="twitter:title" content={config.siteTitle} />
          <meta name="twitter:description" content={config.siteDescription} />
          <meta name="twitter:image" content="" />
        </Helmet>
    )
  }
}