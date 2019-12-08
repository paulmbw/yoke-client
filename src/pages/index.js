import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Header from "../components/sections/header"
import Features from "../components/sections/features"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Features />
    <GetStarted />
  </Layout>
)

export default IndexPage
