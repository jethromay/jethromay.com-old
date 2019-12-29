require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')();

module.exports = withCSS(
    withMDX({
        target: 'serverless',
        pageExtensions: ['js', 'jsx', 'mdx'],
        env: {
            MAILCHIMP_URL: process.env.MAILCHIMP_URL,
        },
        webpack: (config, { defaultLoaders, isServer, dev }) => {

            if (isServer && !dev) {
                const originalEntry = config.entry;
                config.entry = async () => {
                    const entries = { ...(await originalEntry()) }
                    // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
                    entries['./posts/rss.js'] = './posts/rss.js'
                    return entries
                }
            }

            return config
        },
    })
);