import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/group-18.png'
import img2 from '../../images/spaceship.png'

const What = styled.section`
  padding: 0 20px;
  background-image: url(${img2});
  margin-top: -360px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  padding-bottom: 30px;
  @media (max-width: 960px) {
    padding-bottom: 150px;
  }
  h2 {
    min-height: 64px;
    font-size: 50px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: left;
    color: #0a2239;
    font-family: Stolzl;
    max-width: 540px;
    padding-top: 410px;
    @media (max-width: 960px) {
      font-size: 35px;
    }
  }
  h3 {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -1px;
    text-align: left;
    line-height: 1.5;
    color: #2CADBB;
    font-family: Stolzl;
    @media (max-width: 960px) {
      font-size: 25px;
    }
  }
  p {
    min-height: 112px;
    font-size: 20px;
    line-height: 1.4;
    text-align: left;
    color: #fff;
    font-family: Ubuntu;
    @media (max-width: 960px) {
      font-size: 18px;
      color: #0a2239;
    }
  }
  img {
    display: inline-block;
    width: 100%;
    @media (min-width: 960px) {
      position: absolute;
    }
  }
`
const Content = styled.div`
  text-align: left;
  max-width: 536px;
`
const Flex3 = styled.div`
  @media (min-width: 960px) {
    align-self: flex-start;
  }
  text-align: left;
  max-width: 536px;
`
const Flex2 = styled.div`
  @media (min-width: 960px) {
    align-self: center;
  }
  text-align: left;
  max-width: 536px;
`
const Flex1 = styled.div`
  text-align: left;
  max-width: 536px;
  @media (min-width: 960px) {
    align-self: flex-end;
  }
`
const DiagonalContent = styled.div`
  display: flex;
  min-height: 700px;
  @media (min-width: 960px) {
    margin: -100px 150px 0;
  }
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const ImgPerson = styled.div`
  max-width: 455px;
  object-fit: contain;
  position: relative;
  @media (max-width: 960px) {
    max-width: 200px;
  }
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
  text-decoration: none;
`
export default () => (
  <What>
    <h2>Our methods connect your brand to real users by:</h2>
    <ImgPerson><img src={img1}/></ImgPerson>

    <DiagonalContent>
      <Flex1>
      <h3>Propelling your vision forward</h3>
      <p>
        Where innovative ideas meet otherworldly designs.  Driven by your unique users and led by the latest research, we will drive your product forward.
      </p>
      </Flex1>
      <Flex2>
        <h3>Connecting you directly to your user community</h3>
        <p>
          We strive to understand your unique users.  Our inclusive and innovative approaches ensure your product is accessible to everyone.
        </p>
      </Flex2>
      <Flex3>
        <h3>Manifesting your unique identity</h3>
        <p>
          Whatever your vision or idea, we will get you there by first building a strong brand foundation
        </p>
      </Flex3>
    </DiagonalContent>
    <Button href="#">Get a Quote</Button>
  </What>

)
