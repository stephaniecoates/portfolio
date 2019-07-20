import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Profile () {
  return (
    <StaticQuery
      query={ProfileQuery}
      render={data => {
        const { title } = data.site.siteMetadata
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={title}
            style={{
              margin: '40px 0px 30px 0px',
              borderRadius: `50%`,
              border: "1px solid #5a6653",
              boxShadow: "0 0 1px 10px rgba(138, 155, 127, 0.5), 0 0 1px 25px rgba(176, 191, 166, 0.4)"
            }}
          />
        )
      }}
    />
  )
}

const ProfileQuery = graphql`
  query ProfileQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Profile
