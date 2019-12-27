import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BackButton = styled(Link)`
text-decoration: none;
color: #82997E;
width: 95%;
margin: 10px auto 0px;
display: flex;
justify-content: flex-start;
@media only screen and (min-width: 600px) {
  width: 90%;
}
  @media only screen and (min-width: 800px) {
    width: 85%;
  @media only screen and (min-width: 900px) {
    width: 75%;
  }
`
const PageContainer = styled.div`
width: 80%;
margin: 30px auto;
@media only screen and (min-width: 600px) {
  width: 75%;
}
  @media only screen and (min-width: 800px) {
    width: 70%;
  @media only screen and (min-width: 900px) {
    width: 60%;
  }
`

const Date = styled.div`
color: grey;
font-size: 0.9em;`

const Content = styled.p`
line-height: 1.8em;
font-size: 1.15em;
`

const NavContainer = styled.div`
display: flex,
flex-wrap: wrap,
justify-content: space-between,
padding: 0px,
`

const NavLink = styled.div`
color: #82997E;
margin: 5px;
`

class BlogPostContentfulTemplate extends Component {
  render() {
    const post = this.props.data.contentfulPost
    const { previous, next } = this.props.pageContext
    return (
      <Layout>
        <BackButton to="/blog">
        ← all posts
        </BackButton>
        <PageContainer>
        <SEO
          title={post.title}
        />
        <h1>{post.title}</h1>
        <Date>
          published on {moment(post.date).format('MMMM Do, YYYY')}
        </Date>
        <Content dangerouslySetInnerHTML={{ __html: post.markdown.childMarkdownRemark.html }} />
        <hr/>
        <NavContainer>
          <NavLink>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </NavLink>
          <NavLink>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </NavLink>
        </NavContainer>
        </PageContainer>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
query ContentfulBlogPostBySlug($slug: String!) {
  contentfulPost( slug: { eq: $slug }) {
    title
    date
    tags
    markdown {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
