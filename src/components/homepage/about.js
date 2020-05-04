import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group-20.png'
const Who = styled.section`
  position: relative;
  @media (max-width: 960px) {
    padding: 20px;
  }
  h2 {
    min-height: 64px;
    font-size: 40px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: left;
    color: #0a2239;
    font-family: Stolzl;
    @media (max-width: 960px) {
      font-size: 35px;
    }
  }
  p {
    min-height: 112px;
    font-size: 20px;
    line-height: 1.4;
    text-align: left;
    color: #405364;
    font-family: Ubuntu;
  }
  img {
    display: inline-block;
    width: 100%;
  }
`
const ContentCenter = styled.div`
  max-width: 1288px;
  margin: 0 auto;
  position: relative;
`
const Content = styled.div`
  text-align: left;
  max-width: 615px;
  position: relative;
  @media (min-width: 960px) {
    padding: 141.5px 0 20px;
    min-height: 477px;
  }
`
const ImgRight = styled.div`
  margin: 0;
  position: absolute;
  right: 0;
  top: 30px;
  max-width: 470px;
  @media (max-width: 960px) {
    display: none;
  }
`
export default () => (
  <Who>
    <ContentCenter>
      <Content>
        <h2>Stepping boldly into the future of tech</h2>
        <p>We believe the future of tech is inclusive and accessible for all, but this future won’t be realized without an evolution in how we work. As women in tech, we want to see the industry become more inclusive as a whole.</p>
        <p>Our team brings a novel perspective to the table. We are actively shifting industry norms every day through the products we build, by advocating for inclusion, and by mentoring others as they navigate barriers in tech.</p>
        <p>Ask more about how you can be a part of this exciting change, whether you're propelling your business forward or learning more about how to make the digital world more inclusive.</p>
      </Content>
    </ContentCenter>
    <ImgRight><img role="presentation" alt="" src={img1}/></ImgRight>
  </Who>
)
