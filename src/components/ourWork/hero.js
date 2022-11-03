import React from "react"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Link } from "gatsby"


const HeroSection = styled.section`

`
const Space = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  width:50%;
  max-width: 1000px;
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 600px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;
  }
  
`
const Content = styled.div`
  font-family: Ubuntu;
  color: #051628;
  max-width: 400px;
`

const H1 = styled.h1`
  font-size: 90px;
  line-height: 94px;
  font-weight: 600;
`
const P = styled.p`

  font-size: 20px;
  line-height: 35px;
`

const Button = styled(Link)`
  border-radius: 3px;
  width: 197px;
  padding: 15px 0 18px;
  background-color: #d5330d;
  margin: 45px 0 0;
  display: block;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-align: center;
  color: #ffffff;
  font-family: Stolzl;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background: #ae2a09;
  }
`

function Hero () {
  const data = useStaticQuery(graphql`
    query {
      space: file(relativePath: { eq: "space-hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  	<HeroSection>
      <Space>
        <Img alt="" role="presentation" fadeIn={false} fluid={data.space.childImageSharp.fluid} />
      </Space>
  	  <ContentContainer>
        <Content>
          <H1>Our Work</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</P>
          <Button to="/contact">Contact Us</Button>
        </Content>
  	  </ContentContainer>
  	</HeroSection>
  )
}
export default Hero