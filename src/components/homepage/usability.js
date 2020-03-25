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
const Flex1 = styled.div`
  align-self: flex-start;
  text-align: left;
  max-width: 536px;
`
const Flex2 = styled.div`
  align-self: center;
  text-align: left;
  max-width: 536px;
`
const Flex3 = styled.div`
  align-self: flex-end;
  text-align: left;
  max-width: 536px;
`
const DiagonalContent = styled.div`
  display: flex;
  min-height: 600px;
`
const ImgSaturn = styled.div`
  max-width: 442px;
  margin: 0 auto;
  position: relative;
`
const ImgJupiter = styled.div`
  max-width: 362px;
  position: relative;
  margin-left: -58px;
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
const ParagraphCentre = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  justify-content: center;
`
export default () => (
  <What>
    <h2>We believe in the Power in knowledge</h2>
    <ParagraphCentre>
      <HeadingParagraph>So let's look at how usability affects your website and business</HeadingParagraph>
    </ParagraphCentre>
    <ImgSaturn><img src={img2}/></ImgSaturn>

    <DiagonalContent>
      <Flex1>
        <h3>You might be losing a lot of customers</h3>
        <p>22% of Canadians have at least one disability that affects their sight, hearing, or dexterity, all limitations that can make using a non-accessible website difficult or even impossible...and that number doesn’t even include the hidden, non reported disabilities, or mental health.
        </p>
      </Flex1>
      <Flex2>
        <h3>An accessible website is better for ALL your users</h3>
        <p>
        Accessibility is just the best user experience, making your website better for everyone. Plus, as our generation gets older, we are going to be grateful for any good practices we put in now so that we can still use the web.
        </p>
      </Flex2>
      <Flex3>
        <h3>Good usability is great for business</h3>
        <p>
        Seeing as every $1 invested in user experience results in a return of between $2 to $100, it seems worth every penny, but you could be losing 22% of that profit but not considering everyone in you user experience design.
        </p>
      </Flex3>
    </DiagonalContent>
    <ImgJupiter><img src={img1}/></ImgJupiter>
    <Button>Learn More</Button>
  </What>

)
