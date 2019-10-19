const config = require('./config/website');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: `Jethro May`,
    description: `Is a web developer & writer with a passion for Laravel.`,
    author: `@jethromay`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: `Jethro May`,
        description: config.siteDescription,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
  ],
};
