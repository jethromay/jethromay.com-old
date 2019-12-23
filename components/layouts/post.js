import Link from 'next/link'
import { siteMeta } from '../../site.config'
import Layout from './post'
import PublishedAt from '../utils/published-at'
import posts from '../../posts/index'
import Pagination from '../pagination';

export default function Post({ path, meta, children }) {
    // const currentPostIndex = posts
    //     .map(({ title }) => title)
    //     .indexOf(meta.title);
    // const previousPost = posts[currentPostIndex + 1];
    // const nextPost = posts[currentPostIndex - 1];

    return (
        <Layout>
            {/*pageTitle={meta.title} ogImage={meta.image}*/}
            <article className="h-entry">
                {/*<header>*/}
                {/*    <h1 className="p-name">{meta.title}</h1>*/}
                {/*    <div>*/}
                {/*        /!*<PublishedAt date={meta.publishedAt} link={path} />*!/*/}

                {/*        <Link href="/about">*/}
                {/*            <a*/}
                {/*                color="#aaa"*/}
                {/*                rel="author"*/}
                {/*                className="p-author h-card"*/}
                {/*                href="/about"*/}
                {/*            >*/}
                {/*                {siteMeta.siteAuthor}*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</header>*/}
                <div className="e-content">{children}</div>
                {/*<footer>*/}
                {/*    {(previousPost || nextPost) && (*/}
                {/*        <div className="post-pagination">*/}
                {/*            {previousPost && (*/}
                {/*                <Pagination*/}
                {/*                    title={previousPost.title}*/}
                {/*                    path={previousPost.path}*/}
                {/*                    position="previous"*/}
                {/*                />*/}
                {/*            )}*/}
                {/*            {nextPost && (*/}
                {/*                <Pagination*/}
                {/*                    title={nextPost.title}*/}
                {/*                    path={nextPost.path}*/}
                {/*                    position="next"*/}
                {/*                />*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</footer>*/}
            </article>
        </Layout>
    )
}