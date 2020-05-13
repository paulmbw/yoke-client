import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import PTHeader from "../components/sections/personal-trainer-intro"
import PTFeatures from "../components/sections/PTFeatures"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PTHeader />
    <PTFeatures />
    <GetStarted />
  </Layout>
)

export default IndexPage
