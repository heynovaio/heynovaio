import styled from "@emotion/styled"
import React from "react"
import Img from "gatsby-image"

const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #97e1e5;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
`

const TestimonialSection = styled.div`
  flex: 1;
`

const ImageSection = styled.div`
  max-width: 100%; /* Make image responsive */
  height: auto; /* Maintain aspect ratio */
  width: 300px; /* Fixed width for the image */
  border-radius: 10px; /* Optional: Rounded corners */
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
  padding-bottom: 0px;
  font-size: 18px;
  line-height: 1.5;
  font-family: Ubuntu;
`

const Name = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 0px;
  font-size: 18px;
  line-height: 0;
  font-family: Ubuntu;
`

const Strong = styled.span`
  font-weight: bold;
`

const Title = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #0f002e;
  font-size: 18px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: right;
  background: #009daa;
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
      <a href={link}>
        <Title>View {title}</Title>
      </a>
    </TestimonialContainer>
  )
}

export default Testimonial
