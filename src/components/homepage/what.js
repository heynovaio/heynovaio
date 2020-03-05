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
const Content = styled.div`
  text-align: left;
  max-width: 536px;
`
const Flex3 = styled.div`
  align-self: flex-start;
  text-align: left;
  max-width: 536px;
`
const Flex2 = styled.div`
  align-self: center;
  text-align: left;
  max-width: 536px;
`
const Flex1 = styled.div`
  align-self: flex-end;
  text-align: left;
  max-width: 536px;
`
const DiagonalContent = styled.div`
  display: flex;
  min-height: 700px;
  margin: -100px 150px 0;
`
const ImgPerson = styled.div`
  max-width: 455px;
  object-fit: contain;
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
    <h2>Our approach and methods connect your brand to real users by...</h2>
    <ImgPerson><img src={img1}/></ImgPerson>

    <DiagonalContent>
      <Flex1>
      <h3>Propelling your vision forward</h3>
      <p>
        Where innovative ideas meet otherworldly design.  Driven by your unique users and led by the latest research, we will drive your product forward.
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
    <Button>Get a Quote</Button>
  </What>

)
