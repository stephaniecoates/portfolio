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
              borderRadius: `50%`,
              border: "2px solid black",
              boxShadow: "-1px 2px grey"
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
        fixed(width: 130, height: 130) {
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
