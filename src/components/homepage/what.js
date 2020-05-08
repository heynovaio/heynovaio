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
  @media (max-width: 1026px) {
    background: none;
  }
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 150px 0 0px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1026px) {
    padding-top: 50px;
  }
  @media (max-width: 526px) {
    padding-top: 130px;
  }
`
const H2 = styled.h2`
  font-size: 52px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;
  text-align: left;
  color: #0a2239;
  font-family: Stolzl;
  max-width: 549px;
  margin-bottom: 5rem;
  @media (max-width: 1026px) {
    max-width: 426px;
    font-size: 40px;
  }
  @media (max-width: 960px) {
    font-size: 35px;
    margin-bottom: 2rem;
  }
  @media (min-width: 1026px) {
    position: sticky;
    top: 20px;
  }
`
const H3 = styled.h3`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1px;
  text-align: left;
  line-height: 1.15;
  font-family: Stolzl;
  margin-bottom: 10px;
  color: #0fa3b1;
  @media (max-width: 960px) {
    font-size: 25px;
  }
`
const P = styled.p`
  font-size: 18px;
  line-height: 1.4;
  text-align: left;
  font-family: Ubuntu;
  color: #0fa3b1;
  @media (max-width: 1270px) {
    color: #0fa3b1;
  }
  @media (max-width: 1026px) {
    color: #0a2239;
  }
`
const Text = styled.div`
  text-align: left;
  max-width: 440px;
  margin-top: 40px;
`
const Content = styled.div`
  padding-top: 60px;
  position: relative;
  max-width: 624px;
  margin: -150px 0 40px auto;
  @media (max-width: 1026px) {
    max-width: 474px;
  }
  @media (max-width: 780px) {
    margin-top: 0;
    padding-top: 0px;
  }
`
const ImgPerson = styled.div`
  max-width: 455px;
  position: relative;
  @media (max-width: 1026px) {
    position: absolute;
    width: 455px;
  }
  @media (max-width: 960px) {
    max-width: 250px;
  }
  @media (min-width: 1026px) {
    object-fit: contain;
    position: sticky;
    top: 180px;
  }
  @media (max-width: 560px) {
    top: -67px;
  }
  img {
    display: inline-block;
    width: 100%;
    @media (min-width: 960px) {
      position: absolute;
    }
  }
`
const Planet = styled.div`
  position: absolute;
  top: 40px;
  left: 150px;
  width: 75px;
  @media (max-width: 960px) {
    top: 24px;
    left: 76px;
    width: 40px;
  }
`
const Button = styled.button`
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
  margin-top: 20px;
  border: none;
`
function What () {
  const data = useStaticQuery(graphql`
    query {
      Girl: file(relativePath: { eq: "girl.png" }) {
        childImageSharp {
          fluid(maxWidth: 465, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      Planet: file(relativePath: { eq: "planet.png" }) {
        childImageSharp {
          fluid(maxWidth: 75, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <WhatContainer>
      <ContentContainer>
        <H2>Our methods connect your brand to real users by:</H2>
        <ImgPerson>
          <Img alt="Girl" role="presentation" fluid={data.Girl.childImageSharp.fluid} />
          <Planet>
            <Img alt="Planet" role="presentation" fluid={data.Planet.childImageSharp.fluid} />
          </Planet>
        </ImgPerson>
        <Content>
          <Text>
            <H3>Discovering your identity</H3>
            <P>Whatever your vision or idea, we will get you there by first building a strong brand foundation.</P>
          </Text>
          <Text>
            <H3>Propelling your vision</H3>
            <P>Where innovative ideas meet otherworldly designs. Driven by your unique users and led by the latest research, we will drive your product forward.</P>
          </Text>
          <Text>
            <H3>Connecting you to your users</H3>
            <P>We strive to understand your users. Our inclusive and innovative approaches ensure your product is accessible to everyone.</P>
          </Text>
          <Button href="#">Get a Quote</Button>
        </Content>
      </ContentContainer>
    </WhatContainer>
  )
}

export default What
