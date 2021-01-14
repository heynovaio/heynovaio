import React from "react"
import styled from '@emotion/styled'
import Bg from '../../images/space-background.jpg'
import { Link } from "gatsby"


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
  h2::before{
    display: inline-block;
    content: "";
    border-top: .28rem solid #d5330d;
    width: 36px;
    margin-right: .75rem;
    transform: translateY(-.25rem);
  }
  h2{
    font-family: Stolzl;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.44px;
    text-transform: uppercase;
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
const Quote = styled.p `
  font-weight: 400;
  line-height: 1.5;
  margin-top: 0;
  font-family: Ubuntu;
  font-size: 20px;
  line-height: 1.75;
  letter-spacing: 0.25px;
  width: 52.5%;
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.38px;
  span{
    display: block;
    font-weight: 600;
    font-size: 20px;
    margin-top: 10px;
  }
`
const Percent = styled.span`
  width: 100%;
  font-family: Stolzl;
  font-size: 85px;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
  margin-top: -50px;
  line-height: 1.5;
  background: url( ${Bg} ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-attachment: fixed;
  background-size: cover;
`
const Sub = styled.div`
  max-width: 264px;
  text-align: left; 
  margin: 0 auto 50px;

  p{
    font-weight: 500;
    line-height: 23px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 2rem;
    text-align: center;
 }
`

const QuoteBox = styled.div`
  background-color: #0A2239;
  padding: 30px 35px 45px;
  h3{
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
  span{
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.225px;
    color: #2BC8D7;
    padding-left: 35px;
  }
`

const Line = styled.span`
  content:'';
  background: #d5330d;
  height: 1.5px;
  width: 35px;
  margin: 0px 10px 0;
  display: inline-block;
  vertical-align: middle;
  &::after{
    transform: translate(30px,-3px);
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 8px solid #d5330d;
`

const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #0a2239;
  margin: 20px 0 20px;
  font-family: Ubuntu;
`
const Temp = styled(P)`
  font-weight: 400;
  font-size: 24px;
  font-family: Stolzl;
`
const BookLink = styled(Link)`
  width: 100%;
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  padding-top: 2rem;
  letter-spacing: 0.1px;
  margin-bottom: 50px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
`

function Why () {
  return(
  	<WhySection>
      <ContentContainer> 
        <RowContainer>
          <StickyBox>
            <h2>Why Include Accessibility</h2>
            <p>Accessibility is a necessary practice to stay current & competetive</p>
          </StickyBox>
          <FlexBox>
            <Quote>Designing inclusive software results in improved usability and customer satisfaction.
            <span>-Microsoft's app developer guide</span></Quote>
            <Sub>
              <P>
              <Percent>67%</Percent>
              of consumers will pay more for a great experience</P>
            </Sub>
            <h3 class="subHeader">For Users</h3>
            <P>Good user experience can not be achieved without considering all needs and circumstances of your users, 
            especially when considering that persons living with disabilities and impairments take up around 15% of the 
            world’s population. Yet it goes beyond that 15%. Accessible design and development leads to huge improvements 
            in the experience and loyalty of all users, not just those with disabilities.</P>
            <P>As the digital world becomes even more influential in people's daily lives, many apps and websites will be 
            made redundant when they fail to accommodate their users. Just consider, 79% of those who dislike a website 
            will leave to find a competitor who serves their needs.</P>
            <h3 class="subHeader">For Business</h3>
            <P>As businesses continue to learn to grasp the financial value in having great user experience, the push for 
            design and development teams that offer this service is increasing. I mean, who can argue with a potential 
            rise in the company’s KPIs up to 83% in conversion lift?</P>
            <h3 class="subHeader">For the Future</h3>
            <P>Many provinces in Canada are progressing towards adopting similar accessibility laws to The Accessibility 
            for Ontarians with Disabilities Act (AODA), making it a legal requirement for businesses to have accessible 
            websites. When these laws are passed, any team not prepared will scramble to not get left behind.</P>
            <P>Then there is America, where websites that do business in the United States are legally required to provide 
            equal accessibility to all people following Title III of the Americans with Disabilities Act (ADA), yet many 
            still do not which is the cause of major lawsuits and financial loss for those businesses. In 2019, web 
            accessibility federal lawsuits hit record numbers, with 11,053 suits filed in federal court, an 8.8% increase 
            from 2018.</P>

            <BookLink to="/contact" aria-label="Contact us to learn more about why accessibility is important">
              Contact us to learn more
              <Line role="presentation" />
            </BookLink>
            <QuoteBox>
              <h3>The future is accessible</h3>
              <P>The accessibility problems of today are the mainstream breakthroughs of tomorrow.</P>
              <span class="author">Eve Andersson, Director of Accessibility Engineering at Google</span>
            </QuoteBox>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <StickyBox>
            <h2>How it improves brand loyalty</h2>
            <p>When you put your users first, they put you first!</p>
          </StickyBox>
          <FlexBox>
            <Quote>Companies must remind themselves that people with disabilities are also important customers</Quote>
            <Sub>
              <P>
              <Percent>306%</Percent>
              higher lifetime brand value with an emotional connection</P>
            </Sub>
            <P>According to Paul Smyth, the Head of Digital Accessibility at Barclays, many organizations are waking up to the fact that embracing accessibility leads to multiple benefits – reducing legal risks, improving customer experience and colleague productivity, not to mention that accessibility strengthens brand presence. With so many companies out there competing for customers’ attention, it is increasingly important to build authentic brands that connect to your audience and keeps their engagement. In Canada and the US combined there are approximately 67.2 million people living with a disability, all with family members and friends who care equally about accessibility and are much more likely to be loyal to companies that align with those values.</P>
            <P>Adopting accessibility into your business shows your customers, clients, and users that you care and gives 
            them a reason to care about your success too.</P>
            <Temp>Simply put, when accessibility is part of strategic planning, businesses are better equipped 
            for success in our connected world of commerce, academia, and civic engagement.</Temp>
            <BookLink to="/contact" aria-label="Contact us to learn more about brand loyalty">
              Contact us to learn more
              <Line role="presentation" />
            </BookLink>
          </FlexBox>
        </RowContainer>
      </ContentContainer> 
    </WhySection>
  )
}
export default Why