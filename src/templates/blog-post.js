import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { PopupText } from 'react-calendly'
import styled from '@emotion/styled'
import Layout from "../components/layout"

const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 767px) {
    padding-top: 10px;
  }
`

const HeaderContainer = styled.div`
  over-flow: auto;
  white-space: nowrap;
  height: fit-content;
  display: block;
  position: relative;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    white-space:wrap;
    overflow: 
 }
`
const TitleBox = styled.div`
  display: inline-block;
  background-color: #051628;
  width: 55%;
  padding: 3.25rem 2.5rem;
  white-space: pre-line;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  word-wrap: break-word;
  h1{
    font-family: Stolzl;
    font-size: 60px;
    line-height: 1.33;
    letter-spacing: -0.19px;
    color: #ffffff;
    overflow-wrap: normal;
    font-weight: 400; 
    padding: 1rem 0;
    text-transform: Capitalize;
  }
  @media (max-width: 768px) {
    margin: 40px -20px 1.5rem;
    width: 100vw;
    position: relative;
    transform: translateY(0);
    h1{
      font-size: 40px;
    }
 }
`
const ImageBox = styled.div`
  display: inline-block;
  position: relative;
  width: 65%;
  right: -40%;
  z-index: -1;
  Img{
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    right: 0;
 } 
`

const BlogDate = styled.small`
  font-family: Ubuntu;
  font-size: 30px;
  letter-spacing: -0.1px;
  color: #2bc8d7;
  ::before{
    display: inline-block;
    content: "";
    border-top: .28rem solid #d5330d;
    width: 36px;
    margin-right: .75rem;
    transform: translateY(-.25rem);
  }
`
const BlogTag = styled.small`
  font-family: Ubuntu;
  font-size: 18px;
  letter-spacing: 0.23px;
  color: #ffffff;
  text-transform: uppercase;
`

const BlogBox = styled.div`
  display: flex-box;
  justify-content: center;
`
const LeftSide = styled.div`
  width: 56%;
  h2{
    font-family: Stolzl;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0.38px;
    color: #051628;
    padding: 1rem 0;
  }
  p{
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #051628;
  }
  img{
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  h3{
    font-family: Ubuntu;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 0.31px;
    color: #0c7489;
  }
  a{
    color: #0c7489;
  }
  ul{
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #051628;
    list-style: disc;
    margin: 2rem 0;
  }
  ol{
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #051628;
    list-style: decimal;
    margin: 2rem 0;
  }
  li{

  }

`
const RightSide = styled.div`
  width: 44%;
  
`
const BioBox = styled.div`
  background-color: #051628;
  padding: 1.5rem;
  display: flex;
  justify-content: right;
  @media (max-width: 768px) {
    display: block;
 }
`
const BioImageBox = styled.div`
  flex: 0 0 90px;
  margin-right: 1rem;
  Img{
    width: 100%;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0;
    padding: 1rem 1.5rem 2rem;
    margin: 0 auto;
 }
`
const BioTextBox = styled.div`
  font-family: Ubuntu;
  max-width: 542px;
  .BioH4{
    font-size: 16px;
    letter-spacing: 0.2px;
    color: #2bc8d7;
    margin: 0;
    padding-bottom: .65rem;
  }
  .BioH3{
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.28px;
    color: #ffffff;
    margin: 0;
    padding-bottom: .65rem;
  }
  .BioP{
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 0.23px;
    color: #ffffff;
    opacity: .75;
    margin: 0;
  }

`

const ConsultBox = styled.div`
  color: #051628;
  max-width: 625px;
  text-align: center;
  margin: 0 auto;
  padding: 4rem 0;
  p{
    font-family: Ubuntu;
    font-size: 25px;
    line-height: 1.44;
    letter-spacing: -.75px;
    font-weight: 500;
  }
`

const Button = styled.div`
  a {
    background-color: #D5330D;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #fff;
    font-family: Stolzl;
    padding: 14px 24px;
    text-decoration: none;
    margin-top: 14px;
    border: none;
    display: inline-block;
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const bioImgFluid = post.frontmatter.bioImage.childImageSharp.fluid

  return (
    <Layout>
      <ContentContainer>
        <HeaderContainer>
          <TitleBox>
            <BlogTag>{post.frontmatter.category}</BlogTag>
            <h1>{post.frontmatter.title}</h1>
            <BlogDate>{post.frontmatter.date}</BlogDate> 
          </TitleBox>
          <ImageBox>
            <Img fluid={featuredImgFluid}/>
          </ImageBox>
        </HeaderContainer>
        <BlogBox>
          <LeftSide>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <BioBox>
              <BioImageBox>
                <Img fluid={bioImgFluid}/>
              </BioImageBox>
              <BioTextBox>
                <h4 class="BioH4">Written by </h4>
                <h3 class="BioH3">{post.frontmatter.author}</h3>
                <p class="BioP">{post.frontmatter.bio}</p>
              </BioTextBox>
            </BioBox>
          </LeftSide>
          <RightSide>
          </RightSide>
        </BlogBox>
        <ConsultBox>
          <p>Interested to learn more about what we do at Hey Nova?  Book a free consult or send us an email!</p>
          <Button>
            <PopupText
              text="Book a Free Consult"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
        </ConsultBox>
      </ContentContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        author
        bio
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bioImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`