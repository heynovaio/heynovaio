import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group-3.svg'
const Who = styled.section`
  padding: 0 20px;
  h2 {
    min-height: 64px;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #0a2239;
  }
  p {
    min-height: 112px;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #405364;
  }
  img {
    position: absolute;
    top: 110px;
  }
`
const ContentCenter = styled.div`
  max-width: 688px;
  margin: 0 auto;
`
const Content = styled.div`
  text-align: center;
  max-width: 615px;
  margin-left: auto;
  padding: 141.5px 0 20px;
  min-height: 477px;
`
const ImgCenter = styled.div`
  max-width: 1106px;
  margin: 0 auto;
  position: relative;
`
export default () => (
  <Who>
    <ImgCenter><img src={img1}/></ImgCenter>
    <ContentCenter>
      <Content>
        <h2>Who Are We?</h2>
        <p>
          Our methodologies are centered around making websites
          and applications that are usable for everyone.<br/><br/>
          Our design is as much based on strategy as it is creativity.
        </p>
      </Content>
    </ContentCenter>
  </Who>
)
