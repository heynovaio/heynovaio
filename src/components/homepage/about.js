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
const Button = styled.div`
  background-color: #D5330D;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  padding: 14px 32px;
  max-width: 200px;
  margin-top: 50px;
`
export default () => (
  <Who>
    <Flex>
      <ContentCenter>
        <Content>
          <h2>Stepping boldly into the future of tech</h2>
          <p>Great user experience is all about perspective and without a diverse set of perspectives around the table, designs fall short of working for everyone.</p>
          <p>We believe the future of tech is inclusive and accessible for all, but this future won't be realized without an evolution in how we work. This is why, and as women in tech, our team brings a novel perspective to the complexity of these shifting norms and forges the path forward to bring this future into actuality.</p>
          <p>Let’s start a conversation about how we can work together to propel your business forward and make the digital world more accessible.</p>
          <Button>Reach Out</Button>
        </Content>
      </ContentCenter>
      <ImgRight><img src={img1}/></ImgRight>
    </Flex>
  </Who>
)
