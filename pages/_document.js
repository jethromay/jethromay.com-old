import Document, { Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from '../lib/gtag';

class PersonalSite extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="en">
            <Head>
                {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
                <style dangerouslySetInnerHTML={{__html: `
                    @font-face {
                      font-family: 'Inter';
                      font-style: normal;
                      font-weight: 400;
                      src: url(https://fonts.gstatic.com/s/inter/v1/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiJ-Ck-_seA.woff2) format('woff2');
                    }
                }
                `}}/>
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

export default PersonalSite;
