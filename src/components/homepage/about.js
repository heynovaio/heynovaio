import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group-20.png'
const Who = styled.section`
  padding: 60px 0 40px;
  position: relative;
  @media (max-width: 960px) {
    padding: 30px 0;
  }
`
const H2 = styled.h2`
  font-size: 58px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -1px;
  text-align: left;
  color: #0a2239;
  font-family: Stolzl;
  @media (max-width: 960px) {
    font-size: 35px;
  }
`
const P = styled.p`
  min-height: 112px;
  font-size: 20px;
  line-height: 1.4;
  text-align: left;
  color: #405364;
  font-family: Ubuntu;
`
const ContentCenter = styled.div`
  max-width: 1288px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`
const Content = styled.div`
  text-align: left;
  max-width: 615px;
  position: relative;
  @media (max-width: 1026px) {
    max-width: 515px;
  }
`
const ImgRight = styled.div`
  margin: 0 0 -7px;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 470px;
  img {
    margin-bottom: 0;
    display: inline-block;
    width: 100%;
  }
  @media (max-width: 1026px) {
    max-width: 370px;
  }
  @media (max-width: 960px) {
    display: none;
  }
`
export default () => (
  <Who>
    <ContentCenter>
      <Content>
        <H2>Stepping boldly into the future of tech</H2>
        <P>We believe in a future of tech that is inclusive for all. This future sadly won’t be realized without an evolution in how we work. As being in the only 5% of tech companies founded by women, we are passionate about seeing the industry become more inclusive, diverse, and equitable.</P>
        <P>Our years and combined experiences means the team brings a novel perspective to the table. We take these perspectives and work to actively shift industry norms every day through the products we build, by advocating for inclusion, and by mentoring others as they navigate barriers in tech.</P>
        <P>Ask more about how you can be a part of this exciting change, whether you're propelling your business forward or learning more about how to make the digital world more inclusive.</P>
      </Content>
    </ContentCenter>
    <ImgRight><img role="presentation" alt="" src={img1}/></ImgRight>
  </Who>
)
