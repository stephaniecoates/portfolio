import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Profile() {
  return (
    <StaticQuery
      query={profileQuery}
      render={(data) => {
        return (
          <Image
            style={{ borderRadius: '2px' }}
            fixed={data.file.childImageSharp.fixed}
            alt="profile picture"
          />
        )
      }}
    />
  )
}

export const profileQuery = graphql`
  query {
    file(relativePath: { regex: "/scportrait.jpeg/" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Profile
