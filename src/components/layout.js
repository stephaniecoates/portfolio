import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import styled from "styled-components"

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  font-family: ${props => props.font};
  font-size: 1em;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`

const LogoLink = styled(Link)`
  font-size: 1.4em;
  color: black;
  text-decoration: none;
  &:hover {
    color: ${props => props.color};
    text-decoration: none;
  }
`

const MenuLink = styled(Link)`
  padding: 30px;
  text-decoration: none;
  letter-spacing: 1.2px;
  color: black;
  &:hover {
    color: ${props => props.color};
    font-weight: bold;
    text-decoration: none;
  }
`

const ExternalMenuLink = styled.a`
  padding: 30px;
  text-decoration: none;
  letter-spacing: 1.2px;
  color: black;
  &:hover {
    color: ${props => props.color};
    font-weight: bold;
    text-decoration: none;
  }
`
const OverlayMenuLink = styled(Link)`
padding: ${props => props.top ? `70px 40px 40px 40px` : `40px`};
text-decoration: none;
font-size: 1.4em;
  letter-spacing: 1.2px;
  color: white;
`

const OverlayExternalMenuLink = styled.a`
  padding: ${props => props.top ? `70px 40px 40px 40px` : `40px`};
  text-decoration: none;
  font-size: 1.4em;
  letter-spacing: 1.2px;
  color: white;
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

const HamburgerMenuContainer = styled.div`
  display: none;

  @media only screen and (max-width: 799px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    }
`
const OverlayHamburgerMenuContainer = styled.div`
  display: none;

  @media only screen and (max-width: 799px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 25px;
    padding-right: 40px;
    }
`

const ExpandedMenuContainer = styled.div`
  display: none;

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
  }
`

const MobileNavOverlay = styled.div`
@media only screen and (min-width: 800px) {
	display: none;
}
@media only screen and (max-width: 800px) {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: black;
	opacity: ${props => props.open ? `1` : `0`};
	visibility: ${props => props.open ? `visible` : `hidden`};
	transition: all .5s ease;
	z-index: 2;
}
`


class Layout extends Component {
  state = {
    showMobileNav: false,
  }

  handleClick = () => {
    this.setState({
      showMobileNav: !this.state.showMobileNav,
    })
  }

  render() {
    return (
      <StaticQuery
        query={ColorQuery}
        render={data => {
          const {
            titleHoverColor,
            navHoverColor,
            footerColor,
            title,
            font,
          } = data.site.siteMetadata
          const { children } = this.props
          const header = (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ padding: "30px" }}>
                <LogoLink color={titleHoverColor} to="/">
                  {title}
                </LogoLink>
              </div>
              <HamburgerMenuContainer>
                <HamburgerMenu
                  isOpen={this.state.showMobileNav}
                  menuClicked={() => this.handleClick()}
                  width={32}
                  height={20}
                  strokeWidth={1}
                  rotate={0}
                  color="black"
                  borderRadius={0}
                  animationDuration={0.4}
                />
              </HamburgerMenuContainer>
              <ExpandedMenuContainer>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingRight: "30px",
                  }}
                >
                  <MenuLink color={navHoverColor} to="/timeline">
                    timeline
                  </MenuLink>
                  <MenuLink color={navHoverColor} to="/projects">
                    projects
                  </MenuLink>
                  <ExternalMenuLink
                    color={navHoverColor}
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </ExternalMenuLink>
                  <MenuLink color={navHoverColor} to="/blog">
                    blog
                  </MenuLink>
                </div>
              </ExpandedMenuContainer>
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
                <FooterLink href="mailto:stcoates8@gmail.com">
                  stcoates8@gmail.com
                </FooterLink>
              </div>
            </div>
          )
          return (
            <div>
            <MobileNavOverlay open={this.state.showMobileNav}>
            <div>MOBILE NAV</div>
            <OverlayHamburgerMenuContainer>
                <HamburgerMenu
                  isOpen={this.state.showMobileNav}
                  menuClicked={() => this.handleClick()}
                  width={32}
                  height={20}
                  strokeWidth={1}
                  rotate={0}
                  color="white"
                  borderRadius={0}
                  animationDuration={0.4}
                />
              </OverlayHamburgerMenuContainer>
              <div
                  style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <OverlayMenuLink top onClick={() => this.handleClick()} color={navHoverColor} to="/">
                    home
                  </OverlayMenuLink>
                  <OverlayMenuLink onClick={() => this.handleClick()} color={navHoverColor} to="/timeline">
                    timeline
                  </OverlayMenuLink>
                  <OverlayMenuLink onClick={() => this.handleClick()} color={navHoverColor} to="/projects">
                    projects
                  </OverlayMenuLink>
                  <OverlayExternalMenuLink
                  onClick={() => this.handleClick()}
                    color={navHoverColor}
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </OverlayExternalMenuLink>
                  <OverlayMenuLink onClick={() => this.handleClick()} color={navHoverColor} to="/blog">
                    blog
                  </OverlayMenuLink>
                </div>            
                </MobileNavOverlay>
            <div>
            <Container font={font}>
              <div>{header}</div>
              <div>{children}</div>
              <div>{contactFooter}</div>
            </Container>
            </div>
            </div>
          )
        }}
      />
    )
  }
}

const ColorQuery = graphql`
  query ColorQuery {
    site {
      siteMetadata {
        title
        font
        titleHoverColor
        navHoverColor
        footerColor
      }
    }
  }
`

export default Layout
