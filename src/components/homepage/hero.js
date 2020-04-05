import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group.svg'
const Hero = styled.section`
  border-style: solid;
  background-color: black;
  padding: 0 20px 20px;
  h1 {
    max-width: 670px;
    font-size: 90px;
    font-weight: 500;
    line-height: 1.04;
    color: #0fa3b1;
    margin: 0 0 25px;
    font-family: Stolzl;
    @media (max-width: 960px) {
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
  max-width: 1200px;
  padding: 169px 0 0px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 776px;
  }
`
const Button = styled.a`
  width: 197px;
  height: 59px;
  margin: 45px 0 0;
  padding: 12.5px 0 0;
  background-color: #d5330d;
  margin: 45px 0 0;
  display: block;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-family: Stolzl;
  text-decoration: none;
`
const ImgContainer = styled.div`
  position: absolute;
  top: 148px;
  right: 0;
`
export default () => (
  <Hero>
    <ImgContainer>
      <img src={img1}/>
    </ImgContainer>
    <ContentContainer>
      <h1>Designing Experiences for Everyone</h1>
      <p>
        Connecting real people to real brands through engaging and inclusive design practice
      </p>
      <Button href="#">Contact us</Button>
    </ContentContainer>
  </Hero>
)
