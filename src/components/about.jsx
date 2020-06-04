import React from 'react'
import styled from 'styled-components'
import Profile from './profile'
import { withPrefix } from 'gatsby'
import SEO from './seo'

const AboutContainer = styled.div`
  max-width: 45em;
  margin: 0px auto;
`

const LeftIntro = styled.h1`
  text-align: left;
  font-size: 2.5em;
  padding: 40px 20px 20px 20px;
`

const TopAboutSection = styled.div`
  font-size: 1.1em;
  line-height: 1.8em;
  margin: 20px;
  margin-right: 30%;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`

const AboutSection = styled.p`
  font-size: 1.1em;
  line-height: 1.8em;
  margin: 20px;
  margin-left: 30%;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 40px 0px 20px 0px;
  margin-left: 30%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0px;
  }
`

const ContactContainer = styled.div`
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`

const SocialLinkContainer = styled.p`
  margin: 20px;
  margin-right: 30%;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`

const SocialLink = styled.a`
  font-size: 2.2em;
  font-weight: bold;
  color: black;
  @media (max-width: 768px) {
    font-size: 1.9em;
  }
  @media (max-width: 411px) {
    font-size: 1.8em;
  }
`

const ItalicSpan = styled.span`
  font-style: italic;
`

const About = () => (
  <React.Fragment>
    <SEO
      title="About"
      keywords={[
        `blog`,
        `software development`,
        `software engineering`,
        `javascript`,
        `react`,
      ]}
      lang="en"
      author="Stephanie Coates"
    />
    <AboutContainer>
      <LeftIntro>Hi! I'm Steph.</LeftIntro>
      <TopAboutSection>
        I'm a software developer. I've got a knack for building beautiful,
        high-quality digital experiences and I love what I do. I'm passionate
        about solving problems and understanding complex systems - my goal is do
        interesting things that matter.
      </TopAboutSection>
      <AboutSection></AboutSection>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <AboutSection>
        My greatest strength is my never-ending desire to improve, both as a
        human being and a developer. I believe in having a growth mindset,
        replacing the belief <ItalicSpan>“I’m bad at X”</ItalicSpan> with{' '}
        <ItalicSpan>“I haven’t learned about X yet”</ItalicSpan>. I'm curious
        and enthusiastic, quick at picking up new skills, and equal parts
        collaborative and autonomous.
      </AboutSection>
      <AboutSection>
        Before learning to code, I worked as a wilderness therapy guide in
        Colorado and a foreign English teacher in Thailand. These experiences
        instilled skills like resilience, self-sufficiency, communication, and
        discipline, all which have shaped me into the person I am today.
      </AboutSection>
      <AboutSection>
        If you'd like to connect, reach out through email, Twitter or LinkedIn.
        I'd love to hear from you.
      </AboutSection>
      <ContactContainer>
        <SocialLinkContainer>
          <SocialLink href="mailto:stcoates8@gmail.com">
            stcoates8@gmail.com
          </SocialLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink
            href="https://twitter.com/_stephcoates"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </SocialLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink
            href="https://www.linkedin.com/in/stephanie-coates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </SocialLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink
            href="https://github.com/stephaniecoates"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </SocialLink>
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink
            href={withPrefix('/StephanieCoatesResume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </SocialLink>
        </SocialLinkContainer>
      </ContactContainer>
    </AboutContainer>
  </React.Fragment>
)

export default About
