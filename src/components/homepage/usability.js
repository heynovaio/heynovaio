import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/planet-1.png'
import img2 from '../../images/group-17.png'

const What = styled.section`
  padding: 0 20px 50px;
  background-color: #0C7489;
  h2 {
    font-size: 50px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #2BC8D7;
    font-family: Stolzl;
    padding-top: 53px;
    max-width: 800px;
    margin: auto;
    @media (max-width: 960px) {
      font-size: 35px;
    }
  }
  span {
    font-size: 90px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    color: #fff;
    font-family: Ubuntu;
  }
  img {
    display: inline-block;
    width: 100%;
    position: absolute;
  }
  h3 span {
    display: block;
  }
`
const HeadingParagraph = styled.p`
  padding-top: 10px;
  max-width: 763px;
  font-size: 24px !important;
  margin: auto;
`
const BoxHeading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  text-align: center;
  color: #2BC8D7;
  font-family: Stolzl;
  display: block;
`
const BigNumbers = styled.div`
  text-align: center;
  font-size: 60px;
`
const FlexBox = styled.div`
  max-width: 536px;
  margin: 0 15px;
  z-index: 2;
  @media (max-width: 960px) {
    margin: auto;
  }
`
const DiagonalContent = styled.div`
  margin-top: 40px;
  display: flex;
  min-height: 530px;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const ImgSaturn = styled.div`
  max-width: 442px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 960px) {
    max-width: 250px;
  }
`
const ImgJupiter = styled.div`
  max-width: 362px;
  position: relative;
  margin-left: -58px;
  @media (max-width: 960px) {
    max-width: 180px;
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
  margin: auto;
`
const ParagraphCentre = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  justify-content: center;
`
export default () => (
  <What>
    <h2>We believe in the Power of knowledge</h2>
    <ParagraphCentre>
      <HeadingParagraph>So let's look at how usability affects your website and business</HeadingParagraph>
    </ParagraphCentre>
    <ImgSaturn><img src={img2}/></ImgSaturn>

    <DiagonalContent>
      <FlexBox>
        <BoxHeading>
        <span>22%</span>
        You might be losing a lot of customers
        </BoxHeading>
        <p>
        22% of Canadians have at least one disability that affects their sight, hearing, or dexterity. Limitations like these can make or break your digital experience and this number doesn’t even account for temporary limitations or mental health barriers.
        </p>
      </FlexBox>
      <FlexBox>
        <BoxHeading>
        <span>88%</span>
        An accessible website is better for ALL your users
        </BoxHeading>
        <p>
        Did you know that 88% of online shoppers won’t return to a website after having a bad user experience? When you make your website accessible you give everyone the best user experience - a necessity as our world becomes ever more digital.
        </p>
      </FlexBox>
      <FlexBox>
        <BoxHeading>
        <span>1000%</span>
        Good usability is great for business
        </BoxHeading>
        <p>
        Seeing as every $1 invested in user experience results in a return of between $2 to $100, it seems worth every penny, but you could be losing 22% of that profit but not considering everyone in you user experience design.
        </p>
      </FlexBox>
    </DiagonalContent>
    <ImgJupiter><img src={img1}/></ImgJupiter>
    <Button href="http://heynova.io/blog/accessibility/">Read the Blog</Button>
  </What>

)
