import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import styled from "styled-components"

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
  font-size: 1.5em;
  color: black;
  text-decoration: none;
  padding: 30px;
  &:hover {
    transition: 0.5s;
    color: ${props => props.color};
    text-decoration: none;
  }
  @media only screen and (max-height: 760px) and (max-width: 400px) {
    font-size: 1.2em;
    padding: 15px;
}
`

const MenuLink = styled(Link)`
  padding: 30px;
  text-decoration: none;
  letter-spacing: 1.2px;
  font-size: 1.2em;
  color: black;
  &:hover {
    transition: 0.5s;
    color: ${props => props.color};
    text-decoration: none;
  }
`

const OverlayMenuLink = styled(Link)`
text-decoration: none;
padding: ${props => props.top ? `50px 30px 30px 30px` : `30px`};
font-size: 1em;
letter-spacing: 1.2px;
color: white;
@media only screen and (min-height: 600px) {
  padding: ${props => props.top ? `70px 40px 40px 40px` : `40px`};
  font-size: 1.3em;
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
padding-top: 10px;
padding-right: 40px;
@media only screen and (min-height: 760px) {
  padding-top: 25px;
}

@media only screen and (max-width: 799px) {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const FooterLink = styled.a`

color: black;
text-decoration: none;
&:hover {
  text-decoration: none;
  transition: 0.5s;
  font-size: 1.05em;
}
@media only screen and (min-width: 400px) {
  font-size: 1em;
  padding: 0px 25px;
}
@media only screen and (min-width: 800px) {
  padding: 0px 30px;
}
@media only screen and (min-width: 900px) {
  padding: 0px 35px;
  }
`

const InvisibleFooterBlock = styled.div`
height: 8vh;
background-color: white;
width: 100vw;
position: fixed;
bottom: 0;
`

const FooterBackground = styled.div`
display: flex;
align-items: center;
border: 1px dashed black;
height: 8vh;
position: fixed;
bottom: 0;
@media only screen and (max-width: 600px) {
  width: 100vw;
  justify-content: space-evenly;
  border-radius: 10px 10px 0px 0px;
}
@media only screen and (min-width: 600px) {
  width: 75vw;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
}
@media only screen and (min-width: 800px) {
  width: 70vw;
@media only screen and (min-width: 900px) {
  width: 60vw;
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
            title,
            font,
          } = data.site.siteMetadata
          const { children } = this.props
          const header = (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <LogoLink color={titleHoverColor} to="/">
                  {title}
                </LogoLink>
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
                  <MenuLink color={navHoverColor} to="/">
                    home
                  </MenuLink>
                  <MenuLink color={navHoverColor} to="/about">
                    about
                  </MenuLink>
                  <MenuLink color={navHoverColor} to="/blog">
                    blog
                  </MenuLink>
                </div>
              </ExpandedMenuContainer>
            </div>
          )
          const contactFooter = (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InvisibleFooterBlock />
              <FooterBackground
              >
                <FooterLink
                  color={navHoverColor}
                  href="https://github.com/stephaniecoates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </FooterLink>
                <FooterLink
                  color={navHoverColor}
                  href="https://www.linkedin.com/in/stephanie-coates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </FooterLink>
                <FooterLink
                color={navHoverColor}
                href="mailto:stcoates8@gmail.com">
                  stcoates8@gmail.com
                </FooterLink>
              </FooterBackground>
            </div>
          )
          return (
            <div>
            <MobileNavOverlay open={this.state.showMobileNav}>
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
                  <OverlayMenuLink top onClick={() => this.handleClick()} to="/">
                    home
                  </OverlayMenuLink>
                  <OverlayMenuLink onClick={() => this.handleClick()} to="/about">
                    about
                  </OverlayMenuLink>
                  <OverlayMenuLink onClick={() => this.handleClick()} to="/blog">
                    blog
                  </OverlayMenuLink>
                </div>            
                </MobileNavOverlay>
            <div>
            <Container font={font}>
              <div>{header}</div>
              <div style={{marginBottom: '7vh'}}>{children}</div>
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
      }
    }
  }
`

export default Layout
