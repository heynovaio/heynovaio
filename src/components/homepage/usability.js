import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/planet-1.png'

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
    -webkit-text-stroke: 3px #0a2239;
    line-height: 1;
    margin-bottom: -13px;
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
const Container = styled.div`
  max-width: 1318px;
  margin: 0 auto;
  position: relative;
`
const HeadingParagraph = styled.p`
  padding-top: 10px;
  max-width: 763px;
  font-size: 20px !important;
  margin: auto;
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
const ImgJupiter = styled.div`
  max-width: 362px;
  position: relative;
  margin-left: -58px;
  img {
    bottom: -260px;
  }
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
    <Container>
      <h2>We believe in the power of knowledge</h2>
      <ParagraphCentre>
        <HeadingParagraph>So let's look at how accessibility affects the digital space</HeadingParagraph>
      </ParagraphCentre>
      <DiagonalContent>
        <FlexBox>
          <p><span>98.1%</span> of 1,000,000 websites tested in February 2020 failed accessibility testing - and that’s just from automated tests!
          </p>
        </FlexBox>
        <FlexBox>
          <p>
            <span>22%</span> of Canadians have at least one disability that affects their sight, hearing, or dexterity. 54% of adults living with a disability currently go online.
          </p>
        </FlexBox>
        <FlexBox>
          <p>
            <span>88%</span> of online shoppers won’t return to a website after having a bad user experience. When you make your website accessible you give everyone the best user experience.
          </p>
        </FlexBox>
      </DiagonalContent>
      <ImgJupiter><img role="presentation" alt="" src={img1}/></ImgJupiter>
    </Container>
  </What>

)
