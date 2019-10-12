import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Container = styled.div`
background-color: #faf9f7;
height: 100%;
`

const MenuLink = styled(Link)`
padding: 5vh 2vw;
`
class Layout extends React.Component {
  render() {
    const { children } = this.props
    const header = (
      <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '15px'}}>
         <MenuLink to="/">home</MenuLink>
          <MenuLink to="/timeline">timeline</MenuLink>
         <MenuLink to="/projects">projects</MenuLink>
         <MenuLink to="/contact">contact</MenuLink>
         <MenuLink to="/blog"> blog</MenuLink>
      </div>
    )
    return (
      <Container>
        <div>{header}</div>
        <div>{children}</div>
      </Container>
    )
  }
}

export default Layout
