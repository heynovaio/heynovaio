import React from "react"
import styled from "@emotion/styled"

import planet from "../../images/planet-rocket.svg"

import GIcon1 from "../../images/page-speed-icon.svg"
import GIcon2 from "../../images/seo-icon.svg"
import GIcon3 from "../../images/mobile-friendly.svg"
import GIcon4 from "../../images/superior-design-icon.svg"
import GIcon5 from "../../images/secure-icon.svg"
import GIcon6 from "../../images/user-friendly.svg"
import GIcon7 from "../../images/accessible-icon.svg"
import GIcon8 from "../../images/conversions-icon.svg"

const FeatureSection = styled.section`
  background-color: #0a2239;
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px 60px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;
  }
  h1 {
    max-width: 600px;
  }
`
const ImgBox = styled.div`
  position: absolute;
  left: -100px;
  top: -100px;
  width: 337px;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 220px;
    left: -30px;
  }
`
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  padding: 4rem 0;
  justify-content: space-evenly;
  @media (max-width: 868px) {
    grid-template-columns: repeat(auto-fill, 160px);
    grid-column-gap: 15px;
  }
`
const GridItem = styled.div`
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  h3 {
    display: inline;
    font-family: Stolzl;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: -0.68px;
    line-height: 25px;
    margin: 0;
    @media (max-width: 868px) {
      font-size: 18px;
    }
  }
`
const IconBox = styled.div`
  padding-right: 10px;
  flex: 0 0 80px;
  @media (max-width: 868px) {
    flex: 0 0 50px;
  }
  img {
    display: block;
    width: 100%;
    position: relative;
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
  margin: 0 auto 25px;
`
const P = styled.p`
  font-family: "Ubuntu";
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
  max-width: 750px;
  width: 100%;
  color: white;
  text-align: center;
  margin: 0 auto;
`

function Components() {
  return (
    <FeatureSection>
      <ContentContainer>
        <ImgBox>
          <img src={planet} alt="" />
        </ImgBox>
        <H2>Important Components for Success</H2>
        <P>
          Simply having a website is not enough to meet your goals and grow your
          business. With our skills we find engaging ways to retain customers
          and attract new ones by providing them with a quality digital
          experience.
        </P>
        <GridBox>
          <GridItem>
            <IconBox>
              <img src={GIcon4} alt="Icon4" role="presentation" />
            </IconBox>
            <h3>Unique & Memorable Design</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon1} alt="Icon1" role="presentation" />
            </IconBox>
            <h3>Fast Page-Loading Speeds</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon2} alt="Icon2" role="presentation" />
            </IconBox>
            <h3>Easy to Search for</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon5} alt="Icon5" role="presentation" />
            </IconBox>
            <h3>Secure & Reliable</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon6} alt="Icon6" role="presentation" />
            </IconBox>
            <h3>Easy to Use</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon3} alt="Icon3" role="presentation" />
            </IconBox>
            <h3>Optimized across Devices</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon7} alt="Icon7" role="presentation" />
            </IconBox>
            <h3>Accessible to Everyone</h3>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon8} alt="Icon8" role="presentation" />
            </IconBox>
            <h3>Layout for Conversions</h3>
          </GridItem>
        </GridBox>
      </ContentContainer>
    </FeatureSection>
  )
}
export default Components
