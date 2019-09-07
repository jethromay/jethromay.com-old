import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="intro lg:pt-20 lg:pb-10 mb-10">
          <div className="flex flex-col">
              <h1 className="font-bold text-6xl xs:text-5xl sm:text-5xl">Hi, I'm Jethro.</h1>
              <p className="mb-4">I am a web developer & writer with a passion for Laravel.</p>
              <div className="social flex">
                  <iframe id="twitter-widget" scrolling="no" frameBorder="0" allowTransparency="true"
                          className="twitter-follow-button twitter-follow-button-rendered"
                          title="Twitter Follow Button"
                          src="https://platform.twitter.com/widgets/follow_button.0639d67d95b7680840758b6833f06d87.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=may_jethro&amp;show_count=true&amp;show_screen_name=false&amp;size=l&amp;time=1564308648856"
                          data-screen-name="may_jethro">
                  </iframe>
                  <a className="github-button" href="https://github.com/jethromay" data-size="large"
                     data-show-count="true" aria-label="Follow @jethromay on GitHub">Follow</a>
              </div>
          </div>
      </div>
  </Layout>
);

export default IndexPage
