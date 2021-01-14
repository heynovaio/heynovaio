import React from "react"
import styled from '@emotion/styled'

import GIcon1 from '../../images/group113.svg'
import GIcon2 from '../../images/group119.svg'
import GIcon3 from '../../images/group112.svg'
import GIcon4 from '../../images/group118.svg'
import GIcon5 from '../../images/group120.svg'
import GIcon6 from '../../images/group121.svg'
import GIcon7 from '../../images/group117.svg'
import GIcon8 from '../../images/group110.svg'
import GIcon9 from '../../images/group111.svg'

const FeatureSection = styled.section`
  background-color: #0a2239;
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
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  padding: 4rem 0;
  justify-content: center;
  @media (max-width: 868px) {
    grid-template-columns: repeat(auto-fill, 160px);
    grid-column-gap: 15px;
  }
`
const GridItem = styled.div`
  color: #ffffff;
  text-align: center;
  h3{
    display: inline;
    font-family: Stolzl;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: -0.68px;
    line-height: 25px;
    @media (max-width: 868px) {
      font-size: 18px;
    }
  }
`
const IconBox = styled.div`
  padding: 1rem 0 .5rem 0;
  img{
    width: 70px;
    height: 70px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 868px) {
      width: 50px;
      height: 50px;
    }
  }
`
const H2 = styled.h2`
  font-family: Stolzl;
  font-size: 50px;
  font-weight: 500;
  letter-spacing: -1.56px;
  text-align: center;
  color: #ffffff;
  max-width: 800px;
  margin: auto;
`

function Feature () {
  return(
  	<FeatureSection>
     	<ContentContainer>
        <H2>Important Components for an Accessible Website</H2>
        <GridBox>
          <GridItem>
            <IconBox>
              <img src={GIcon1} alt="Icon1" role="presentation"/>
            </IconBox>
            <h3>Semantic Code & Added Accessibility Best Practices</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon2} alt="Icon2" role="presentation"/>
            </IconBox>
            <h3>Multiple Ways for the User to Recieve Information</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon3} alt="Icon3" role="presentation"/>
            </IconBox>
            <h3>Viewable on All Screen Sizes & Devices</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon4} alt="Icon4" role="presentation"/>
            </IconBox>
            <h3>Copy that is Easy to Read and Understand</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon5} alt="Icon5" role="presentation"/>
            </IconBox>
            <h3>Intuitive User-Flow & Easy to Interact With</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon6} alt="Icon6" role="presentation"/>
            </IconBox>
            <h3>Funtional Control of the Interactive Elements</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon7} alt="Icon7" role="presentation"/>
            </IconBox>
            <h3>Usable with Assistive Technologies</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon8} alt="Icon8" role="presentation"/>
            </IconBox>
            <h3>User Research & an Empathetic Approach</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon9} alt="Icon9" role="presentation"/>
            </IconBox>
            <h3>Proper use of Colour and Contrast Ratio</h3>
          </GridItem>
        </GridBox>
      </ContentContainer>
    </FeatureSection>
  )
}
export default Feature