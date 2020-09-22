import React from "react"
import styled from '@emotion/styled'
import img1 from '../../images/landing-bg.jpg'
import { PopupText } from 'react-calendly'

const HeroSection = styled.section`
  background-color: #051628;
  padding: 210px 0px 20px 0px;
  position: relative;
  margin-top: 50px;
  @media (min-width: 960px) {
    background-image: url( ${img1} );
    background-size: cover;
  }
  @media (max-width: 960px) {
    color: #fff;
  }
  @media (max-width: 768px) {
    padding-bottom: 75px;
    overflow: hidden;
  }
  p{
    max-width: 556px;
  }
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;

  }
  h1{
    max-width: 600px;
  }
`

const H1 = styled.h1`
  max-width: 670px;
  font-size: 76px;
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
  font-size: 18px;
  line-height: 1.7;
  color: #0a2239;
  margin: 20px 0 20px;
  font-family: Ubuntu;
  @media (max-width:960px) {
    color: #fff;
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
    margin-top: 20px;
    border: none;
    display: inline-block;
  }
`

function Hero () {
  return(
  	<HeroSection>
  	  <ContentContainer>
  	    <H1>E-Commerce Services</H1>
  	    <P>Making your mark in today's most important industry by building superior shopping experiences
  	    </P>
  	    <Button>
  	      <PopupText
  	        text="Book a Free Consult"
  	        url="https://calendly.com/hey-nova/free-consultation"
  	      />
  	    </Button>
  	  </ContentContainer>
  	</HeroSection>
  )
}
export default Hero