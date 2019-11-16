import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageContainer = styled.div`
width: 80%;
margin: 30px auto;
@media only screen and (min-width: 750px) {
    width: 60%;
  }
`

const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 40px;
`

const Content = styled.p`
line-height: 1.5em;
`

const Posts = styled.div`
width: 100%;
margin: 0px auto;
@media only screen and (min-width: 500px) {
  width: 90%;
}
@media only screen and (min-width: 900px) {
  width: 80%;
}
`
const Subhead = styled.h3`
  font-weight: bold;
  margin: 50px 0px 20px 0px;
`
const PostLink = styled(Link)`
padding: 10px 0px;
text-decoration: none;
font-size: 1.1em;
&:visited {
  color: black;
  text-decoration: none;
}
&:hover {
  color: #82997E;
  transition: 0.5s;
  text-decoration: none;
}
`


class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulPost.edges
    return (
      <Layout>
        <PageContainer>
      <Header>blog</Header>
      <Content>
        This is the sum of my efforts to learn in public. I enjoy writing about technical concepts at a high level - figuring out how stuff works under the hood, how all the moving pieces in technology function together, and explaning it in an accessible way so that people with varying levels technical knowledge understand. You'll find a lot of that here, as well as general posts about technology, programming, and JavaScript, and some personal development musings sprinkled in, too.
         </Content>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Posts>
        <Subhead>all posts</Subhead>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
                <PostLink key={node.slug} to={`/${node.slug}`}>
                  {title}
                </PostLink>
          )
        })}
        </Posts>
        </PageContainer>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
