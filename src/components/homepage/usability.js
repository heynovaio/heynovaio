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
      <HeadingParagraph>So let's look at how usability affects your website and product and why designs are only effective if they reach as many people as possible. Even though it might seem obvious, this a new way of thinking about accessibility, and we bring our expertise to the table.</HeadingParagraph>
    </ParagraphCentre>
    <ImgSaturn><img src={img2}/></ImgSaturn>

    <DiagonalContent>
      <Flex1>
        <h3>You might be losing a lot of customers if your website is not accessible, as people with disabilities comprise a significant part of the population.</h3>
        <p>In 2017 it was recorded that Canada has 22% (6.2 million) people that have at least one disability that affects their sight, hearing, or dexterity. These are all limitations that can make using a website without accessibility included in it’s creation, often impossible. This percentage does not even include the many disabilities that are “hidden” or not reported. In fact, it is likely that many of your friends, co-workers, and potential users experience a disability of some kind that might affect their interaction with a website.
</p>
      </Flex1>
      <Flex2>
        <h3>Better and inclusive user experience is better for all your users, not only people with disabilities.</h3>
        <p>
        Accessibility is for able-bodied people also.t In Canada, nearly 30% of children between the ages of 11 to 13 are nearsighted needing glasses.  Among adults, 55% of Canadians wear eyeglasses.  An ageing population and the growing presence of chronic health conditions, like arthritis.  Better, more accessible and inclusive UX helps everyone and will be a growing need as the next generation approaches old age after growing accustomed to using digital tools in their everyday lives.

        </p>
      </Flex2>
      <Flex3>
        <h3>So it makes sense that user experiences and accessibility which considers people with disabilities significantly influences business growth.</h3>
        <p>
        Conventionally bad UX results in failure in 70% of businesses. Every $1 invested in UX results in a much greater return – between $2 to $100.  These numbers increase if you consider nearly 13% of those disabled are within the technology age of 15 to 24 years.  They account for a huge part of the market.

        </p>
      </Flex3>
    </DiagonalContent>
    <ImgJupiter><img src={img1}/></ImgJupiter>
    <Button>Learn More</Button>
  </What>

)
