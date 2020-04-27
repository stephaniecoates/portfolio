import React from "react"
import styled from "styled-components"
import Profile from "./profile"
import Topo from "./topo.js"
import { Link, withPrefix } from "gatsby"

const TopoContainer = styled.div`
  max-height: 88vh;
  overflow: hidden;
`

const AboutContainer = styled.div`
  max-width: 55em;
  margin: 0px auto;
`

const LeftIntro = styled.h1`
  text-align: left;
  font-size: 2em;
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

const InlineInternalLink = styled(Link)`
  font-weight: bold;
  color: black;
`

const InlineExternalLink = styled.a`
  font-weight: bold;
  color: black;
`
const ItalicSpan = styled.span`
  font-style: italic;
`
const BoldSpan = styled.span`
  font-weight: bold;
`

const About = () => (
  <React.Fragment>
    <TopoContainer>
      <Topo />
    </TopoContainer>
    <AboutContainer id="about">
      <LeftIntro>Hey! I'm Steph.</LeftIntro>
      <TopAboutSection>
        By trade, I'm a software developer. I write code, build digital
        products, and have an absolute blast doing so. Behind my success in
        tech, however, is a variety of unique experiences that have shaped me
        into the person I am today. I've fine-tuned my emotional intelligence as
        a wilderness therapy guide, built up self-sufficiency and resilience on
        long-distance solo backpacking trips, and rolled with unfamiliarity as a
        foreign English teacher abroad. I pride myself on being an exceptional
        leader, teammate, and developer, and there's much more than code
        tutorials that got me here.
      </TopAboutSection>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <AboutSection>
        I'm passionate about solving problems and understanding complex systems.
        My goal is to do interesting things that matter.
      </AboutSection>
      <AboutSection>
        While skills can be taught, character is inherent. My biggest strength
        is my never-ending desire to improve, both as a human being and as an
        engineer. I believe in having a{" "}
        <InlineExternalLink
          target="_blank"
          href="https://www.youtube.com/watch?v=_X0mgOOSpLU&feature=emb_title"
          rel="noopener noreferrer"
        >
          growth mindset
        </InlineExternalLink>
        , replacing the belief <ItalicSpan>“I’m bad at X”</ItalicSpan> with{" "}
        <ItalicSpan>“I haven’t learned about X yet”</ItalicSpan>. I'm
        optimistic, enthusiastic, equal parts collaborative and autonomous, and
        skilled at building connections with others.
      </AboutSection>
      <AboutSection>
        I'm incessantly curious and <BoldSpan>LOVE</BoldSpan> learning new
        things. (Ironically, this didn't happen until after I graduated from the
        traditional education system.) Now, I build/create out of sheer
        enjoyment, I read <ItalicSpan>a lot</ItalicSpan>, and I've got plans to
        live all over the world. I like to experience ways of thinking and
        living that stretch my mind and challenge my existing viewpoints.
      </AboutSection>
      <AboutSection>
        Materialistically, I value simplicity. I don’t like the feeling of
        having more than I need. This applies to tech, too: I write code that's
        clean, maintainable, and performant. I avoid spaghetti code that{" "}
        <ItalicSpan>"works, but I don't know why"</ItalicSpan> and always strive
        to understand exactly what's happening in my program. Exploring what
        happens under the hood is the central idea behind most{" "}
        <InlineInternalLink to="/blog">articles</InlineInternalLink> I write.
      </AboutSection>
      <AboutSection>
        I’m deliberate with how I structure my life. I don't believe in being
        complacent, or doing things that feel lukewarm. I'm picky about the
        people, situations, and projects I engage with, and when I find the ones
        that are a resounding <ItalicSpan>HELL YEAH</ItalicSpan>, I give them my
        undivided attention and commitment.
      </AboutSection>
      <AboutSection>
        If you'd like to connect, feel free to get in touch through email,
        Twitter or LinkedIn.
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
            href={withPrefix("/StephanieCoatesResume.pdf")}
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
