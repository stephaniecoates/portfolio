import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PageContainer = styled.div`
  max-width: 35em;
  margin: 0px auto;
  padding: 20px;
`

const Header = styled.h1`
  margin: 40px auto;
`

const Description = styled.p`
  line-height: 1.6em;
`

const Subhead = styled.p`
  font-weight: bold;
  margin: 30px 0px 20px 0px;
  font-size: 1.3em;
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`

const InlineInternalLink = styled(Link)`
  font-weight: bold;
  color: black;
`

const PostLink = styled(Link)`
  color: black;
  padding: 10px 0px;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`
const BlogIndex = ({ data }) => {
  let posts = data.allContentfulPost.edges
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[
          `blog`,
          `software development`,
          `software engineering`,
          `javascript`,
          `react`,
        ]}
        lang="en"
        author="Stephanie Coates"
      />
      <PageContainer>
        <Header>blog</Header>
        <Description>
          I love to learn new things, understand systems, and grow as a
          developer. This is my effort to do so{' '}
          <InlineInternalLink to="/learn-in-public">
            in public
          </InlineInternalLink>
          .
        </Description>
        <Posts>
          <Subhead>all posts</Subhead>
          {posts
            // .sort((a, b) => {
            //   return parseInt(a.node.date) - parseInt(b.node.date)
            // })
            // .reverse()
            .map(({ node }) => {
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: { fields: date }) {
      edges {
        node {
          title
          slug
          date
        }
      }
    }
  }
`
