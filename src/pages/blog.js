import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled.div`
display: flex;
`

const PostText = styled.div`
flex: 75%;
`
class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges
    return (
      <Layout 
      // location={this.props.location} 
      title={siteTitle}>
      <h1>blog posts</h1>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug}>
            <PostText>
              <h3
                style={{
                  marginTop: '0px',
                  
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <p>{node.subtitle}</p>
              </PostText>
            </Post>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
   allContentfulPost {
     edges {
       node {
         title
         slug
       }
     }
   }
  }
`
