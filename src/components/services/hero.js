import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import img1 from '../../images/shopify-bg.png'
import planet from '../../images/hero-planet2.png'
import animation from '../../images/above-fold-animation.mp4'
import { PopupText } from 'react-calendly'

const HeroSection = styled.section`
 
  padding: 210px 0px 20px 0px;
  position: relative;
  padding-top: 50px;
  @media (min-width: 1080px) {
    background-image: url( ${img1} );
    background-size: auto 100%;
    background-repeat:no-repeat;
    background-position:left -10px;
  }
  @media (max-width: 768px) {
    padding-bottom: 75px;
    overflow: hidden;
    img{
      visibility:hidden;
    }   
  }
  img{
    width:395px;
    position:absolute;
    left:-165px;
    top: 150px;
    z-index: 2;
  }
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 130px 20px 0px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 678px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;
  }
`
const VideoContainer = styled.div`
  position: absolute;
  left: 150px;
  top: 60px;
  @media (max-width: 1080px) {
    display: none;
  }
`
const Wrapper = styled.div`
  max-width: 595px;
  width:100%;
  
  @media (min-width: 768px) {
    float:right;
  }
`
const SubTitle = styled.span`
  color: #051627;
  font-family: Stolzl;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  max-width:445px;
  width:100%;
  margin:0 auto;

`
const H1 = styled.h1`
  
  font-size: 70px;
  font-weight: 500;
  line-height: 1.09;
  color: #051627;
  margin: 20px 0 20px;
  font-family: Stolzl;
  letter-spacing: -0.035em;
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
  padding-right:20px;
`
const Button = styled.a`
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
`

function Hero () {
  return(
  	<HeroSection>
      <img src={planet} alt=""/>
      <VideoContainer>
        <video width="500" autoPlay={true}>
          <source src={animation} type="video/mp4"/>
        </video>
      </VideoContainer>
  	  <ContentContainer>
        <Wrapper>
          <SubTitle>SHOPIFY MADE EASY</SubTitle>
    	    <H1 id="main">Launch your business around the world</H1>
    	    <P>Connect. Impress. Build a better shopping experience for all.</P>
          <Button to="/contact">Free Consult</Button>
        </Wrapper>
  	  </ContentContainer>
  	</HeroSection>
  )
}
export default Hero