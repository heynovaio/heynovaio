import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { PopupText } from 'react-calendly'

import placeholder from '../../images/group-8.svg'
import space from '../../images/space.svg'
import asteroids from '../../images/asteroids.svg'
import planet from '../../images/hero-planet2.png'
const EComSection = styled.section`
 
  padding: 0px 0px 20px 0px;
  position: relative;
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 0 20px 100px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;
  }
`
const TopWrapper = styled.div`
  text-align:center;
  max-width:720px;
  width:100%;
  margin: 0 auto;
`
const H1 = styled.h1`
  
  font-size: 53px;
  font-weight: 500;
  line-height: 1.09;
  color: #051627;
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
  padding-right:20px;
`
const BottomWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  
  color: #051627;
  padding:60px 0 56px;
  ul{
    max-width:500px;
    width:100%;
    list-style-type:none;
    margin:0;
  }
  li{
    margin-bottom:40px;
  }
  h3{
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    margin-bottom:20px;
  }
  p{
    font-family: Ubuntu;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    margin:0;
  }
  @media (max-width: 1026px) {
    flex-wrap:wrap;
    justify-content:space-evenly;
    text-align:center;
    margin:0 0 41.5%; 
  }
`
const ImgWrapper = styled.div`
  position:relative;
  max-width:696px;
  width:100%;
  align-items:center;
  display:flex;
  justify-content:left;
  margin-bottom:60px;
  img{
    margin: 0;
    position:absolute;
  }
  @media (max-width: 1026px) {
    margin-top:37.5%;
  }
`
const Astro = styled.img`
  z-index:1;
  max-width:33%;
  left:25%;
  transform:translateY(25%);
`
const Space = styled.img`
  right:0;
  bottom:0;
  transform:translateY(60%);
  z-index:0;
  width:696px;
`
const Button = styled.div`
  display:flex;
  justify-content:center;
  position: relative;
  z-index: 2;
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
const Asteroids = styled.img`
  right:12.5%;
  top:10px;
  max-width:10%;
`
const Planet = styled.img`
  right:10%;
  transform:translateY(-150%) rotate(20deg);
  max-width:30%;
`

function Ecommerce () {
  return(
  	<EComSection>
  	  <ContentContainer>
        <TopWrapper>
          <H1>Our E-commerce services</H1>
          <P>We tailor our services to meet your needs. Whether you are a new business pursuing your passion or a trusted company making updates, we work to achieve your goals. Our suite of expertise finds the right solution for your aspirations.</P>
        </TopWrapper>
        <BottomWrapper>
          <ul>
            <li>
              <h3>Web Design & Brand Strategy</h3>
              <p>We design stunning websites with purposeful branding that captures your target audience, baking in accessibility and user experience best practices throughout the process because we know maintaining that audience is equally important.</p>
            </li>
            <li>
              <h3>Shopify Theme Development</h3>
              <p>We offer a complete website build from start to finish. We can create the Shopify theme of your dreams from scratch or customize the theme you have been using for years while ensuring top-quality performance.</p>
            </li>
            <li>
              <h3>Shopify Consulting & Support</h3>
              <p>We work alongside you and your team. We help you navigate the Shopify setup process, choose apps and offer general tips to translate the geek speak.</p>
            </li>
          </ul>
          <ImgWrapper>
            <Space src={space} alt=""/>
            <Astro src={placeholder} alt=""/>
            <Planet src={planet} alt=""/>
            <Asteroids src={asteroids} alt=""/>
          </ImgWrapper>
        </BottomWrapper>
        <Button>
          <PopupText
            text="Book a Meeting"
            url="https://calendly.com/hey-nova/free-consultation"
          />
        </Button>
  	  </ContentContainer>
  	</EComSection>
  )
}
export default Ecommerce