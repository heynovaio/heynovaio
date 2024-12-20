import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import "./styles/styles.css"

const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--HN-Testimonial-Teal);
  gap: 3.25rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 0.625rem;
  position: relative;
  padding: 3.5rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const TestimonialSection = styled.div`
  flex: 1;
`

const ImageSection = styled.div`
  max-width: 29rem;
  max-height: 25rem;
  height: auto;
  width: 100%;
  overflow: hidden;
  border-radius: 1.25rem;

  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`

const Content = styled.div`
  text-align: left;
  max-width: 38.5rem;
  position: relative;
  @media (max-width: 64.125rem) {
    max-width: 32rem;
  }
`

const P = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 0.625rem;
  font-size: 1.125rem;
  line-height: 1.5;
  font-family: Ubuntu;
`

const Name = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 0;
  font-size: 1.125rem;
  line-height: 0.5;
  font-family: Ubuntu;
`

const Strong = styled.span`
  font-weight: bold;
`

const A = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #0f002e;
  font-size: 1.21875rem;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  background: #1eaebc;
  text-decoration: none;
  padding: 0.625rem;
  margin-top: 3.125rem;
  border-top-left-radius: 0.625rem;
`

const BlockQuote = styled.blockquote`
  color: var(--HN-Indigo);
  font-size: 1.125rem;
  line-height: 1.6;
  font-family: Ubuntu Mono, sans-serif;
  margin: 0;
  margin-bottom: 1.875rem;
  quotes: "“" "”" "‘" "’";

  &::before {
    content: open-quote;
    font-size: 3rem;
    line-height: 0;
    vertical-align: text-top;
    margin-right: 0.5rem;
    color: var(--HN-Indigo);
  }
`

const Quote = styled.span`
  color: var(--HN-Indigo);
  padding-bottom: 0;
  font-size: 1.125rem;
  line-height: 0.5;
  font-family: Ubuntu;

  @media (max-width: 64.125rem) {
    font-size: 1rem;
  }
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
