import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { withPrefix } from 'gatsby'

const PageContainer = styled.div`
width: 80%;
margin: 30px auto;
@media only screen and (min-width: 600px) {
  width: 75%;
}
  @media only screen and (min-width: 800px) {
    width: 70%;
  @media only screen and (min-width: 900px) {
    width: 60%;
  }
`

const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 40px;
`
const Subhead = styled.h3`
margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
`
const Content = styled.p`
line-height: 1.5em;
`
const Bullet = styled.li`
line-height: 1.5em;
`

const About = () => {
  return (
    <Layout>
      <PageContainer>
        <Header>about</Header>
        <Content>I'm curious and optimistic, a perpetual student and total soft-skill nerd.</Content>
        <Content>I feel fortunate to work in a field where work feels like play, and the opportinities to use technology to positively impact the world are incredible.</Content>
        <Content>Outside of tech, I love long backpacking trips, quality books and podcasts, and connecting with genuine people.</Content>
        <Subhead>tech I'm particularly interested in</Subhead>
        <ul>
        <Bullet>health tech: big data, analytics, AI/ML, wearables, diagnostic tools, software/hardware aiding people with disabilities (i.e. robotic prosthetics)</Bullet>
        <Bullet>making food production/distribution more efficient and environmentally friendly</Bullet>
        <Bullet>transportation and autonomous vehicles</Bullet>
        <Bullet>virtual reality, augmented reality, and haptics</Bullet>
        <Bullet>cybersecurity</Bullet>
        </ul>
        <Subhead>projects</Subhead>
        <Content>Check out my latest projects on <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#006fcf", textDecoration: "none" }}
            >
              GitHub
            </a></Content>
        <Subhead>resume</Subhead>
        <Content>Check out my <a
              href={withPrefix('/resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#006fcf", textDecoration: "none" }}
        >resume</a></Content>
        <Subhead>recent accomplishments I'm proud of</Subhead>
        <Content>2015</Content>
        <ul>
            <Bullet>helped lead a ten day whitewater rafting expedition on the Rogue River in Oregon</Bullet>
            <Bullet>solo thru-hiked the 165-mile Tahoe Rim Trail in Nevada/California</Bullet>
        </ul>
        <Content>2016</Content>
        <ul>
            <Bullet>helped lead a three week rafting/backpacking expedition in the canyons of southern Utah </Bullet>
        </ul>
        <Content>2017</Content>
        <ul>
            <Bullet>graduated from Sierra Nevada College with a degree in Interdisciplinary Studies: Journalism and Outdoor Adventure Leadership</Bullet>
            <Bullet>earned my TEFL (Teaching English as a Foreign Language) certification</Bullet>
            <Bullet>lived abroad and taught English in Chiang Mai, Thailand</Bullet>
        </ul>
        <Content>2018</Content>
        <ul>
            <Bullet>worked as a wilderness therapy guide in southwest Colorado</Bullet>
            <Bullet>solo thru-hiked the 160-mile Collegiate Peaks Loop in Colorado</Bullet>
            <Bullet>learned to code at <a
              href="https://www.devmountain.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#006fcf", textDecoration: "none" }}
            >
              DevMountain
            </a></Bullet>
        </ul>
        <Content>2019</Content>
            <Bullet>launched my software career at <a
              href="https://www.americanexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#006fcf", textDecoration: "none" }}
            >
              American Express
            </a></Bullet>
            <Subhead>contact</Subhead>
          <Content>If you've got questions, are interested in working together, or just want to say hello, don't hesitate to reach out on <a
          style={{ color: "#006fcf", textDecoration: "none" }}
          href="https://www.linkedin.com/in/stephanie-coates/"
          target="_blank"
          rel="noopener noreferrer"
          >linkedin</a> or via email at <a                   
          style={{ color: "#006fcf", textDecoration: "none" }}
              href="mailto:stcoates8@gmail.com">
              stcoates8@gmail.com</a>.</Content>
        <br/>
        <br/>
      </PageContainer>
    </Layout>
  )
}

export default About
