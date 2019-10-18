import React, { Component } from "react"
import styled from "styled-components"
import Typed from "typed.js"
import Profile from "./../components/profile"

const options = {
  strings: ["Hi!^1000 I'm Steph.^500", "Welcome to my portfolio."],
  typeSpeed: 75,
  backSpeed: 30,
  showCursor: true,
  cursorChar: "_",
}

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
`

const TypedContainer = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 2.5em;
    margin: 20px;
  }

  @media only screen and (min-width: 600px) {
    font-size: 2.5em;
    align-self: flex-start;
    margin-left: 30px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3em;
    margin: 0px 40px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 3.5em;
    margin: 0px 80px;
  }
`
const AboutContainer = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
  }
`
const DescriptionContainer = styled.div`
  @media only screen and (max-width: 600px) {
    margin: 50px 20px 20px 20px;
    font-size: 1.25em;
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    margin: 20px 20px 20px 40px;
    font-size: 1.3em;
    width: 50%;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.35em;
    margin: 20px 40px 20px 40px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.5em;
    margin: 20px 80px 20px 40px;
  }
`

export default class Home extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // destroy instance to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <HomepageContainer>
        <TypedContainer>
          <span
            ref={el => {
              this.el = el
            }}
          />
        </TypedContainer>
        <AboutContainer>
          <Profile />
          <DescriptionContainer>
            I'm a full stack developer living in Tempe, Arizona. Currently, I
            work on cool digital projects at{" "}
            <a
              href="https://www.americanexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#006fcf", textDecoration: "none" }}
            >
              American Express
            </a>{" "}
            and am available for remote freelance work.
          </DescriptionContainer>
        </AboutContainer>
      </HomepageContainer>
    )
  }
}
