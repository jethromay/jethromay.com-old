require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')();

module.exports = withCSS(
    withMDX({
        pageExtensions: ['js', 'jsx', 'mdx'],
        env: {
            MAILCHIMP_URL: process.env.MAILCHIMP_URL,
        },
    })
);