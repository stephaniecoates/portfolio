import React from "react"
import { Link } from "gatsby"
import "./layout.css";
import styled from 'styled-components'

const Container = styled.div`
margin: 40px;
`

const Logo = styled.h1`
position: sticky;
top: 30px;
width: 100%;
color: inherit;
`

const LogoLink = styled(Link)`
text-decoration: none;
color: black;   
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const header = (
      <div>
        <Logo>
          <LogoLink to="/">
            SC
          </LogoLink>
        </Logo>
        <nav>
          <input type="checkbox" className="menu-open" name="menu-open" id="menu-open"/>
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="hamburger hamburger-1"></span>
            <span className="hamburger hamburger-2"></span>
            <span className="hamburger hamburger-3"></span>
          </label>
         <Link to="/blog" className="menu-item"> blog</Link>
          <Link to="/contact" className="menu-item"> contact </Link>
          <Link to="/projects" className="menu-item">projects </Link>
          <Link to="/" className="menu-item">intro</Link>
      </nav>
      </div>
    )
    return (
      <Container>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
