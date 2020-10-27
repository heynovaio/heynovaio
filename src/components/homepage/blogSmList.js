import styled from '@emotion/styled'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px 20px;
  margin: 0 auto;
  position: relative;
  h1{
    font-family: Ubuntu;
    font-size: 65px;
    font-weight: 500;
    line-height: 0.83;
    letter-spacing: -0.19px;
    text-align: center;
    color: #051628;
    margin: 0;
    padding: 4rem 0;
  }
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 767px) {
    padding-top: 10px;
  }
`

const BlogPreview = styled.div`
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
  margin-bottom: .5rem;
  Img{
    position: absolute;
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

export const query = graphql`
  query BlogListQuery {
    blog: allMarkdownRemark (
      limit: 3
    ) {
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

export default function BlogSmList({ data }) {

const posts = (data || {}).blog

  return (
    <ContentContainer>
      <h2>Hey, Take a Read</h2>
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
  )
}
