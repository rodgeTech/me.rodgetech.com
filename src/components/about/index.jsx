import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
              />
              <SubTitle> Full Stack Developer</SubTitle>
            </div>
            <div>
              <Title> Hello, I’m Luis </Title>
              <Text>
                {" "}
                I'm a full stack developer hailing from{" "}
                <b className="text-primary lined-link">Belize</b> living in
                Santa Elena with a burning 🔥 passion for all things coding and
                tech.{" "}
              </Text>
              <Text>
                {" "}
                I love working with modern web technologies, and building small
                to medium size projects for the purpose of learning.
              </Text>
              <Text>
                {" "}
                My favorite technologies right now are: React.js, Typescript,
                GraphQL, Node.js, and PostgreSQL. This is also currently my go
                to stack.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank">
                {" "}
                Download resume{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
