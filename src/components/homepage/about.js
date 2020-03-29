import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group-20.png'
const Who = styled.section`
  h2 {
    min-height: 64px;
    font-size: 40px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: left;
    color: #0a2239;
    font-family: Stolzl;
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
`
const Content = styled.div`
  text-align: left;
  max-width: 615px;
  margin-left: 200px;
  padding: 141.5px 0 20px;
  min-height: 477px;
  position: relative;
`
const ImgRight = styled.div`
  margin: 0;
  position: relative;
  max-width: 470px;
`
const Flex = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-right: 0;
  justify-content: space-between;
`
export default () => (
  <Who>
    <Flex>
      <ContentCenter>
        <Content>
          <h2>Stepping boldly into the future of tech</h2>
          <p>We believe the future of tech is inclusive and accessible for all, but this future won’t be realized without an evolution in how we work. As women in tech, we want to see the industry become more inclusive as a whole.</p>
          <p>Our team brings a novel perspective to the table. We are actively shifting industry norms every day through the products we build, by advocating for inclusion, and by mentoring others as they navigate barriers in tech.</p>
          <p>Ask more about how you can be a part of this exciting change, whether you're propelling your business forward or learning more about how to make the digital world more inclusive.</p>
        </Content>
      </ContentCenter>
      <ImgRight><img src={img1}/></ImgRight>
    </Flex>
  </Who>
)
