import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageContainer = styled.div`
  max-width: 40em;
  margin: 60px auto;
  padding: 0px 20px;
`

const Subhead = styled.div`
  color: #505050;
  font-size: 0.9em;
`

const Content = styled.p`
  line-height: 1.9em;
  font-size: 1.1em;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const NavLinkLeft = styled(Link)`
  color: black;
  text-decoration: none;
  width: 45%;
`
const NavLinkRight = styled(Link)`
  color: black;
  text-decoration: none;
  width: 45%;
  text-align: right;
`

const BlogPostContentfulTemplate = ({ data, pageContext }) => {
  const { contentfulPost } = data
  const { previous, next } = pageContext
  return (
    <Layout>
      <PageContainer>
        <SEO
          title={contentfulPost.title}
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
        <h1>{contentfulPost.title}</h1>
        <Subhead>by Stephanie Coates</Subhead>
        <Content
          dangerouslySetInnerHTML={{
            __html: contentfulPost.markdown.childMarkdownRemark.html,
          }}
        />
        <hr />
        <NavContainer>
          {previous && (
            <NavLinkLeft to={previous.slug} rel="prev">
              ← {previous.title}
            </NavLinkLeft>
          )}
          {next && (
            <NavLinkRight to={next.slug} rel="next">
              {next.title} →
            </NavLinkRight>
          )}
        </NavContainer>
      </PageContainer>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      tags
      markdown {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
