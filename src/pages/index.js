import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import GitHubButton from 'react-github-btn'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="intro lg:pt-20 lg:pb-10 mb-10">
          <div className="flex flex-col">
              <h1 className="font-bold text-6xl xs:text-5xl sm:text-5xl">Hi, I'm Jethro.</h1>
              <p className="mb-4">I am a web developer & writer with a passion for Laravel.</p>
              <div className="social flex">
                  <a href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
                     className="twitter-follow-button"
                     data-show-count="false">Follow @may_jethro
                  </a>
                  <GitHubButton
                      href="https://github.com/jethromay"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Follow @jethromay on GitHub"
                  >
                      Follow
                  </GitHubButton>
              </div>
          </div>
      </div>
  </Layout>
);

export default IndexPage
