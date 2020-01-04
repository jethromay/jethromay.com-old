import Document, { Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from '../lib/gtag';

class PersonalSite extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
            </Head>
            <body>
                <Main />
                <NextScript />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
                    }}
                />
            </body>
            </html>
        )
    }
}