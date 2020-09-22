import React from "react"
import styled from '@emotion/styled'

import GIcon1 from '../../images/page-speed-icon.svg'
import GIcon2 from '../../images/seo-icon.svg'
import GIcon3 from '../../images/mobile-friendly.svg'
import GIcon4 from '../../images/superior-design-icon.svg'
import GIcon5 from '../../images/secure-icon.svg'
import GIcon6 from '../../images/user-friendly.svg'
import GIcon7 from '../../images/accessible-icon.svg'
import GIcon8 from '../../images/conversions-icon.svg'

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
  grid-template-columns: repeat(auto-fill, 300px);
  grid-column-gap: 100px;
  grid-row-gap: 60px;
  padding: 4rem 0 4rem 3rem;
  justify-content: center;
`
const GridItem = styled.div`
  color: #ffffff;
  display: inline-block;
  h3{
    display: inline;
    font-family: Stolzl;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.69px;
  }
  p{
    display: inline-block;
    height: 104px;
    font-family: Ubuntu;
    font-size: 16px;
    font-weight: lighter;
    line-height: 1.35;
    letter-spacing: -0.1px;
    opacity: 0.8;
    padding-top: .75rem;
  }
`
const IconBox = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  transform: translate(-56px, -10px);
  img{
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
  margin: auto;
`

function Feature () {
  return(
  	<FeatureSection>
     	<ContentContainer>
        <H2>Important Components for Success</H2>
        <GridBox>
          <GridItem>
            <IconBox>
              <img src={GIcon1} alt="Icon1" role="presentation"/>
            </IconBox>
            <h3>Fast Page Loading Speed</h3>
            <p>Pages with a longer load time tend to have higher bounce rates and cause users to spend less time on the page/website, 
            which is why we make sure it’s extra fast.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon2} alt="Icon2" role="presentation"/>
            </IconBox>
            <h3>SEO Optimization</h3>
            <p>We can help you achieve a higher organic SEO score so your customers find your first with the use of meta tags and 
            semantic code practices.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon3} alt="Icon3" role="presentation"/>
            </IconBox>
            <h3>Mobile Friendly</h3>
            <p>We build responsive websites that look just as amazing on any device as they do on desktop, to ensure the best experience 
            for your customers no matter what device they are on.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon4} alt="Icon4" role="presentation"/>
            </IconBox>
            <h3>Unique & Superior Design</h3>
            <p>These days it is important to capture your customers’ interest and loyalty. That is why we provide custom-designed sites 
            that reinforce your brand and stand out from the crowd.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon5} alt="Icon5" role="presentation"/>
            </IconBox>
            <h3>Secure & Reliable</h3>
            <p>We give you and your customers peace of mind by applying security best practices.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon6} alt="Icon6" role="presentation"/>
            </IconBox>
            <h3>User-friendly Experience</h3>
            <p>A badly planned website will lose you customers, which is why we take a user-first approach, ensuring they have the best 
            experience.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon7} alt="Icon7" role="presentation"/>
            </IconBox>
            <h3>Accessible to Everyone</h3>
            <p>We believe every user counts, so we ensure even those customers who are limited by disabilities and other limitations can use 
            your online store by building it to meet accessibility standards.</p>
          </GridItem>
          <GridItem>
            <IconBox>
              <img src={GIcon8} alt="Icon8" role="presentation"/>
            </IconBox>
            <h3>Increased Conversions</h3>
            <p>Improved User Experience leads to more sales and improved retention of customer loyalty. Just check the stats!</p>
          </GridItem>
        </GridBox>
      </ContentContainer>
    </FeatureSection>
  )
}
export default Feature