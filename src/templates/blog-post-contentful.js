import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostContentfulTemplate extends Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
        <h1>{post.title}</h1>
        <p
          style={{
            // ...scale(-1 / 5),
            display: `block`,
            // marginBottom: rhythm(1),
            // marginTop: rhythm(-1),
          }}
        >
          {post.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <hr
          style={{
            // marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
query ContentfulBlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  contentfulPost( slug: { eq: $slug }) {
    title
    subtitle
    author
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    content {
      childContentfulRichText {
        html
      }
    }
  }
}
`
