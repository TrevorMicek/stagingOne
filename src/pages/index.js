import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import About from '../components/tailwindComps/FeatureSection'
import Music from '../components/tailwindComps/Pricing'
const IndexPage = () => {

  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />

    <About />
    <Music />

  </Layout>
  )
}
export default IndexPage
