import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"

const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px 20px;
  margin: 0 auto;
  position: relative;
  h1{
    font-size: 110px;
    font-weight: 500;
    line-height: 1.04;
    color: #0a2239;
    margin: 0 0 25px;
    font-family: Stolzl;
    text-align: center;
    padding: 4rem 0;
    @media (max-width: 767px) {
      font-size: 68px;
      padding-top: 4.5rem;
      padding-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 767px) {
    padding-top: 10px;
  }
`

const BlogPreview = styled.div`
  padding-bottom: 160px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 520px);
  grid-column-gap: 6rem;
  grid-row-gap: 6rem;
  justify-content: center;
  article{
    a{
      text-decoration: none;
    }
    h2{
      font-family: Stolzl;
      font-size: 40px;
      line-height: 1.25;
      letter-spacing: -0.13px;
      color: #051628;
      font-weight: 400;
      padding: .25rem 0 .5rem;
      margin: 0;
    }
    small{
      font-family: Ubuntu;
      letter-spacing: -0.06px;
      font-size: 18px;
    }
    span{
      color: #0c7489;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 320px);
    grid-row-gap: 4rem;
    article{
      h2{
        font-size: 34px;
      }
    }
 }
`
const ImageBox = styled.div`
  width: 520px;
  height: 350px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: .85rem;
  Img{
    position: absolute;
    display: block;
    filter: contrast(1.25);
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(5,22,40,0.2679446778711485) 0%, rgba(43,200,215,0.3519782913165266) 100%);
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
  color: #051628;
  ::before{
    display: inline-block;
    content: "";
    border-top: .2rem solid #d5330d;
    width: 26px;
    margin-right: .75rem;
    transform: translateY(-.2rem);
  }
`
const BlogDate = styled.small`
  color: #0c7489;
`

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      <SEO
        title="Hey Nova | Blog | Branding, Designing, Developing"
        description="Evolving the way companies communicate to their audience by creating cohesive brands, user-centred design, and inclusive code."
        keywords={[ `Web Design`, `Web Development`, `Victoria`, `British Columbia`, `Marketing`, `User Experience`, `Branding` ]}
      />
      <ContentContainer>
        <h1 id ="main">Hey, Read Our Blogs</h1>
        <BlogPreview>
          {posts.map(post => (
            <article key={post.id}>
              <a href={post.fields.slug}>
                <ImageBox>
                  <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>
                </ImageBox>
                <BlogTag>{post.frontmatter.category}</BlogTag>
                <h2>{post.frontmatter.title}</h2>
                <div><BlogAuth>{post.frontmatter.author}</BlogAuth> <span>&#8226;</span> <BlogDate>{post.frontmatter.date}</BlogDate></div>
              </a>
            </article>
          ))}
        </BlogPreview>
    </ContentContainer>
    <Subscribe/>
  </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
    )  {
      posts: nodes {
        fields{
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