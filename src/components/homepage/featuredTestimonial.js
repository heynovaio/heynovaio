import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import "./styles/styles.css"

const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #00c7d4;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  padding: 55px;

  @media (max-width: 850px) {
    flex-direction: column; /* Stack elements vertically for small screens */
    align-items: flex-start; /* Align content to the start */
  }
`

const TestimonialSection = styled.div`
  flex: 1;
`

const ImageSection = styled.div`
  max-width: 615px;
  max-height: 400px;
  height: auto;
  width: 100%;
  overflow: hidden; /* Ensures the image stays within the container */
  border-radius: 20px;

  .img {
    height: 100%; /* Ensure the image fills the height */
    width: 100%; /* Ensure the image fills the width */
    object-fit: cover; /* Crops the image to fit the container */
    object-position: top; /* Focus on the top part of the image */
  }
`

const Content = styled.div`
  text-align: left;
  max-width: 615px;
  position: relative;
  @media (max-width: 1026px) {
    max-width: 515px;
  }
`

const P = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 10px;
  font-size: 18px;
  line-height: 1.5;
  font-family: Ubuntu;
`

const Name = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 0px;
  font-size: 18px;
  line-height: 0.5;
  font-family: Ubuntu;
`

const Strong = styled.span`
  font-weight: bold;
`

const A = styled.a`
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: #0f002e;
  font-size: 19.5px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  background: #1eaebc;
  text-decoration: none;
  padding: 10px;
  margin-top: 50px;
  border-top-left-radius: 10px;
`

const BlockQuote = styled.blockquote`
  color: var(--HN-Indigo);
  font-size: 18px;
  line-height: 1.6;
  font-family: Ubuntu Mono, sans-serif;
  margin: 0;
  margin-bottom: 30px;
  quotes: "“" "”" "‘" "’"; /* Define custom quotes for blockquote */

  &::before {
    content: open-quote; /* Add the opening quote */
    font-size: 3rem; /* Larger size for the quote mark */
    line-height: 0; /* Prevent extra spacing */
    vertical-align: text-top; /* Align quote with text */
    margin-right: 8px; /* Space between quote and text */
    color: var(--HN-Indigo); /* Optional: same color as text */
  }
`

const Quote = styled.span`
  color: var(--HN-Indigo);
  padding-bottom: 0px;
  font-size: 18px;
  line-height: 0.5;
  font-family: Ubuntu;
`

const Testimonial = ({
  url,
  image,
  title,
  testimonial,
  testimonialBy,
  clientName,
}) => {
  return (
    <TestimonialContainer>
      <TestimonialSection>
        <Content>
          <BlockQuote>
            <Quote>{testimonial}</Quote>
          </BlockQuote>
          <Name>
            <Strong>{testimonialBy}</Strong>
          </Name>
          <Name>{clientName}</Name>
        </Content>
      </TestimonialSection>
      <ImageSection>
        <Img
          alt=""
          role="presentation"
          fadeIn={false}
          className="img"
          fluid={image}
        />
      </ImageSection>
      <A href={url}>View {title}</A>
    </TestimonialContainer>
  )
}

export default Testimonial
