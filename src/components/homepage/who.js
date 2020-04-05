import styled from '@emotion/styled'
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
  img {
    top: 110px;
    @media (min-width: 960px) {
      position: absolute;
    }
  }
`
const ContentCenter = styled.div`
  max-width: 688px;
  margin: 0 auto;
`
const Content = styled.div`
  text-align: center;
  max-width: 615px;
  min-height: 477px;
  position: relative;
  @media (min-width: 960px) {
    padding: 141.5px 0 20px;
    margin-left: auto;
  }
`
const ImgCenter = styled.div`
  max-width: 1106px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 960px) {
    max-width: 150px;
    padding-top: 30px;
  }
`
export default () => (
  <Who>
    <ImgCenter><img src={img1}/></ImgCenter>
    <ContentCenter>
      <Content>
        <h2>A digital design agency forging a bold path forward</h2>
        <p>
          Successful products are determined by people, not numbers or stereotypes.  Our approach considers the lived experiences of users to provide the most comprehensive and effective digital experience for your brand.
        </p>
      </Content>
    </ContentCenter>
  </Who>
)
