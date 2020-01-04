import Head from 'next/head';
import config from "../site.config";

function Page({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title || 'Jethro May - Web Developer & Writer'}</title>
                {description !== false && (
                    <meta
                        name="description"
                        content={description || config.siteDescription}
                    />
                )}
            </Head>
            {children}
        </div>
    );
}

export default Page;
