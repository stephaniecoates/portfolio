import React, { Component } from "react"
import Layout from "./../components/layout"
import Profile from "./../components/profile"
import styled from "styled-components"
import scrollToComponent from "react-scroll-to-component"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typed from "typed.js"
import Projects from './../components/projects'
import ScrollOut from 'scroll-out'
import Skills from './../components/Skills'
import {Link} from 'gatsby'
import Contact from './../components/Contact'

const BioGridFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BioGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
`

const Line1 = styled.p`
  grid-row: 1;
  grid-column: 1;
  place-self: end start;
  margin: 0px;
`
const Line2 = styled.h1`
  grid-row: 2;
  grid-column: 1;
  font-size: 5.5em;
  font-family: Satisfy;
  margin: 40px 0px 20px 0px;
  place-self: center start;
  letter-spacing: -4px;
`
const Line3 = styled.p`
  grid-row: 3;
  grid-column: 1;
  place-self: end end;
  margin: 0px;
`



const options = {
  strings: ["curious", "quirky", "spirited", "creative", "friendly", "driven", "resilient"],
  typeSpeed: 150,
  backSpeed: 75,
  loop: true
};
export default class Intro extends Component {
  constructor(props) {
    super(props)
    this.descriptionRef = React.createRef()
  }
  componentDidMount () {
    this.typed = new Typed(this.el, options);
    ScrollOut({
      cssProps: {
        visibleY: true,
      }
    })
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <Layout title={`SC`} location={this.props.location}>
        <BioGridFlex>
          <Profile />
          <BioGrid>
            <Line1>Hi! I'm</Line1>
            <Line2>Stephanie Coates</Line2>
            <Line3>I write code, among other things.</Line3>
          </BioGrid>
        </BioGridFlex>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            color="#d4d2cd"
            style={{ cursor: "pointer" }}
            size="2x"
            onClick={() =>
              scrollToComponent(this.descriptionRef.current, {
                offset: 0,
                align: "top",
                duration: 1200,
              })
            }
          />
        </div>
        <br />
        <br />
        <div id="about" ref={this.descriptionRef}/>
        <div  style={{margin: '140px 140px 0px 140px'}}> 
        <span style={{marginRight: '17px', fontSize: '2em'}}>I'm a {" "}</span>
        <span className="type-wrap" style={{position: 'absolute', fontFamily: 'Satisfy', fontWeight: 'bold', fontSize: '2.8em', marginTop: '-10px'}}>
          <span
            ref={(el) => { this.el = el; }}
          />
       </span>
       <span style={{marginLeft: '180px', marginBottom: '40px', fontSize: '1.7em'}}> full stack developer based in Tempe, Arizona. 
       Currently, I work on cool digital projects at <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer" style={{color: '#006fcf'}}>American Express</a> and am available for <a href="/#contact" style={{color: '#8a9b7f'}}>remote freelance work</a>.</span>
      <div style={{marginTop: '115px', fontSize: '1.7em'}}>
      I spend my free time hiking, climbing, and <Link style={{color: '#8a9b7f'}} to="/blog">writing articles</Link> on programming. My hope is to make technical concepts <span style={{fontWeight: 'bold'}}>understandable</span> and <span style={{fontWeight: 'bold'}}>accessible</span> to everyone, and in turn, become a better developer myself.
     </div> </div>
      <br />
        <br />
        {/* <Skills /> */}
        <Projects />
        <Contact />
      </Layout>
      
    )
  }
}
