import styled from "@emotion/styled"
import React from "react"
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
  padding: 200px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  padding: 100px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically for small screens */
    align-items: flex-start; /* Align content to the start */
  }
`

const TestimonialSection = styled.div`
  flex: 1;
`

const ImageSection = styled.div`
  max-width: 300px;
  height: auto;
  width: 100%;
  border-radius: 50px;
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

const Testimonial = ({
  link,
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
          <P>{testimonial}</P>
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
      <A href={link}>View {title}</A>
    </TestimonialContainer>
  )
}

export default Testimonial
