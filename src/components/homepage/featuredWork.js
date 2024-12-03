import styled from "@emotion/styled"
import React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import cx from "classnames"
import Img from "gatsby-image"
import "./styles/styles.css"
import WorkCard from "./featuredWorkCard"
import Testimonial from "./featuredTestimonial"

const FeaturedWorkSection = styled.section`
  padding: 4.375rem 0 2.5rem;
  background-color: #d9f4f5;
  position: relative;
  @media (max-width: 68.75rem) {
    padding: 1.875rem 0;
  }
`

const FeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  --gap: 1.875rem;
  gap: var(--gap);
  width: 100%;
  margin: 0 auto;
  margin-bottom: var(--gap);

  @media (max-width: 68.75rem) {
    grid-template-columns: 1fr;
  }
`

const H2 = styled.h2`
  font-size: 3.625rem;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.0625rem;
  text-align: left;
  color: var(--HN-Indigo);
  font-family: Stolzl;
  @media (max-width: 60rem) {
    /* 960px */
    font-size: 2.1875rem;
  }
`

const P = styled.p`
  color: var(--HN-Indigo);
  padding-bottom: 0;
  font-size: 1.125rem;
  line-height: 1.5;
  font-family: Ubuntu;
`

const Strong = styled.span`
  font-weight: bold;
`

const ContentCenter = styled.div`
  max-width: 80.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  position: relative;
`

const Content = styled.div`
  text-align: left;
  max-width: 34.6875rem;
  position: relative;
  @media (max-width: 64.125rem) {
    max-width: 32.1875rem;
  }
`

const Button = styled(Link)`
  border-radius: 1.5625rem;
  margin-bottom: 1.875rem;
  background-color: var(--HN-Fuchsia);
  font-size: 1.125rem;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  padding: 0.875rem 2rem;
  max-width: 18.75rem;
  text-decoration: none;
  margin-top: 1.25rem;
  border: none;
  display: inline-block;
  &:hover {
    filter: grayscale(20%);
  }
`

export default function FeaturedWork({ data }) {
  const [randomWorkWithTestimonial, setRandomWorkWithTestimonial] = useState(
    null
  )
  const [randomWorks, setRandomWorks] = useState([])

  useEffect(() => {
    let edges = [...data.ourWork.edges]

    // Randomize and persist the selections
    const selectedWorkWithTestimonial = getRandomWorkWithTestimonial(edges)
    setRandomWorkWithTestimonial(selectedWorkWithTestimonial)

    if (selectedWorkWithTestimonial) {
      edges = edges.filter(edge => edge !== selectedWorkWithTestimonial)
    }

    const selectedRandomWorks = getTwoRandomWorks(edges)
    setRandomWorks(selectedRandomWorks)
  }, [data]) // Effect runs only when `data` changes

  return (
    <FeaturedWorkSection>
      <ContentCenter>
        <Content>
          <H2>Featured Work</H2>
          <P>
            Where creativity meets accessibility; see
            examples of how we've transformed our clients' ideas into beautiful
            and inclusive digital spaces.
          </P>
          <Button to="/ourwork">All Our Work &#8702; </Button>
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
            image={
              randomWorkWithTestimonial.node.data.image.localFiles[0]
                .childImageSharp.fluid
            }
            title={randomWorkWithTestimonial.node.data.title}
            testimonial={randomWorkWithTestimonial.node.data.testimonial}
            testimonialBy={randomWorkWithTestimonial.node.data.testimonialBy}
            clientName={randomWorkWithTestimonial.node.data.clientName}
            url={randomWorkWithTestimonial.node.data.link}
          />
        )}
      </ContentCenter>
    </FeaturedWorkSection>
  )
}

function getRandomWorkWithTestimonial(edges) {
  const hasTestimonial = edges.filter(
    edge => edge.node.data.testimonial !== null
  )
  if (hasTestimonial.length === 0) return null
  const randomIndex = Math.floor(Math.random() * hasTestimonial.length)
  return hasTestimonial[randomIndex]
}

function getTwoRandomWorks(edges) {
  const shuffled = edges.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(2, shuffled.length))
}
