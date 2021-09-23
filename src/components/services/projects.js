import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { PopupText } from 'react-calendly'

import planet from '../../images/planet-1.png'
import meteor from '../../images/meteor.svg'

import joni from '../../images/joni.png'
import pharm from '../../images/pharm.png'
import fatso from '../../images/fatso.png'
import cHaul from '../../images/communityHall.png'

const ProjSection = styled.section`
  padding: 200px 0px 100px 0px;
  position: relative;
  overflow:hidden;
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
const H1 = styled.h1`
  font-size: 53px;
  font-weight: 500;
  line-height: 1.09;
  color: #051627;
  margin: 0;
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
  margin: 20px 0 0;
  font-family: Ubuntu;
  padding-right:20px;
`
const Wrapper = styled.div`
  position:relative;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:45px;
  padding-bottom:100px;
  @media (max-width: 1026px) {
    justify-content:space-evenly;
  }
`
const FlexL = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  max-width:567px;
  width:100%;
  gap:45px;
  flex:1 450px;
`
const FlexR = styled(FlexL)`
  justify-content:start;
`
const Copy = styled.div`
  margin-bottom:90px;
  max-width:505px;
`
const Brand = styled.div`
  img{
    margin:0;
    width:100%;
  }
`
const Content = styled.div`
  max-width:720px; 
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin: 0 auto;
  text-align:center;
  padding-top:120px;
`
const Button = styled.div`
  display:flex;
  justify-content:center;
  margin-top:30px;
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
const OuterBox = styled.div`
  position:relative;
  width:100%;
`
const ImgBox = styled.div`
  position:absolute;
  right:-150px;
  bottom:-50px;
  width:450px;
  height:450px;
  img{
    width:100%;
    position:absolute;
  }
  img:nth-child(1){
    width:108px;
    left:20px;
    top:80px;
  }
  img:nth-child(2){
    width:110px;
    left:0;
    bottom:80px;
    transform:rotate(10deg);
  }
  img:nth-child(3){
    width:79px;
    left: 80px;
    bottom:0;
  }
  img:nth-child(4){
    max-width:325px;
    right:0;
    top:0;
  }
  @media (max-width: 1026px) {
    visibility:hidden;
  }
`

function Projects () {
  return(
  	<ProjSection>
  	  <ContentContainer>
        <Wrapper>
          <FlexL>
            <Copy>
              <H1>Our Shopify projects</H1>
              <P>We’re the digital team you want to work with! Our website building process is so seamless and easy our clients keep coming back for support and guidance.</P>
            </Copy>
            <Brand>
              <img src={joni} alt="Joni"/>
            </Brand>
            <Brand>
              <img src={pharm} alt="Pharmacy for Life"/>
            </Brand>
          </FlexL>
          <FlexR>
            <Brand>
              <img src={fatso} alt="Fatso"/>
            </Brand>
            <Brand>
              <img src={cHaul} alt="Community Haul"/>
            </Brand>
          </FlexR>     
        </Wrapper>
        <OuterBox>
          <ImgBox>
            <img src={meteor} alt=""/>
            <img src={meteor} alt=""/>
            <img src={meteor} alt=""/>
            <img src={planet} alt=""/>
          </ImgBox>
        </OuterBox>
        <Content>
          <H1>What's the next step?</H1>
          <P>It’s hard to tell what is the right solution for your business with so many options for e-commerce, it’s hard to even figure out what your needs are. We should talk and find out exactly how you can take your business to the next level.</P>
          <Button>
            <PopupText
              text="Book a Free Consult"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
        </Content>
  	  </ContentContainer>
  	</ProjSection>
  )
}
export default Projects