import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { PopupText } from "react-calendly"

import joni from "../../images/joni-laptop.png"
import fatso from "../../images/fatso-laptop.png"
import ch from "../../images/ch-laptop.png"
import pfl from "../../images/pfl-laptop.png"
const BusSection = styled.section`
  padding: 0 0px 20px 0px;
  position: relative;
`
const ContentContainer = styled.div`
  max-width: 1488px;
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
  max-width: 739px;
  width: 100%;
  text-align: center;
  margin: 0 auto 80px;
`
const H1 = styled.h2`
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
`
const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 89px;
`
const Card = styled.div`
  background: #0fa3b1;
  border-radius: 8px;
  display: flex;
  max-width: 1100px;
  height: 519px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 112px;
  img {
    width: 100%;
    margin: 0;
  }
  h3 {
    font-family: Stolzl;
    font-weight: bold;
    font-size: 35px;
    line-height: 1;
    color: #091f31;
    margin-bottom: 35px;
  }
  ul {
    font-family: Ubuntu;
    font-weight: 300;
    font-size: 20px;
    line-height: 150%;
    color: #091f31;
  }
  li {
    padding: 0 0 8px 8px;
  }
  @media (max-width: 958px) {
    flex-direction: column;
    height: auto;
    margin: 0 auto;
    align-items: center;
    padding: 40px;
  }
`
const Card2 = styled(Card)`
  background: #0c7489;
  margin: 0 112px 0 auto;
  justify-content: end;
  h3,
  ul {
    color: #fff;
  }
`
const Copy = styled.div`
  @media (min-width: 958px) {
    max-width: 554px;
    width: 100%;
    padding: 0 45px;
  }
`
const ImgBox = styled.div`
  max-width: 660px;
  width: 100%;

  @media (min-width: 958px) {
    transform: translateX(-114px);
    margin-right: -114px;
  }
  @media (max-width: 958px) {
    margin-bottom: 30px;
  }
`
const ImgBox2 = styled(ImgBox)`
  @media (min-width: 958px) {
    transform: translateX(114px);
    margin-right: 0;
    margin-left: -114px;
  }
  @media (max-width: 958px) {
    margin-bottom: 0;
    margin-top: 20px;
  }
`
function Businesses() {
  return (
    <BusSection>
      <ContentContainer>
        <TopWrapper>
          <H1>Businesses we work with</H1>
          <P>
            We make accessibility a priority. Our services vary depending on the
            needs of your business, but we ensure every user can access your
            website.
          </P>
        </TopWrapper>
        <BottomWrapper>
          <Card>
            <ImgBox>
              <img src={joni} alt="Joni" />
            </ImgBox>
            <Copy>
              <h3>New Ventures</h3>
              <ul>
                <li>Design a brand that speaks to your target customers</li>
                <li>
                  Provide a content strategy to plan what information your
                  website includes
                </li>
                <li>Design a beautiful custom, fast & accessible website </li>
                <li>Provide guidance on setting up and using Shopify</li>
              </ul>
            </Copy>
          </Card>
          <Card2>
            <Copy>
              <h3>Established Companies</h3>
              <ul>
                <li>Modernize your look with a brand refresh</li>
                <li>
                  Provide Shopify optimizations to meet your business goals
                </li>
                <li>
                  A fresh website design working within the current structure
                </li>
                <li>Conduct an accessibility audit & make fixes as needed</li>
              </ul>
            </Copy>
            <ImgBox2>
              <img src={fatso} alt="Fatso" />
            </ImgBox2>
          </Card2>
          <Card>
            <ImgBox>
              <img src={ch} alt="Community Haul" />
            </ImgBox>
            <Copy>
              <h3>Growing Organizations</h3>
              <ul>
                <li>Design and build accessible & scalable Shopify themes</li>
                <li>
                  Provide Reusable themes for franchisees with the ability to
                  edit colours & make variations
                </li>
                <li>
                  Build a streamlined process for setting up each new location’s
                  website
                </li>
              </ul>
            </Copy>
          </Card>
          <Card2>
            <Copy>
              <h3>Adapting Businesses</h3>
              <ul>
                <li>Provide support setting up digital platforms</li>
                <li>Seamlessly transition physical store to online</li>
                <li>Shift point-of-sale online</li>
                <li>Deliver a custom website to match your physical store</li>
              </ul>
            </Copy>
            <ImgBox2>
              <img src={pfl} alt="Pharmacy For Life" />
            </ImgBox2>
          </Card2>
        </BottomWrapper>
      </ContentContainer>
    </BusSection>
  )
}
export default Businesses
