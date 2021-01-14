import React from "react"
import styled from '@emotion/styled'
import { PopupText } from 'react-calendly'
import LaptopPlanet from '../../images/laptop-planets.svg'
import AstroClipboard from '../../images/astro-clipboard.svg'
import Astros from '../../images/two-astronauts.svg'
import AstroSpace from '../../images/astro-space.svg'


const ServiceSection = styled.section`
  color: #0a2239;
  padding-bottom: 0; 
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

const NonStickyBox = styled.div`
  position: relative;
  padding-right: 46px;
  padding-top: 15px;
  max-width: 494px;
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
    max-width: 100%;
    padding: 0 1rem;
  }
`
const PhotoBox = styled.div`
  margin: auto;
  vertical-align: center;
  position: relative;
  display: inline-block;

  .Single{
    display: block;
    margin: auto;
  }


`

const BookLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  h5{
    max-width: fit-content;
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    padding-top: 2rem;
    letter-spacing: 0.1px;
  }
  @media (max-width: 768px) {
    h5{
      font-size: 17px;
    }
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
    transform: translate(30px,-3px);
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
const ListBox = styled.div`
  a{
    display: block;
    width: 100%;
  }
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
const ServiceHeader = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 4rem;
  h2{
    font-family: Stolzl;
    font-size: 50px;
    line-height: 1.28;
    letter-spacing: -1px;
    margin-bottom: .75rem;
    color: #0c7489;
    font-weight: 400;
  }
  .Subheader{
    font-family: Stolzl;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.33;
  }
`
const ServiceFooter = styled.div`
    max-width: 761px;
    text-align: center;
    margin: 0 auto;
  p{
    font-family: Ubuntu;
    font-size: 25px;
    line-height: 1.44;
    letter-spacing: 0.31px;
  }
`
const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #0a2239;
  margin: 20px 0 20px;
  font-family: Ubuntu;
`
const Button = styled.div`
  a {
    background-color: #D5330D;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #fff;
    font-family: Stolzl;
    padding: 14px 24px;
    text-decoration: none;
    margin-top: 20px;
    border: none;
    display: inline-block;
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
`

function Service () {
  return(
	  <ServiceSection>
      <ContentContainer>
        <ServiceHeader>
          <h2>Our Approach</h2>
          <p class='Subheader'>Our general approach has produced resounding success; however, we don’t believe one size fits all so we 
          tailor our services to meet your needs based on the requirements and size of your team.</p>
        </ServiceHeader>
        <RowContainer>
          <NonStickyBox> 
            <h3>WORKSHOP/WEBINAR</h3>
            <p>An overview to get you started on the journey of accessibiliy</p>
            <PhotoBox>
              <img src={LaptopPlanet} alt="Laptop Planets" role="presentation" class="Single"/>
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>We find the best way to start is our training program is by diving straight in headfirst with a comprehensive workshop on 
            accessibility. This online workshop gives your design and development teams a complete overview to get them started in the 
            journey and a great foundation for all their future learning.</P>
            <P>They will learn:</P>
            <ListBox>
              <ul>
                <li><p>Who accessibility affects and why</p></li>
                <li><p>The WCAG 2.0 Accessibility Guidelines and what is needed to meet them</p></li>
                <li><p>What tools and resources are needed to test for accessibility</p></li>
                <li><p>The types of tests needed to check for accessibility</p></li>
                <li><p>Best practices for building with accessibility in mind</p></li>
                <li><p>Other tips and tricks that will help them along their way</p></li>
              </ul>
              <a href ="../contact">
                <BookLink>
                  <h5>Book a free consult to learn more</h5>
                  <Line/>
                </BookLink>  
              </a>
            </ListBox>
          </FlexBox>          
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>ACCESSIBILITY AUDITS & REPORTS</h3>
            <p>We run the tests for you to give an evaluation of your current accessibility score</p>
            <PhotoBox>
              <img src={AstroClipboard} alt="Astro Clipboard" role="presentation" class="Single"/>
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>Our audits will pin point all the accessibly errors on your product that need to be fixed to meet WCAG 2.1 Guidelines for AODA 
            and ADA compliancy. We believe that accessibility goes above and beyond a checklist, so we also highlight other problem areas, 
            some that may not fail according to these guidelines but that could still affect someone with a disability, to ensure you have a 
            full picture and can produce the most accessible product possible.</P>
            <P>They will learn:</P>
            <ListBox>
              <ul>
                <li><p>A deeper understanding of what issues to to look for throughout the test</p></li>
                <li><p>How to fix these issues and general accessibility best practices that can be adopted right from the planning stage of a project</p></li>
                <li><p>A deeper understanding of how each thing affects certain people, from an empathetic lens</p></li>
                <li><p>How to create their own report</p></li>
              </ul>
              <a href ="../contact">
                <BookLink>
                  <h5>Book a free consult to learn more</h5>
                  <Line/>
                </BookLink>
              </a>  
            </ListBox>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>MENTORSHIP & EDUCATION</h3>
            <p>We will be right by your side (virtually) as you and your team learn and grow</p>
            <PhotoBox>
              <img src={Astros} alt="Astros" role="presentation" class="Single"/>
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>Every team is different, with different internal processes, different ways they like to learn, and varying understanding of 
            accessibility. That is why we cater our mentorship approach to ensure they have the resources they need to empower them towards 
            accessible design and development in the formats that best suit them.  Whether this is regular meetings or detailed documentation, 
            your team will complete their time with us fueled with both knowlegde and compassion for accessibility, making it a daily practice 
            in their work.</P>
            <a href ="../contact">
              <BookLink>
                <h5>Book a free consult to learn more</h5>
                <Line/>
              </BookLink>
            </a>  
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>ONGOING SUPPORT</h3>
            <p>We are just a call or email away, always!</p>
            <PhotoBox>
              <img src={AstroSpace} alt="Astro Space" role="presentation" class="Single"/>
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>Real growth is never over. After your team is ready to tackle accessibility alone, we will always remain 
            a quick message away to answer any questions that come up during new projects. We know our training will have 
            you feeling so confident, you will rarely need this, but as the technology field is always evolving and changing, 
            it is nice to know we are here if you need us.</P>
            <a href ="../contact">
              <BookLink>
                <h5>Book a free consult to learn more</h5>
                <Line/>
              </BookLink> 
            </a>
          </FlexBox>
        </RowContainer>

        <ServiceFooter>
          <p>Not sure what you need yet? That’s okay! We can help you determine the best course of action after a free 
          session to better understand your needs.</p>
          <Button>
            <PopupText
              text="Book a Free Consult"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
        </ServiceFooter>     
      </ContentContainer> 
    </ServiceSection>
  )
}
export default Service