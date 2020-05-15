import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PageContainer = styled.div`
  box-sizing: border-box;
  font-family: Georgia, serif;
  width: 100%;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  height: 12vh;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Optima, Avenir, sans-serif;
  font-size: 2em;
  margin: auto 0px;
  padding-left: 40px;
  letter-spacing: -4px;
`

const MenuLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
`

const MenuLink = styled(Link)`
  padding-right: 60px;
  font-size: 1em;
  text-decoration: none;
  color: black;
`
const FooterContainer = styled.p`
  color: gray;
  margin-top: 60px;
  padding-right: 20px;
  text-align: right;
`

const InlineFooterLink = styled.a`
  text-decoration: none;
  color: gray;
  &:visited {
    text-decoration: none;
    color: gray;
  }
`

const Header = () => (
  <HeaderContainer>
    <LogoLink to="/">SC</LogoLink>
    <MenuLinkContainer>
      <MenuLink to="/">about</MenuLink>
      <MenuLink to="/blog">blog</MenuLink>
    </MenuLinkContainer>
  </HeaderContainer>
)

const Footer = () => (
  <FooterContainer>
    Made with ♡ with{' '}
    <InlineFooterLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.gatsbyjs.org/"
    >
      Gatsby
    </InlineFooterLink>
    ,{' '}
    <InlineFooterLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://graphql.org/"
    >
      GraphQL
    </InlineFooterLink>
    , and{' '}
    <InlineFooterLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.contentful.com/"
    >
      Contentful
    </InlineFooterLink>
    . Deployed on{' '}
    <InlineFooterLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.netlify.com/"
    >
      Netlify
    </InlineFooterLink>
    .
  </FooterContainer>
)

const Layout = ({ children }) => (
  <PageContainer>
    <Header />
    {children}
    <Footer />
  </PageContainer>
)

export default Layout
