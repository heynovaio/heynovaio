import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import React from 'react'
import img1 from '../../images/group-3.svg'

const Who = styled.section`
  padding: 0 20px;
  h2 {
    min-height: 64px;
    font-size: 40px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #0a2239;
    font-family: Stolzl;
  }
  p {
    min-height: 112px;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #405364;
    font-family: Ubuntu;
  }
`
const ContentCenter = styled.div`
  max-width: 1288px;
  margin: 0 auto;
  position: relative;
`
const Content = styled.div`
  text-align: center;
  max-width: 615px;
  position: relative;
  @media (min-width: 960px) {
    padding: 141.5px 0 20px;
    margin: 0 auto;
  }
`
const vibrate = keyframes`
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
  }
  20% {
    -webkit-transform: translate(15px, -15px);
            transform: translate(15px, -15px);
  }
  30% {
    -webkit-transform: translate(-15px, 15px);
            transform: translate(-15px, 15px);
  }
  40% {
    -webkit-transform: translate(15px, 15px);
            transform: translate(15px, 15px);
  }
  50% {
    -webkit-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
  }
  60% {
    -webkit-transform: translate(15px, -15px);
            transform: translate(15px, -15px);
  }
  70% {
    -webkit-transform: translate(-15px, 15px);
            transform: translate(-15px, 15px);
  }
  80% {
    -webkit-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
  }
  90% {
    -webkit-transform: translate(15px, -15px);
            transform: translate(15px, -15px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`
const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 110px;
  -webkit-animation: vibrate 22s ease-in-out infinite both;
  animation: ${vibrate} 22s ease-in-out infinite both;
`
export default () => (
  <Who>
    <ContentCenter>
      <ImgContainer>
        <img role="presentation" alt="" src={img1}/>
      </ImgContainer>
      <Content>
        <h2>A digital design agency forging a bold path forward</h2>
        <p>Successful products are determined by people, not numbers or stereotypes.  Our approach considers the lived experiences of users to provide the most comprehensive and effective digital experience for your brand.</p>
      </Content>
    </ContentCenter>
  </Who>
)
