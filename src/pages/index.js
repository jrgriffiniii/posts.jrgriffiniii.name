import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <div className="site-bio">
        <div>
          <StaticImage
            src="../images/paynym.png"
            className="footer__paynym"
            width={128}
            height={128}
            layout="fixed"
            alt="Paynym icon"
            placeholder="blurred"
          />
        </div>

        <div >
          <header>
            <h2>
              <Link to="https://github.com/jrgriffiniii" itemProp="url">
                <span itemProp="headline">jrgriffiniii</span>
              </Link>
            </h2>
          </header>
          <h3>Digital Conservator and Developer</h3>
          <p><small>I primarily enjoy studying coding within the domain of cultural heritage and research data preservation. Outside of this, I attempt to study operating systems, firmware and hardware, information security, <a href="https://bitcoiner.guide/privacy/">Bitcoin</a>, and <a href="https://monero.org/">Monero</a>. I value individual sovereignty, strongly oppose censorship in all manifestations, and I am extremely supportive of personal privacy. I strongly dislike the discussion of politics in the workplace, and my personal views do not reflect those of my current or past employers.</small></p>
          <ul className="site-links">
            <li className="site-links__link">
              <a href="https://glitch.com/@jrgriffiniii">Glitch</a>
            </li>
            <li className="site-links__link">
              <a href="https://hackaday.io/jrgriffiniii">Hackaday.io</a>
            </li>
            <li className="site-links__link">
              <a href="https://observablehq.com/@jrgriffiniii">Observable</a>
            </li>
          </ul>
        </div>
      </div>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section className="post-list-item__description">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
