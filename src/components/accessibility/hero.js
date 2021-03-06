import React from "react"
import styled from '@emotion/styled'
import img1 from '../../images/accessibility-fold-bg@2x.jpg'
import { PopupText } from 'react-calendly'



const HeroSection = styled.section`
  background-color: #051628;
  padding: 80px 0px 20px 0px;
  position: relative;
  margin-top: 0;

  @media (min-width: 960px) {
    background: url( ${img1} ), #ffffff;
    background-position: right 60px;
    background-repeat: no-repeat;
    background-size: 50%;
  }
  @media (min-width: 1880px) {
    background: url( ${img1} ), #ffffff;
    background-position: right 60px;
    background-repeat: no-repeat;
    background-size: 920px;
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
  h1 {
    line-height: 1.1;
    @media (max-width: 960px) {
      color: #fff;
    }
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
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.224359px;
  color: #0D2C4C;
  margin: 30px 0 20px;
  font-family: Stolzl;

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
  	    <H1 id="main">Making the digital world more inclusive</H1>
  	    <P>Bake accessibility into your tech team's process so you can not only create products that are useable to a wider audience but also comply with WCAG 2.1 guidelines.
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