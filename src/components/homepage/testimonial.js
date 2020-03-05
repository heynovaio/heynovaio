import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/grapevine_logo_horizontal.svg'
import img2 from '../../images/quote-left.png'
import img3 from '../../images/quote-right.png'
const Testimonial = styled.section`
  padding: 63px 20px 63px;
  background-color: #0a2239;
  margin-top: 288px;
  h2 {
    min-height: 64px;
    font-size: 50px;
    font-weight: 300;
    line-height: 1.28;
    letter-spacing: -1px;
    font-family: Stolzl;
    text-align: center;
    color: #0fa3b1;
  }
  img {
    width: 100%;
    display: block;
  }
`
const ContentCenter = styled.div`
  max-width: 688px;
  margin: 0 auto;
`
const Content = styled.div`
  max-width: 615px;
  margin-left: auto;
  position: relative;
`
const ImgCenter = styled.div`
  min-width: 407px;
  margin: 0 auto;
`
const Flex = styled.div`
  display: flex;
  margin-top: 60px;
`
const Name = styled.p`
  font-size: 21px;
  font-weight: 500;
  font-family: Stolzl;
  color: #fff;
  margin-bottom: 10px;
`
const JobPosition = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #0fa3b1;
  font-family: Stolzl;
`
const Quote = styled.p`
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  color: #fff;
  min-width: 552px;
  align-self: center;
`
const QuoteLeft = styled.div`
  align-self: flex-start;
  margin-right: 16px;
  min-width: 22px;
`
const QuoteRight = styled.div`
  align-self: flex-end;
`
const TestimonialQuote = styled.div`
  display: flex;
`
const TestimonialDetails = styled.div`
  padding-left: 40px;
`
export default () => (
  <Testimonial>
    <h2>What our clients have to say</h2>
    <Flex>
      <ImgCenter><img src={img1}/></ImgCenter>
      <ContentCenter>
        <Content>
          <TestimonialQuote>
          <QuoteLeft><img src={img2}/></QuoteLeft>
          <Quote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Quote>
          <QuoteRight><img src={img3}/></QuoteRight>
          </TestimonialQuote>
          <TestimonialDetails>
            <Name>Mark Lise</Name>
            <JobPosition>Founder of Digital Spaces</JobPosition>
          </TestimonialDetails>
        </Content>
      </ContentCenter>
    </Flex>
  </Testimonial>
)
