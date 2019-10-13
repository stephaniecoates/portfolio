import React, { Component } from "react"
import Layout from "./../components/layout"
// import styled from "styled-components"
import Typed from "typed.js"
import Profile from "./../components/profile"


const options = {
  strings: ["Hi!^1000 I'm Steph.^500", "Welcome to my portfolio."],
  typeSpeed: 75,
  backSpeed: 30,
  showCursor: true,
  cursorChar: '_'
}
export default class Homepage extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <Layout>
        <div
          className="type-wrap"
          style={{fontSize: "3em", marginBottom: '100px'}}
          >
          <span
            ref={el => {
              this.el = el
            }}
            />
        </div>
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: 'center'}}>
        <div style={{margin: '0px 50px 0px 0px'}}>
            <Profile />
            </div>

        <div style={{width: "50%", fontSize: '1.25em'}}>
          I'm a full stack developer living in Tempe, Arizona. Currently, I work
          on cool digital projects at{" "}
          <a
            href="https://www.americanexpress.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006fcf", textDecoration: 'none' }}
          >
            American Express
          </a>{" "}
          and am available for remote freelance work.
        </div></div>
      </Layout>
    )
  }
}
