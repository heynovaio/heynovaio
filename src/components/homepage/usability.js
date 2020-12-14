import styled from '@emotion/styled'
import React from 'react'
import Bg from '../../images/space-background.jpg'

const What = styled.section`
  padding: 75px 20px 0px;
`
const H2 = styled.h2`
  font-size: 50px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -1px;
  text-align: center;
  color: #0C7489;
  font-family: Stolzl;
  max-width: 800px;
  margin: 0 auto 15px;
  @media (max-width: 960px) {
    font-size: 35px;
  }
`
const Container = styled.div`
  max-width: 1318px;
  margin: 0 auto;
  position: relative;
`
const HeadingParagraph = styled.p`
  max-width: 763px;
  margin: 0 auto 40px;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #0a2339;
  font-family: Ubuntu;
`
const FlexBox = styled.div`
  max-width: 536px;
  margin: 0 15px;
  z-index: 2;
  @media (max-width: 960px) {
    margin: auto;
  }
`
const Flex = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const P = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #0a2339;
  font-family: Ubuntu;
`
const Number = styled.span`
  display: block;
  font-weight: 900;
  line-height: 1;
  font-size: 140px;
  padding: 0 6px;
  -webkit-letter-spacing: -2px;
  -moz-letter-spacing: -2px;
  -ms-letter-spacing: -2px;
  letter-spacing: -.08em;
  margin-bottom: 30px;
  background: url( ${Bg} ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 1026px) {
    font-size: 96px;
  }
`

export default () => (
  <What>
    <Container>
      <H2>We believe in the power of knowledge</H2>
      <HeadingParagraph>So let's look at how accessibility affects the digital space</HeadingParagraph>
      <Flex>
        <FlexBox>
          <P><Number>98.1%</Number> of 1,000,000 websites tested in February 2020 failed accessibility testing - and that’s just from automated tests!
          </P>
        </FlexBox>
        <FlexBox>
          <P>
            <Number>22%</Number> of Canadians have at least one disability that affects their sight, hearing, or dexterity. 54% of adults living with a disability currently go online.
          </P>
        </FlexBox>
        <FlexBox>
          <P>
            <Number>88%</Number> of online shoppers won’t return to a website after having a bad user experience. When you make your website accessible you give everyone the best user experience.
          </P>
        </FlexBox>
      </Flex>
    </Container>
  </What>
)
