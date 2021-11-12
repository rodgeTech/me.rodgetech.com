import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContainerLayout, Intro } from "../components/common"
import { Text, Title } from "../components/about/style"

const LearnCodePage = () => (
  <Layout>
    <SEO title="Learn code" />
    <ContainerLayout>
      <Intro className="center">
        <Title>Learn code with me</Title>
        <Text>
          Learning code is a never ending process. The moment you stop learning
          is the moment you render yourself obselete in this ever changing and
          evolving industry.
        </Text>
      </Intro>
    </ContainerLayout>
  </Layout>
)

export default LearnCodePage
