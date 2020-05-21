import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WhoSection = styled.section`
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 75px 20px;
  }
`
const ContentCenter = styled.div`
  max-width: 1288px;
  margin: 0 auto;
  position: relative;
`
const Content = styled.div`
  text-align: center;
  max-width: 650px;
  position: relative;
  margin: 0 auto;
  @media (min-width: 960px) {
    padding: 141.5px 0 20px;
  }
  @media (max-width: 1024px) {
    max-width: 550px;
  }
`
const H2 = styled.h2`
  font-size: 45px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -1px;
  text-align: center;
  color: #0a2239;
  font-family: Stolzl;
  @media (max-width: 780px) {
    font-size: 35px;
    line-height: 1.2;
    font-weight: 500;
  }
`
const P = styled.p`
  min-height: 112px;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
  color: #405364;
  font-family: Ubuntu;
`

const vibrate = keyframes`
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
  }
  20% {
    -webkit-transform: translate(15px, -15px);
            transform: translate(15px, -15px);
  }
  30% {
    -webkit-transform: translate(-15px, 15px);
            transform: translate(-15px, 15px);
  }
  40% {
    -webkit-transform: translate(15px, 15px);
            transform: translate(15px, 15px);
  }
  50% {
    -webkit-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
  }
  60% {
    -webkit-transform: translate(15px, -15px);
            transform: translate(15px, -15px);
  }
  70% {
    -webkit-transform: translate(-15px, 15px);
            transform: translate(-15px, 15px);
  }
  80% {
    -webkit-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
  }
  90% {
    -webkit-transform: translate(15px, -15px);
            transform: translate(15px, -15px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`
const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 110px;
  -webkit-animation: vibrate 22s ease-in-out infinite both;
  animation: ${vibrate} 22s ease-in-out infinite both;
  bottom: -250px;
  @media (max-width: 960px) {
    max-width: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`
function Who () {

  const data = useStaticQuery(graphql`
    query {
      astro: file(relativePath: { eq: "astronaut.png" }) {
        childImageSharp {
          fixed(width: 255, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <WhoSection>
      <ContentCenter>
        <ImgContainer>
          <Img alt="Astronaut" role="presentation" fadeIn={false} fixed={data.astro.childImageSharp.fixed} />
        </ImgContainer>
        <Content>
          <H2>A digital design agency forging a bold path forward</H2>
          <P>Successful products are determined by people, not numbers or stereotypes.  Our approach considers the lived experiences of users to provide the most comprehensive and effective digital experience for your brand.</P>
        </Content>
      </ContentCenter>
    </WhoSection>
  )
}

export default Who
