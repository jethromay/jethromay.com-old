require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')();
const glob = require('glob');

module.exports = withCSS(
    withMDX({
        pageExtensions: ['js', 'jsx', 'mdx'],
        options: {
            hastPlugins: [require("mdx-prism")]
        },
        env: {
            MAILCHIMP_URL: process.env.MAILCHIMP_URL,
        },
        webpack: function(config) {
            config.module.rules.push({
                test: /\.md$/,
                use: "raw-loader"
            });
            return config;
        },
        exportPathMap: async function() {
            const routes = {
                '/': { page : '/'}
            };

            //get all .md files in the posts dir
            const posts = glob.sync('/posts/**/*.md');

            //remove path and extension to leave filename only
            const postSlugs = posts.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())

            //add each blog to the routes obj
            postSlugs.forEach(post => {
                routes[`/posts/${post}`] = { page: '/posts/[slug]', query: { slug: post } };
            });

            return routes
        }
    })
);