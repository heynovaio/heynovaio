import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group.svg'
const Hero = styled.section`
  border-style: solid;
  background-color: black;
  padding: 0 20px 20px;
  h1 {
    max-width: 670px;
    min-height: 282px;
    font-size: 90px;
    font-weight: 500;
    line-height: 1.04;
    color: #0fa3b1;
    margin: 0 0 25px;
  }
  p {
    max-width: 556px;
    min-height: 72px;
    font-size: 22px;
    line-height: 1.64;
    color: #ffffff;
    margin: 25px 0 45px;
  }
`
const ContentContainer = styled.div`
  max-width: 1200px;
  padding: 169px 0 0px;
  margin: 0 auto;
  min-height: 776px;
  position: relative;
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
        Building purposeful designs and technologies for a diverse
        audience by a diverse team.
      </p>
      <Button>Contact us</Button>
    </ContentContainer>
  </Hero>
)
