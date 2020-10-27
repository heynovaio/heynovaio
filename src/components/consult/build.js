import React from "react"
import styled from '@emotion/styled'

import Pharm from '../../images/p-4-l.png'
import Joni from '../../images/group-22.png'

const BuildSection = styled.section`
  color: #0a2239;
  h1{
    text-align: center;
    font-size: 60px;
    letter-spacing: -1.88px;
    margin: 0 auto;
    padding-bottom: 4rem;
  }
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
const BuildBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 40%;
  padding: 4rem 0 6rem 0;
  p{
    line-height: 1.75;
    margin-top: 0;
    font-family: Ubuntu;
    font-size: 20px;
    letter-spacing: 0.25px;
  }
  ul{
    padding: .5rem 0 0 2rem;
  }

  h2{
    padding-bottom: 0;
    font-size: 48px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }
  h3{ 
    font-family: Stolzl;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0.44px;
    color: #0fa3b1;
    padding: 2rem 0 .75rem 0;
  }
  h4{
    width: 100%;
    margin: .5rem 0;
    font-size: 21px;
  }
  h5{
    font-family: Stolzl;
    font-size: 18px;
    line-height: 1.17;
    color: #0fa3b1;
    margin: 0;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 .75rem 0 1.5rem;
  }
`
const PhotoBox = styled.div`
  max-width: 55%;
  padding-top: 2rem;
  position: sticky;
  top: 0;
  img{
    max-width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 85%;
    position: relative;
    display: block;
    margin: 0 auto;
 }
`
const QuoteBox = styled.div`
  quotes: "“" "”";
  color: #0fa3b1;
  font-size: 85px;
  ::before{
    content: open-quote;
    position: absolute;
    transform: translate(-45px, 20px);
  }
  ::after{
    content: close-quote;
    position: absolute;
    transform: translate(490px, -30px);

  }
  p{
    font-size: 20px;
    line-height: 1.78;
    letter-spacing: 0.25px;
    color: #0a2239;
  }
  @media (max-width: 768px) {
    ::after{
      transform: translate(295px, -20px);
    }
`
const ListBox = styled.div`
  ul{
    list-style: none;
    margin: 0;
    padding-left: 3.5rem;
  }
  li {
    position: relative;
    padding-left: 30px;
  }
  li::before{
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0fa3b1;
    position: absolute;
    left: 0;
    transform: translateY(11px);
  }
  p{
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.25px;
  }
`
const RowContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 8rem;
  }
`

function Build () {
  return(
  	<BuildSection>
      <ContentContainer>
        <h1>Our Recent Builds</h1>
        <RowContainer>
          <PhotoBox>
            <img src={Pharm} alt="Pharm" role="presentation"/>
          </PhotoBox>
          <BuildBox>
            <h2>Pharmacy for Life</h2>
            <p>Pharmacy for Life has forged the path for online delivery of pharmaceutical products, cutting out the need to travel to your 
            local store. We provided branding, web design, theme customization, accessibility updates, Shopify consulting, and custom coding 
            of additional pages.</p>
            <h4>Features:</h4>
            <ListBox>
              <ul>
                <li><p>Accessible Design & Development</p></li>
                <li><p>Clean & Calming Design</p></li>
                <li><p>Intuitive user flow & navigation</p></li>
                <li><p>Advanced filtering options for products</p></li>
                <li><p>Mobile friendly</p></li>
              </ul>
            </ListBox>
            <h3>What they have to say</h3>
            <QuoteBox>
              <p>What can I say… they had me at “Hey”.</p>
              <p>The Hey Nova team has been instrumental in helping us set up our e-commerce website. From the planning stages to building the 
              format and content to preparing for launch, Hey Nova is with you every step.</p>
              <p>We enjoy our brainstorming sessions and working in collaboration with Hey Nova to distill ideas into functional, accessible 
              and attractive designs and concepts. Whether you are just getting started or looking to provide your online business identity with 
              a boost or a complete overhaul, Hey Nova can help road map your way to success.</p>
              <p>We look forward to continuing to work with Hey Nova to create a first-class experience with our online business.</p>
            </QuoteBox>
            <h4>Luke Leslie</h4>
            <h5>Owner of Pharmacy for Life</h5>
          </BuildBox>
        </RowContainer>
        <RowContainer>
          <BuildBox>
            <h2>Get Joni</h2>
            <p>Joni is an online subscription service for menstrual pads made with organic and natural materials such as bamboo. Collaborating 
            with Wearebecoming.ca, we brought their brand to life on the online store by providing content strategy, user experience consulting, 
            website design, Shopify development, and theme customization. </p>
            <h4>Features:</h4>
            <ListBox>
              <ul>
                <li><p>Clean & inviting design</p></li>
                <li><p>Simple & intuitive layout</p></li>
                <li><p>Re-usable custom landing pages</p></li>
                <li><p>Mobile friendly</p></li>
                <li><p>Accessible design</p></li>
              </ul>
            </ListBox>
            <h3>What they have to say</h3>
            <QuoteBox>
              <p>Hey Nova has been instrumental with helping us launch on a very tight budget and strict timelines. I love how agile and scrappy 
              their approach is - they always find a way! If your looking for eCommerce support, I would suggest starting with the Hey Nova team 
              to save yourself some time.</p>
            </QuoteBox>
            <h4>Linda Biggs</h4>
            <h5>Co-founder of Get Joni</h5>
          </BuildBox>
          <PhotoBox>
            <img src={Joni} alt="Joni" role="presentation"/>
          </PhotoBox>
        </RowContainer>
      </ContentContainer> 
    </BuildSection>
  )
}
export default Build