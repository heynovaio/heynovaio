import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 20px 20px 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 767px) {
    padding-top: 0px;
  }
`
const Back = styled(Link)`
  position: absolute;
  color: #0d7489;
  text-decoration: none;
  font-family: "ubuntu";
  font-weight: 600;
  letter-spacing: -0.025em;
  left: 0;
  &:hover {
    text-decoration: underline;
  }
`

const HeaderContainer = styled.div`
  over-flow: auto;
  white-space: nowrap;
  height: fit-content;
  display: block;
  position: relative;
  margin: 0 auto 1rem;
  max-width: 1400px;
  padding: 100px 20px 20px;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    white-space: wrap;
    padding-top: 0px;
  }
`
const TitleBox = styled.div`
  display: inline-block;
  background-color: #051628;
  width: 60%;
  padding: 3rem 2.5rem 4rem;
  margin-left: -4%;
  white-space: pre-line;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  word-wrap: break-word;
  box-shadow: 20px 14px 22px 10px rgb(5 23 40 / 52%);
  h1 {
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
  @media (max-width: 1400px) {
    margin-left: 0;
  }
  @media (max-width: 768px) {
    margin: 0px -20px 1.5rem;
    width: 100vw;
    position: relative;
    transform: inherit;
    top: 0;
    padding: 120px 1rem 4rem;
    h1 {
      font-size: 32px;
    }
  }
`
const ImageBox = styled.div`
  display: inline-block;
  position: relative;
  width: 65%;
  right: -40%;
  z-index: -1;
  img {
    max-width: 100%;
    height: auto;
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
      rgba(5, 22, 40, 0.26) 0%,
      rgba(43, 200, 215, 0.68) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
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
  ::before {
    display: inline-block;
    content: "";
    border-top: 0.28rem solid #d5330d;
    width: 36px;
    margin-right: 0.75rem;
    transform: translateY(-0.25rem);
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const BlogTag = styled.small`
  font-family: Ubuntu;
  font-size: 20px;
  letter-spacing: 0.23px;
  color: #d5330d;
  font-weight: 700;
  text-transform: uppercase;
`

const BlogBox = styled.div`
  @media (min-width: 1068px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    grid-column-gap: 40px;
  }
  @media (max-width: 1068px) {
    margin-top: 40px;
  }
`
const LeftSide = styled.div`
  max-width: 760px;
  &:before {
    width: 125px;
    height: 125px;
    content: "";
    position: absolute;
    z-index: 1;
    border-top: 5px solid #d53410;
    border-left: 5px solid #d53410;
    top: -20px;
    left: -32px;
  }
  h2 {
    font-family: Stolzl;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0.38px;
    color: #051628;
    padding: 1.5rem 0 1rem;
  }
  p {
    font-family: Ubuntu;
    font-size: 21px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #051628;
  }
  img {
    width: 100%;
  }
  figure {
    margin-top: 2.5rem;
    margin-bottom: 2rem;

    figcaption {
      margin-top: 0.75rem;
      text-align: center;
      font-style: italic;
      padding: 0.25rem 2.75rem;

      p {
        line-height: 1.65;
        font-size: 0.95rem;
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  h3 {
    font-family: Ubuntu;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 0.31px;
    color: #0c7489;
  }
  a {
    color: #0c7489;
  }
  ul {
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #051628;
    list-style: disc;
    margin: 2rem 0;
    padding-left: 34px;
    list-style: none;
    li {
      position: relative;
      &:before {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #0d7489;
        content: "";
        position: absolute;
        left: -21px;
        top: 12px;
      }
    }
  }
  ol {
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
    color: #051628;
    margin: 2rem 0 2rem 0.75rem;
    list-style: none;
    counter-reset: my-awesome-counter;
    list-style-position: outside;
    border-left: 4px solid #041829;
    padding-left: 20px;
    li {
      padding-left: 0;
      counter-increment: my-awesome-counter;
      line-height: 1.5;
      &:before {
        content: counter(my-awesome-counter) ". ";
        color: #d53410;
        font-weight: bold;
        left: 0;
        font-size: 1.4rem;
        margin-right: 0.25rem;
      }
    }
  }
  li {
  }
  blockquote {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.31px;
    color: #0fa3b1;
    max-width: 600px;
    margin: 45px 0 60px 40px;
    p {
      color: #0fa3b1;
      font-size: 28px;
    }
    a {
      color: #051628;
    }
  }
  .bluebox {
    background: #0d7489;
    padding: 1rem 2rem;
    margin: 2rem 0 2rem -3rem;
    color: #fff;
    h2 {
      margin-bottom: 0;
      color: #fff;
    }
    p {
      color: #fff;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }
    @media (max-width: 1068px) {
      margin-left: 0;
    }
  }
  p sup {
    color: #0d7489;
    font-weight: bold;
  }
  small.footnote {
    display: inline-block;
    line-height: 1.65;
    font-size: 16px;
    p {
      font-size: 16px;
    }
  }
  .footnotes {
    display: inline-block;
    line-height: 1.65;
    font-size: 14px;
    p {
      font-size: 16px;
      display: inline-block;
    }
    li {
      font-size: 16px;
    }
    ol li:before {
      font-size: 16px;
      display: inline-block;
    }
  }
`
const RightSide = styled.div`
  position: relative;
`
const SocialButtons = styled.div`
  @media (min-width: 1068px) {
    position: sticky;
    top: 20px;
    z-index: 20;
  }
  @media (max-width: 1068px) {
    margin-top: 60px;
  }
  text-align: center;
  h2 {
    font-family: Stolzl;
    font-size: 26px;
    font-weight: bold;
    color: #051628;
  }
  button {
    display: block;
    margin: 10px auto;
    @media (max-width: 1068px) {
      display: inline-block;
      margin: 0 8px;
    }
  }
`
const Quote = styled.blockquote`
  font-family: Stolzl;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.31px;
  color: #0fa3b1;
  position: sticky;
  top: 0px;
  margin: 0 auto;
  padding-top: 40px;
  max-width: 500px;

  @media (min-width: 1068px) {
    padding-top: 430px;
  }
`
const QuoteContainer = styled.div`
  position: relative;
  height: 100%;
`
const BioBox = styled.div`
  background-color: #051628;
  display: flex;
  margin-top: 4em;
  justify-content: left;
  padding: 32px;
  border-radius: 4px;
  @media (max-width: 768px) {
    display: block;
  }
`
const BioImageBox = styled.div`
  flex: 0 0 90px;
  margin-right: 1rem;
  img {
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
  .BioH4 {
    font-size: 16px;
    letter-spacing: 0.2px;
    color: #2bc8d7;
    margin: 0;
    padding-bottom: 0.65rem;
    padding-top: 0.5rem;
  }
  .BioH3 {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.28px;
    color: #ffffff;
    margin: 0;
    padding-bottom: 0.65rem;
  }
  .BioP {
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 0.23px;
    color: #ffffff;
    opacity: 0.75;
    margin: 0;
  }
`

const ConsultBox = styled.div`
  color: #051628;
  max-width: 625px;
  text-align: center;
  margin: 0 auto;
  padding: 8rem 0 7rem;
  p {
    font-family: Ubuntu;
    font-size: 25px;
    line-height: 1.44;
    letter-spacing: -0.75px;
    font-weight: 500;
  }
`

const Button = styled(Link)`
  background-color: #d5330d;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  padding: 14px 24px;
  text-decoration: none;
  margin-top: 14px;
  border: none;
  display: inline-block;
  cursor: pointer;
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const siteTitle = post.frontmatter.title
  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null

  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const bioImgFluid = post.frontmatter.bioImage.childImageSharp.fluid

  //For the social share buttons
  const title = `Read ${post.frontmatter.title} `
  const url = typeof window !== "undefined" ? window.location.href : ""
  const twitterHandle = "heynovaio"
  const tags = post.frontmatter.category

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Blog | Inclusive Design"
        description={post.frontmatter.title}
        image={post.frontmatter.metaImage}
      />
      <HeaderContainer>
        <Back to="/blog">
          <FontAwesomeIcon icon={faChevronLeft} /> Back to all Blogs
        </Back>
        <TitleBox id="main">
          <BlogTag>{post.frontmatter.category}</BlogTag>
          <h1>{post.frontmatter.title}</h1>
          <BlogDate>{post.frontmatter.date}</BlogDate>
        </TitleBox>
        <ImageBox>
          <Img alt="" role="presentation" fluid={featuredImgFluid} />
        </ImageBox>
      </HeaderContainer>
      <ContentContainer>
        <BlogBox>
          <LeftSide>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <BioBox>
              <BioImageBox>
                <Img role="presentation" fluid={bioImgFluid} />
              </BioImageBox>
              <BioTextBox>
                <h2 class="BioH4">Written by </h2>
                <span class="BioH3">{post.frontmatter.author}</span>
                <p class="BioP">{post.frontmatter.bio}</p>
              </BioTextBox>
            </BioBox>
          </LeftSide>
          <RightSide>
            <SocialButtons>
              <h2>Share it</h2>
              <FacebookShareButton url={url}>
                <FacebookIcon size={60} round={true} />
              </FacebookShareButton>

              <TwitterShareButton
                url={url}
                title={title}
                via={twitterHandle}
                hashtags={tags}
              >
                <TwitterIcon size={60} round={true} />
              </TwitterShareButton>

              <LinkedinShareButton url={url}>
                <LinkedinIcon size={60} round={true} />
              </LinkedinShareButton>

              <RedditShareButton url={url} title={title}>
                <RedditIcon size={60} round={true} />
              </RedditShareButton>
            </SocialButtons>
            <QuoteContainer>
              <Quote>{post.frontmatter.rightQuote}</Quote>
            </QuoteContainer>
          </RightSide>
        </BlogBox>
        <ConsultBox>
          <p>
            Interested to learn more about what we do at Hey Nova? Book a free
            consult or send us an email!
          </p>
          <Button to="/contact">Get in Touch</Button>
        </ConsultBox>
      </ContentContainer>
      <Subscribe />
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
        rightQuote
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
      fields {
        slug
      }
    }
  }
`
