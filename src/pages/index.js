import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import About from "../components/about"
import Skills from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="About me" />
    <About />
    <Skills />
  </Layout>
)

export default IndexPage
