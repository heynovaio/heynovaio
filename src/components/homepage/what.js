import styled from '@emotion/styled'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import img2 from '../../images/spaceship.png'

const WhatContainer = styled.section`
  padding: 0 20px;
  background-image: url(${img2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  padding-bottom: 30px;
  @media (max-width: 960px) {
    padding-bottom: 150px;
  }
  h2 {
    font-size: 70px;
    font-weight: 500;
    line-height: .9em;
    letter-spacing: -1px;
    text-align: left;
    color: #0a2239;
    font-family: Stolzl;
    max-width: 712px;
    margin-bottom: 5rem;
    @media (max-width: 960px) {
      font-size: 35px;
    }
  }
  h3 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -1px;
    text-align: left;
    line-height: 1.15;
    color: #2CADBB;
    font-family: Stolzl;
    margin-bottom: 10px;
    @media (max-width: 960px) {
      font-size: 25px;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.4;
    text-align: left;
    color: #2CADBB;
    font-family: Ubuntu;
    @media (max-width: 960px) {
      font-size: 18px;
      color: #0a2239;
    }
  }
  img {
    display: inline-block;
    width: 100%;
    @media (min-width: 960px) {
      position: absolute;
    }
  }
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 150px 0 0px;
  margin: 0 auto;
  position: relative;
`
const Flex3 = styled.div`
  @media (min-width: 960px) {
    align-self: flex-start;
  }
  h3, p {
    text-align: center;
  }
  text-align: center;
  position: absolute;
  top: 153px;
  right: 120px;
  max-width: 440px;
`
const Flex2 = styled.div`
  @media (min-width: 960px) {
    align-self: center;
  }
  text-align: left;
  max-width: 440px;
  position: absolute;
  bottom: 115px;
  right: -20px;
  text-align: center;
  h3, p {
    text-align: center;
  }
`
const Flex1 = styled.div`
  text-align: left;
  max-width: 440px;
  position: absolute;
  bottom: 31px;
  left: 69px;
  h3, p {
    text-align: center;
  }
  @media (min-width: 960px) {
    align-self: flex-end;
  }
`
const DiagonalContent = styled.div`
  display: flex;
  min-height: 675px;
  padding-top: 50px;
  position: relative;
  @media (min-width: 960px) {
    margin: 40px 125px 0;
  }
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const ImgPerson = styled.div`
  max-width: 455px;
  object-fit: contain;
  position: absolute;
  @media (max-width: 960px) {
    max-width: 200px;
  }
`
const Planet = styled.div`
  position: absolute;
  top: 40px;
  left: 150px;
`
const Button = styled.div`
  background-color: #D5330D;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  padding: 14px 32px;
  max-width: 200px;
  text-decoration: none;
  position: absolute;
  right: 0;
  bottom: 0px;
`
function What () {
  const data = useStaticQuery(graphql`
    query {
      Girl: file(relativePath: { eq: "girl.png" }) {
        childImageSharp {
          fixed(width: 465, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      },
      Planet: file(relativePath: { eq: "planet.png" }) {
        childImageSharp {
          fixed(width: 75, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (

    <WhatContainer>
      <ContentContainer>
        <h2>Our methods connect your brand to real users by:</h2>
        <ImgPerson>
          <Img alt="Girl" role="presentation" fixed={data.Girl.childImageSharp.fixed} />
          <Planet>
            <Img alt="Planet" role="presentation" fixed={data.Planet.childImageSharp.fixed} />
          </Planet>
        </ImgPerson>
        <DiagonalContent>
          <Flex1>
            <h3>Propelling your vision forward</h3>
            <p>Where innovative ideas meet otherworldly designs.  Driven by your unique users and led by the latest research, we will drive your product forward.</p>
          </Flex1>
          <Flex2>
            <h3>Connecting you directly to your user community</h3>
            <p>We strive to understand your unique users.  Our inclusive and innovative approaches ensure your product is accessible to everyone.</p>
          </Flex2>
          <Flex3>
            <h3>Manifesting your unique identity</h3>
            <p>Whatever your vision or idea, we will get you there by first building a strong brand foundation.</p>
          </Flex3>
        </DiagonalContent>
        <Button href="#">Get a Quote</Button>
      </ContentContainer>
    </WhatContainer>
  )
}

export default What
