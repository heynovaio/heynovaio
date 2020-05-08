import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/planet-bg.webp'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax';

const HeroSection = styled.section`
  background-color: #051627;
  padding: 0 20px 20px;
  position: relative;
  @media (min-width: 960px) {
    background-image: url( ${img1} );
    background-size: 620px 585px;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    padding-bottom: 75px;
    overflow: hidden;
  }

  h1 {
    max-width: 670px;
    font-size: 90px;
    font-weight: 500;
    line-height: 1.04;
    color: #0fa3b1;
    margin: 0 0 25px;
    font-family: Stolzl;
    @media (max-width: 1026px) {
      font-size: 78px;
    }
    @media (max-width: 760px) {
      font-size: 48px;
    }
  }
  p {
    max-width: 556px;
    font-size: 22px;
    line-height: 1.64;
    color: #ffffff;
    margin: 25px 0 45px;
    font-family: Ubuntu;
  }
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 215px 0 0px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 776px;
  }
  @media (max-width: 767px) {
    padding-top: 265px;
  }
`
const Button = styled.a`
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
`
const ImgContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`
const Planet1 = styled.div`
  position: absolute;
  bottom: -60px;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  }
`
const Planet2 = styled.div`
  position: absolute;
  bottom: 300px;
  right: 50px;
  @media (max-width: 900px) {
    bottom: 577px;
  }
  @media (max-width: 568px) {
    bottom: 477px;
    right: 50px;
  }
`
const Planet3 = styled.div`
  position: absolute;
  bottom: 100px;
  right: 300px;
  @media (max-width: 768px) {
    right: 0px;
    bottom: -7px;
  }
`
function Hero () {

  const data = useStaticQuery(graphql`
    query {
      Planet1: file(relativePath: { eq: "hero-planet1.png" }) {
        childImageSharp {
          fixed(width: 192, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      },
      Planet2: file(relativePath: { eq: "hero-planet2.png" }) {
        childImageSharp {
          fixed(width: 180, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      },
      Planet3: file(relativePath: { eq: "hero-planet3.png" }) {
        childImageSharp {
          fixed(width: 153, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (

    <HeroSection>
      <ImgContainer>
        <Parallax
          offsetYMax={100}
          offsetYMin={-100}
          className="hemi-left"
          slowerScrollRate
          tagOuter="figure">
          <Planet1>
            <Img alt="Planet" role="presentation" fixed={data.Planet1.childImageSharp.fixed} />
          </Planet1>
        </Parallax>
        <Planet2>
          <Img alt="Planet 2" role="presentation" fixed={data.Planet2.childImageSharp.fixed} />
        </Planet2>
        <Parallax
          offsetYMax={30}
          offsetYMin={-30}
          className="hemi-left"
          slowerScrollRate
          tagOuter="figure">
          <Planet3>
            <Img alt="Planet 3" role="presentation" fixed={data.Planet3.childImageSharp.fixed} />
          </Planet3>
        </Parallax>
      </ImgContainer>
      <ContentContainer>
        <h1>Designing Experiences for Everyone</h1>
        <p>
          Connecting real people to real brands through engaging and inclusive design practice
        </p>
        <Button href="#">Book a Chat</Button>
      </ContentContainer>
    </HeroSection>

  )
}

export default Hero
