import React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import img1 from '../images/landing-bg.jpg'
import { PopupText } from 'react-calendly'

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
  padding: 210px 0 20px;
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
  margin: 30px 0 20px;
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
  margin: 20px 0 20px;
  font-family: Ubuntu;
`
const Button = styled.div`
  a {
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
    display: inline-block;
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
          <P>Book your free one-on-one session now, to start learning how to digitize your business.</P>
          <Button>
            <PopupText
              text="Schedule Now"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
        </ContentContainer>
      </HeroSection>
    </>
  </Layout>
)
