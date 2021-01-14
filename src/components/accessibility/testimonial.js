import React from "react"
import styled from '@emotion/styled'
import Planet from '../../images/planet-rocket.svg'

const TestimonialSection = styled.section`
  background: linear-gradient(180deg, #2BC8D7 0%, #0C7489 100%);
  
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 100px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 1026px) {
    padding: 40px 10px 0 10px;
  }
  h2{
    font-family: Stolzl;
    font-weight: 500;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -1px;
    color: #0A2239;
    padding-bottom: 100px;
    margin: 0;
    text-align: center;
    ::before{
      content: open-quote;
      position: absolute;
      transform: translate(-300px, -20px);
      font-size: 350px;
      text-shadow: 5px 5px #ffffff;
      @media (max-width: 1026px) {
        font-size: 150px;
        transform: translate(-90px,-90px);
      }
    }
    @media (max-width: 1026px) {
      padding: 60px 0;
    }
  }
  
`
const QuoteBox = styled.div`
  max-width: 75%;
  background: #0A2239;
  border-radius: 4px;
  padding: 30px 45px 0 40px;
  margin: 0;
  overflow: hidden;
  p{
    font-family: Ubuntu;
    font-size: 24px;
    line-height: 39px;
    letter-spacing: 0.25px;
    color: #FFFFFF;
    font-weight: 300;
  }
  h3{
    padding-bottom: 5px;
    font-family: Stolzl;
    font-size: 26px;
    line-height: 31px;
    color: #D5330D;
    font-weight: 400;
    margin: 0;
  }
  @media (max-width: 1026px) {
    max-width: 100%;
    padding: 30px 35px 0 35px;
  }
`
const SigBox = styled.div`
  h4{
    padding: 5px 0 30px 40px;
    max-width: 27.5%;
    background: #0A2239;
    margin: 0;
    border-radius: 4px;
    transform: translateY(-5px);
    color: #ffffff;
    font-weight: 500;
  }
  h5{
    padding: 5px 0 30px 40px;
    max-width: 15%;
    background: #0A2239;
    margin: 0;
    border-radius: 4px;
    transform: translateY(-30px);
    color: #ffffff;
    font-weight: 400;
  }
  @media (max-width: 1026px) {
    h4{
      max-width: 100%;
    }
    h5{
      max-width: 100%;
    }
  }
`
const ImageBox = styled.div`
  overflow: hidden;
  img{
    z-index: 1;
    position: absolute;
    right: 20px;
    top: 43%;
  }
  
  @media (max-width: 1026px) {
    visibility: hidden;
  }
`

function Testimonial () {
  return(
  	<TestimonialSection>
     	<ContentContainer>
        <h2>Words from a client</h2>
        <QuoteBox>
          <p>Our overall experience with Hey Nova was, in short, easy. They work closely 
          with us on large and small projects, while providing valuable insight to better 
          our understanding of accessibility. They delivered all feedback in one go, which 
          allowed us to be more efficient for faster client turnaround times. The owners, 
          Kirsten and Bryony, really care about accessibility. <b>Not only do they care about 
          being compliant, but they care about the human aspect of accessibility and how 
          it feels to someone with accessibility needs.</b></p>
          <h3>Kris Nicolaou</h3>
          <ImageBox>
            <img src={Planet} alt="Planet" role="presentation"/>
          </ImageBox>
        </QuoteBox>
        <SigBox>
          <h4>President, Brainbox Labs</h4>
          <h5>Toronto, ON</h5>
        </SigBox>

     	</ContentContainer>
    </TestimonialSection>
  )
}
export default Testimonial