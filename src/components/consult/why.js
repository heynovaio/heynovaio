import React from "react"
import styled from '@emotion/styled'
import Bg from '../../images/space-background.jpg'



const WhySection = styled.section`
  color: #0a2239;
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;

  }
  h1{
    max-width: 600px;
  }
`
const RowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 4rem;
  flex-wrap: wrap;
`
const StickyBox = styled.div`
  position: -webkit-sticky;
  position: sticky;
  padding-top: 15px;
  top: 40px;
  padding-right: 46px;
  max-width: 494px;
  overflow-y: auto;
  height: auto;
  h3::before{
    display: inline-block;
    content: "";
    border-top: .28rem solid #d5330d;
    width: 36px;
    margin-right: .75rem;
    transform: translateY(-.25rem);
  }
  h3{
    font-family: Stolzl;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.44px;
  }
  p{
    font-family: Stolzl;
    font-size: 39px;
    font-weight: 300;
    line-height: 1.36;
    letter-spacing: -0.78px;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    padding-bottom: 4rem;
 }
`
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 677px;
  padding-top: 0;
  h4{
    width: 50%;
    font-family: Ubuntu;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.38px;
    color: #0a2239; 
  }
  p{
    font-weight: 400;
    line-height: 1.5;
    margin-top: 0;
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
  }
  .temp{
    width: 100%;
  }
  .book{
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    padding-top: 2rem;
    letter-spacing: 0.1px;
  }
  a{
    color: inherit;
    width: 100%;
    font-family: Ubuntu;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 100%;
    h4{
      width: 100%;
    }
 }
`
const Sub = styled.div`
  max-width: 50%;
  text-align: right; 
  margin: auto 0;
  h1{
    width: 100%;
    font-family: Stolzl;
    font-size: 85px;
    font-weight: bold;
    margin-bottom: 12px;
    display: inline-block;
    line-height: 1;
    background: url( ${Bg} ) no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-attachment: fixed;
    background-size: cover;
  }
  p{
    font-weight: 700;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 2rem;
    text-align: center;
 }
`
const BookLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  h5{
    font-family: Ubuntu;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
    padding-top: 2rem;
    letter-spacing: 0.1px;
  }
`
const Line = styled.div`
    position:relative;
    content:'';
    background: #d5330d;
    height: 1.5px;
    width: 35px;
    margin: 0 10px;
    transform: translate(8px, 46px);

  ::after{
    transform: translate(33px,-3px);
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 8px solid #d5330d;
  }
  @media (max-width: 768px) {
    transform: translate(8px, 42px);
  }
`
const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #0a2239;
  margin: 20px 0 20px;
  font-family: Ubuntu;
`

function Why () {
  return(
  	<WhySection>
      <ContentContainer> 
        <RowContainer>
          <StickyBox>
            <h3>THE CHALLENGES IN E-COMMERCE</h3>
            <p>Sometimes you just need help to do the heavy lifting</p>
          </StickyBox>
          <FlexBox>
            <h4>88% of online shoppers say they won’t return to a website after having a bad user experience.</h4>
            <Sub>
              <h1>88%</h1>
              <P>Customers lost from bad UX</P>
            </Sub>
            <P>Times truly have changed. More than ever it has become imperative to provide your customers with a 
            method to shop online apposed to instore, but there is so much competition on the web.</P>
            <P>Your approach must match the needs of your customers if you are going to ever compete with the large 
            companies that rule the world of e-commerce (you know who are talking about).</P>
          </FlexBox>
        </RowContainer>
        <RowContainer>
          <StickyBox>
            <h3>THE BEST E-COMMERCE SOLUTIONS</h3>
            <p>We can make it simple, and help you stay ahead in your industry</p>
          </StickyBox>
          <FlexBox>
            <h4>Better UX design could yield conversion rates of up to 400%</h4>
            <Sub>
              <h1>400%</h1>
              <P>Financial gain from good UX</P>
            </Sub>
            <P>Knowing how your customers’ think, behave and shop is everything when building an e-commerce platform. 
            That is why we take a user-first approach to help you reach your business goals. No matter the product, 
            we research and understand your market so that we can make every decision in building your website, to suit 
            their unique needs.</P>
            <P>That’s not all! We keep up with all the latest research so we are providing you with the most up to date 
            styles, coding practices, technical advice and user experience expertise.</P>
            <h4 class="temp">Today’s best practice is tomorrow’s antiquated idea, which is why we always keep up with the latest 
            knowledge and tech!</h4>
            <a href ="../contact">
              <BookLink>
                <h5>Book a free consult</h5>
                <Line/>
              </BookLink> 
            </a>
          </FlexBox>
        </RowContainer>
      </ContentContainer> 
    </WhySection>
  )
}
export default Why