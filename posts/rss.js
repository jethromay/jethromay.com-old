const fs = require('fs');
const path = require('path');
const config = require('../site.config');
const posts = require('./get-posts');

// https://jsonfeed.org/version/1
const feed = {
    version: 'https://jsonfeed.org/version/1',
    title: config.siteTitle,
    home_page_url: config.siteUrl,
    feed_url: `${config.siteUrl}/feed.json`,
    description: config.siteDescription,
    favicon: `${config.siteUrl}/favicon.ico`,
    author: {
        name: config.siteAuthor,
        url: config.siteUrl
    },
    items: posts.map(post => ({
        id: `${config.siteUrl}${post.path}`,
        url: `${config.siteUrl}${post.path}`,
        title: post.title,
        content_text: `${post.summary} - ${config.siteUrl}${post.path}`,
        summary: post.summary,
        image: `${config.siteUrl}${post.image}`,
        date_published: post.date,
        author: "Jethro May",
    })),
};

fs.writeFileSync(path.join('./.next/static', 'feed.json'), JSON.stringify(feed));
