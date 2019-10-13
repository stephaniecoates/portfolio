import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  box-sizing: border-box;
  height: 98vh;
  font-family: ${props => props.font};
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LogoLink = styled(Link)`
  font-size: 1.4em;
  color: ${props => props.color};
  text-decoration: none;
`

const MenuLink = styled(Link)`
  padding: 30px;
  text-decoration: none;
  letter-spacing: 1.2px;
  color: ${props => props.color};
  &:hover {
    font-weight: bold;
    text-decoration: none;
  }
`
const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 0.9em;
  padding: 0px 35px;
  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`
const Layout = props => (
  <StaticQuery
    query={ColorQuery}
    render={data => {
      const {
        titleColor,
        backgroundColor,
        navColor,
        profileColor,
        footerColor,
        title,
        font,
      } = data.site.siteMetadata
      const { children } = props
      const header = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{padding: '30px'}}>
            <LogoLink color={titleColor} to="/">
              {title}
            </LogoLink>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "30px",
            }}
          >
            <MenuLink color={navColor} to="/timeline">
              timeline
            </MenuLink>
            <MenuLink color={navColor} to="/projects">
              projects
            </MenuLink>
            <MenuLink color={navColor} to="/blog">
              blog
            </MenuLink>
          </div>
        </div>
      )
      const contactFooter = (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ height: "6vh" }} />
          <div
            style={{
              width: "60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: footerColor,
              borderRadius: "10px 10px 0px 0px",
              height: "7vh",
              position: "fixed",
              bottom: "0",
            }}
          >
            <FooterLink
              href="https://github.com/stephaniecoates"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/stephanie-coates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </FooterLink>
            <FooterLink
              href="mailto:stcoates8@gmail.com"
            >
              stcoates8@gmail.com
            </FooterLink>
          </div>
        </div>
      )
      return (
        <Container font={font} backgroundColor={backgroundColor}>
          <div>{header}</div>
          <div style={{ margin: "0 150px 40px 150px" }}>{children}</div>
          <div>{contactFooter}</div>
        </Container>
      )
    }}
  />
)

const ColorQuery = graphql`
  query ColorQuery {
    site {
      siteMetadata {
        title
        font
        backgroundColor
        profileColor
        titleColor
        navColor
        footerColor
      }
    }
  }
`

export default Layout
