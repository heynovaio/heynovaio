import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/planet-1.png'
import img2 from '../../images/group-17.png'

const What = styled.section`
  padding: 0 20px;
  background-color: #0C7489;
  h2 {
    min-height: 64px;
    font-size: 50px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #fff;
    font-family: Stolzl;
    padding-top: 53px;
  }
  h3 {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -1px;
    text-align: left;
    color: #2CADBB;
    font-family: Stolzl;
  }
  p {
    min-height: 112px;
    font-size: 20px;
    line-height: 1.4;
    text-align: left;
    color: #fff;
    font-family: Ubuntu;
  }
  img {
    display: inline-block;
    width: 100%;
    position: absolute;
  }
`
const HeadingParagraph = styled.p`
  text-align: center !important;
  max-width: 763px;
  font-size: 24px !important;
`
const Content = styled.div`
  text-align: left;
  max-width: 536px;
`
const ImgCenter = styled.div`
  max-width: 362px;
  margin: 0 auto;
  position: relative;
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
`
export default () => (
  <What>
    <h2>Accessibility & Usability</h2>
    <HeadingParagraph>
      User-designs are only effective if they reach as many people as possible.
    </HeadingParagraph>
    <ImgCenter><img src={img2}/></ImgCenter>

    <Content>
      <h3>Manifesting your brand</h3>
      <p>
        Whatever your vision or idea, we will get you there.
      </p>
    </Content>
    <Content>
      <h3>Connect to real users</h3>
      <p>
        We strive to understand your unique users.  Our inclusive and innovative approaches ensure your brand is accessible to everyone.
      </p>
    </Content>
    <Content>
      <h3>Propel your vision</h3>
      <p>
        Innovative ideas need otherworldly design.  Driven by your unique users and led by the latest research, we will drive your brand forward.
      </p>
    </Content>
    <ImgCenter><img src={img1}/></ImgCenter>
    <Button>Learn More</Button>
  </What>

)
