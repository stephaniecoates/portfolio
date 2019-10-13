import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Profile () {
  return (
    <StaticQuery
      query={ProfileQuery}
      render={data => {
        const { title, profileColor } = data.site.siteMetadata
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={title}
            style={{
              borderRadius: `50%`,
              border: `1px solid ${profileColor}`,
              boxShadow: `0 0 1px 12px ${profileColor}66, 0 0 1px 24px ${profileColor}4D`
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
        profileColor
      }
    }
  }
`

export default Profile
