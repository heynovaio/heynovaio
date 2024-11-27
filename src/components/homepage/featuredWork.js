import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import Img from "gatsby-image"
import "./styles/styles.css"
import WorkCard from "./featuredWorkCard"
import Testimonial from "./featuredTestimonial"

const FeaturedWorkSection = styled.section`
  padding: 70px 0 40px;
  background-color: #d9f4f5;
  position: relative;
  @media (max-width: 960px) {
    padding: 30px 0;
  }
`
const FeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  --gap: 30px;
  gap: var(--gap);
  width: 100%;
  margin: 0 auto;
  margin-bottom: var(--gap);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const H2 = styled.h2`
  font-size: 58px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -1px;
  text-align: left;
  color: var(--HN-Indigo);
  font-family: Stolzl;
  @media (max-width: 960px) {
    font-size: 35px;
  }
`
const P = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 0px;
  font-size: 18px;
  line-height: 1.5;
  font-family: Ubuntu;
`

const Strong = styled.span`
  font-weight: bold;
`

const ContentCenter = styled.div`
  max-width: 1288px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`
const Content = styled.div`
  text-align: left;
  max-width: 555px;
  position: relative;
  @media (max-width: 1026px) {
    max-width: 515px;
  }
`
const Button = styled(Link)`
  border-radius: 25px;
  margin-bottom: 30px;
  background-color: var(--HN-Fuchsia);
  font-size: 18px;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  padding: 14px 32px;
  max-width: 300px;
  text-decoration: none;
  margin-top: 20px;
  border: none;
  display: inline-block;
  &:hover {
    filter: grayscale(20%);
  }
`

export default function FeaturedWork({ data }) {
  let edges = data.ourWork.edges

  const randomWorkWithTestimonial = getRandomWorkWithTestimonial(edges)

  // If a valid work with testimonial was found, remove it from the edges list
  if (randomWorkWithTestimonial) {
    edges = edges.filter(edge => edge !== randomWorkWithTestimonial)
  }

  console.log(randomWorkWithTestimonial)

  const randomWorks = getTwoRandomWorks(edges)

  return (
    <FeaturedWorkSection>
      <ContentCenter>
        <Content>
          <H2>Featured Work</H2>
          <P>
            <Strong>TO CHANGE</Strong> Where creativity meets accessibility; see
            examples of how we've transformed our clients' ideas into beautiful
            and inclusive digital spaces.
          </P>
          <Button to="/ourwork">All Our Work > </Button>
        </Content>
        <FeaturedWorkGrid>
          {randomWorks.map((work, index) => (
            <WorkCard
              key={index}
              image={work.node.data.image.localFiles[0].childImageSharp.fluid}
              title={work.node.data.title}
            />
          ))}
        </FeaturedWorkGrid>
        {randomWorkWithTestimonial && (
          <Testimonial
            link={randomWorkWithTestimonial.node.data.link}
            image={
              randomWorkWithTestimonial.node.data.image.localFiles[0]
                .childImageSharp.fluid
            }
            title={randomWorkWithTestimonial.node.data.title}
            testimonial={randomWorkWithTestimonial.node.data.testimonial}
            testimonialBy={randomWorkWithTestimonial.node.data.testimonialBy}
            clientName={randomWorkWithTestimonial.node.data.clientName}
          />
        )}
      </ContentCenter>
    </FeaturedWorkSection>
  )
}

function getRandomWorkWithTestimonial(edges) {
  // Filter the edges to include only nodes where testimonial !== null
  const hasTestimonial = edges.filter(
    edge => edge.node.data.testimonial !== null
  )

  // Return a random edge if available, or null if none exist
  if (hasTestimonial.length === 0) {
    return null
  }

  const randomIndex = Math.floor(Math.random() * hasTestimonial.length)
  return hasTestimonial[randomIndex]
}

function getTwoRandomWorks(edges) {
  // Shuffle the edges
  const shuffled = edges.sort(() => Math.random() - 0.5)

  // Slice up to 2 objects, even if the array has less than 2 items
  return shuffled.slice(0, Math.min(2, shuffled.length))
}
