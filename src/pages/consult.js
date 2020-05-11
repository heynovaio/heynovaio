import React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import img1 from '../images/landing-bg.jpg'
import Contact from "../components/homepage/contact"

const HeroSection = styled.section`
  background-color: #051627;
  padding: 0 20px 20px;
  position: relative;
  margin-top: 50px;
  @media (min-width: 960px) {
    background-image: url( ${img1} );
    background-size: cover;
  }
  @media (max-width: 960px) {
    background: #fff;
  }
  @media (max-width: 768px) {
    padding-bottom: 75px;
    overflow: hidden;
  }
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 215px 0 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;
  }
`
const H1 = styled.h1`
  max-width: 670px;
  font-size: 56px;
  font-weight: 500;
  line-height: 1.04;
  color: #0fa3b1;
  margin: 30px 0 25px;
  font-family: Stolzl;
  letter-spacing: -0.035em;
  @media (max-width: 1026px) {
    font-size: 78px;
  }
  @media (max-width: 760px) {
    font-size: 48px;
  }
`
const P = styled.p`
  max-width: 556px;
  font-size: 18px;
  line-height: 1.64;
  color: #0a2239;
  margin: 25px 0 25px;
  font-family: Ubuntu;
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

export default () => (
  <Layout>
    <>
      <HeroSection>
        <ContentContainer>
          <H1>Life is currently unknown</H1>
          <P>How we do business is changing. If you are thinking of how you might be able to digitize your business to adapt to the new norms, we can help you with the information you need to get that journey started.
          </P>
          <P>Book your free one-on-one session now, to start learning how to digitize your business,</P>
          <Button href="#">Schedule Now</Button>
        </ContentContainer>
      </HeroSection>
    </>
  </Layout>
)
