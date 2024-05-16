import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"

const ContentContainer = styled.div`
  max-width: 1460px;
  padding: 100px 20px 20px;
  margin: 0 auto;
  position: relative;
  h1 {
    font-size: 90px;
    font-weight: 500;
    line-height: 1.04;
    color: var(--HN-Indigo);
    margin: 0 0 25px;
    font-family: Stolzl;
    text-align: center;
    padding: 4rem 0 0.5rem;
    @media (max-width: 767px) {
      font-size: 48px;
      padding-top: 105px;
    }
  }
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 767px) {
    padding-top: 10px;
    p {
      font-size: 22px;
    }
  }
`

const BlogPreview = styled.div`
  padding-bottom: 160px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 575px);
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
  justify-content: center;
  article {
    position: relative;
    > a {
      text-decoration: none;
      display: block;
      &:hover {
        h2 {
          text-decoration: underline;
        }
      }
    }
    h2 {
      font-family: Stolzl;
      font-size: 36px;
      line-height: 1.25;
      letter-spacing: -0.13px;
      color: var(--HN-Indigo);
      font-weight: 400;
      padding: 0.25rem 0 0.5rem;
      margin: 0;
    }
    small {
      font-family: Ubuntu;
      letter-spacing: -0.06px;
      font-size: 18px;
    }
    span {
      color: #0c7489;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 320px);
    grid-row-gap: 4rem;
    article {
      h2 {
        font-size: 22px;
      }
    }
  }
`
const ImageBox = styled.div`
  height: 350px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 0.85rem;
  .gatsby-image-wrapper {
    height: 100%;
  }
  img {
    position: absolute;
    display: block;
    filter: contrast(1.25);
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(5, 22, 40, 0.2679446778711485) 0%,
      rgba(43, 200, 215, 0.3519782913165266) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 768px) {
    width: 320px;
    height: 235px;
  }
`

const BlogTag = styled.small`
  font-family: Ubuntu;
  font-weight: 600;
  letter-spacing: 0;
  color: #0c7489;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
const BlogAuth = styled.small`
  color: var(--HN-Indigo);
  ::before {
    display: inline-block;
    content: "";
    border-top: 0.2rem solid var(--HN-Fuchsia);
    width: 26px;
    margin-right: 0.75rem;
    transform: translateY(-0.2rem);
  }
`
const BlogDate = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #ffffff;
  z-index: 1;
  font-family: "stolzl";
  padding: 0 0 3px 8px;
  font-weight: 600;
`

const P = styled.p`
  color: var(--HN-Indigo);
  max-width: 756px;
  font-size: 26px;
  line-height: 1.64;
  margin: 0px auto 4rem;
  font-family: Ubuntu;
  text-align: center;
`

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      <SEO
        title="Our Blog | Accessibility"
        description="Read our blogs to learn more about digital accessibility and the consulting work we do."
        keywords={[
          `Web Design`,
          `Accessibility`,
          `Web Development`,
          `Victoria`,
          `Halifax`,
          `Toronto`,
          `Marketing`,
          `User Experience`,
          `Branding`,
        ]}
      />
      <ContentContainer>
        <h1 id="main">Hey, take a read</h1>
        <P>
          We publish monthly blogs that we hope will help empower and inspire
          your digital journey.
        </P>
        <BlogPreview>
          {posts.map(post => (
            <article key={post.id}>
              <a href={post.fields.slug} aria-label={post.frontmatter.title}>
                <BlogDate>{post.frontmatter.date}</BlogDate>
                <ImageBox>
                  <Img
                    fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </ImageBox>
                <BlogTag>{post.frontmatter.category}</BlogTag>
                <h2>{post.frontmatter.title}</h2>
                <div>
                  <BlogAuth>{post.frontmatter.author}</BlogAuth>
                </div>
              </a>
            </article>
          ))}
        </BlogPreview>
      </ContentContainer>
      <Subscribe />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          author
          category
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
