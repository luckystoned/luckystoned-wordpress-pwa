import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import HeroSlider from "../components/index/HeroSlider"
import CTAImages from "../components/index/CTAImages"
import LatestTrend from "../components/index/LatestTrend"
import Quote from "../components/index/Quote"
import About from "../components/index/About"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Luckystoned', 'Store', 'Wordpress', "Gatsby"]}/>
    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
