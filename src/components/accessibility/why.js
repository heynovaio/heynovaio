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
    width: 52.5%;
    font-family: Ubuntu;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.38px;
    span{
      display: block;
      font-weight: 600;
      font-size: 20px;
      margin-top: 10px;
    }
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
    font-weight: 600;
  }
  .subHeader{
    color: #0FA3B1; 
    margin: .5rem 0 0;
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
  max-width: 40%;
  text-align: left; 
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
    font-weight: 600;
    line-height: 23px;
    font-size: 18px;
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
const QuoteBox = styled.div`
  background-color: #0A2239;
  padding: 30px 35px;
  h4{
    font-family: Stolzl;
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: -0.0961538px;
    color: #2BC8D7;
    display: block;
    width: 100%;
  }
  p{
    color: #ffffff;
    padding-left: 35px;
    ::before{
      content: open-quote;
      position: absolute;
      transform: translate(-30px, -30px);
      font-size: 60px;
      font-family: Georgina;
    }
    ::after{
      content: close-quote;
      position: absolute;
      transform: translate(5px, -15px);
      font-size: 60px;
      font-family: Georgina;
    }
  }
  h5{
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.225px;
    color: #2BC8D7;
    padding-left: 35px;
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
            <h3>WHY INCLUDE ACCESSIBILITY?</h3>
            <p>Accessibility is a neccessary practice to stay current & competetive</p>
          </StickyBox>
          <FlexBox>
            <h4>Designing inclusive software results in improved usability and customer satisfaction.
            <span>-Microsoft's app developer guide</span></h4>
            <Sub>
              <h1>67%</h1>
              <P>of consumers will pay more for a great experience</P>
            </Sub>
            <h4 class="subHeader">For Users</h4>
            <P>Good user experience can not be achieved without considering all needs and circumstances of your users, 
            especially when considering that persons living with disabilities and impairments take up around 15% of the 
            world’s population. Yet it goes beyond that 15%. Accessible design and development leads to huge improvements 
            in the experience and loyalty of all users, not just those with disabilities.</P>
            <P>As the digital world becomes even more influential in people's daily lives, many apps and websites will be 
            made redundant when they fail to accommodate their users. Just consider, 79% of those who dislike a website 
            will leave to find a competitor who serves their needs.</P>
            <h4 class="subHeader">For Business</h4>
            <P>As businesses continue to learn to grasp the financial value in having great user experience, the push for 
            design and development teams that offer this service is increasing. I mean, who can argue with a potential 
            rise in the company’s KPIs up to 83% in conversion lift?</P>
            <h4 class="subHeader">For the Future</h4>
            <P>Many provinces in Canada are progressing towards adopting similar accessibility laws to The Accessibility 
            for Ontarians with Disabilities Act (AODA), making it a legal requirement for businesses to have accessible 
            websites. When these laws are passed, any team not prepared will scramble to not get left behind.</P>
            <P>Then there is America, where websites that do business in the United States are legally required to provide 
            equal accessibility to all people following Title III of the Americans with Disabilities Act (ADA), yet many 
            still do not which is the cause of major lawsuits and financial loss for those businesses. In 2019, web 
            accessibility federal lawsuits hit record numbers, with 11,053 suits filed in federal court, an 8.8% increase 
            from 2018.</P>
            <a href ="../contact">
              <BookLink>
                <h5>Book a free consult</h5>
                <Line/>
              </BookLink> 
            </a>
            <QuoteBox>
              <h4>The future is accessible</h4>
              <p>The accessibility problems of today are the mainstream breakthroughs of tomorrow.</p>
              <h5 class="author">Eve Andersson, Director of Accessibility Engineering at Google</h5>
            </QuoteBox>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <StickyBox>
            <h3>HOW IT IMPORVES CUSTOMER LOYALTY</h3>
            <p>Whether for your own business or for your clients’, brand loyalty matters, and accessibility is key!</p>
          </StickyBox>
          <FlexBox>
            <h4>Consumers who have an emotional connection with a brand have a 306% higher lifetime value</h4>
            <Sub>
              <h1>306%</h1>
              <P>higher lifetime value of customers with emotional connection to your brand</P>
            </Sub>
            <P>According to Paul Smyth, the Head of Digital Accessibility at Barclays, many organizations are waking up to 
            the fact that embracing accessibility leads to multiple benefits – reducing legal risks,  improving customer 
            experience and colleague productivity. Accessibility also overall strengthens brand presence. With so many 
            companies out there competing for customers’ attention, it is increasingly important to build authentic brands 
            that connect to your audience and keeps their engagement.</P>
            <P>Adopting accessibility into your business shows your customers, clients, and users that you care and gives 
            them a reason to care about your success too.</P>
            <h4 class="temp">Simply put, when accessibility is part of strategic planning, businesses are better equipped 
            for success in our connected world of commerce, academia, and civic engagement.</h4>
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