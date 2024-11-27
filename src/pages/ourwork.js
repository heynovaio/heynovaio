import React from "react"
import Layout from "../components/layout"
import {
  HeroImage,
  Container,
  HeroContainer,
  Center,
  HeroHeading,
  HeroContent,
  HeroText,
  Contact,
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextArea,
  InputGroup,
  ContactFormSubmit,
  ButtonLink,
} from "../components/ourWork/styles"
import { PopupText } from "react-calendly"
import { Button } from "../components/shared/Button"
import Hero from "../components/ourWork/assets/heroX2.png"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Group, Work } from "../components/ourWork/Works"

export default function OurWork({ data: { ourWork } }) {
  let works = []

  const sortedEdges = [...ourWork.edges].sort(
    (a, b) => a.node.data.id - b.node.data.id
  )

  for (const edge of sortedEdges) {
    const data = edge.node.data

    if (data.image === null || data.tile === null) {
      continue
    }

    let work = {
      title: data.title,
      image: data.image.localFiles[0].childImageSharp.fluid,
      aspectRatio: data.image.localFiles[0].childImageSharp.fluid.aspectRatio,
    }

    if (data.link !== null) {
      work["link"] = data.link
    }

    if (data.background !== null) {
      work["background"] = data.background.localFiles[0].publicURL
    }

    works.push(work)
  }

  const workedGroupedByThrees = serializeWorks(works)

  // Ensures that the entry with the biggest image gets put to the front of the list
  const orderedWorks = workedGroupedByThrees.map(innerArray => {
    const belowOne = innerArray.filter(item => item.aspectRatio < 1)
    const others = innerArray.filter(item => item.aspectRatio >= 1)
    return [...belowOne, ...others]
  })

  return (
    <Layout>
      <SEO
        title="Our Work"
        description="Where creativity meets accessibility; see how we’ve transformed our client’s ideas into beautiful and inclusive digital spaces."
        keywords={[
          `Accessibility`,
          `Web Design`,
          `Web Development`,
          `Canada`,
          `British Columbia`,
          `Ontario`,
          `Nova Scotia`,
          `Alberta`,
          `Marketing`,
          `User Experience`,
          `Branding`,
        ]}
        image="https://heynova.io/static/laptop-planets-cc259abd5061e4d434e01ab4ce745fb1.svg"
      />

      <Container>
        <Center>
          {/* HERO SECTION */}
          <HeroContainer>
            <HeroImage src={Hero} />

            <HeroContent>
              <HeroHeading>Our Work</HeroHeading>

              <HeroText>
                Where creativity meets accessibility; see how we’ve transformed
                our client’s ideas into beautiful and inclusive digital spaces.
              </HeroText>

              <ButtonLink to="/contact">Get in Touch</ButtonLink>
            </HeroContent>
          </HeroContainer>
        </Center>

        {/* WORK SECTION */}
        <Center className="works">
          {orderedWorks.map((a, i) => (
            <Group key={i} reverse={i % 2 === 0 ? false : true}>
              {a.map((project, j) => (
                <Work key={j + i} {...project} />
              ))}
            </Group>
          ))}
        </Center>

        <Contact>
          <p>Like what you see? Let's chat.</p>

          <form
            method="post"
            data-netlify="true"
            name="contact"
            id="contact-form"
            action="/thanks"
          >
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup>
              <ContactFormLabel htmlFor="email">Email</ContactFormLabel>
              <ContactFormInput id="email" name="email" />
            </InputGroup>

            <InputGroup>
              <ContactFormLabel htmlFor="message">Message</ContactFormLabel>
              <ContactFormTextArea id="message" name="message" />
            </InputGroup>

            <ContactFormSubmit className="submit">
              <Button type="submit">Send Message</Button>

              <p>or</p>

              <PopupText
                text="Book a Call"
                url="https://calendly.com/hey-nova/free-consult"
              />
            </ContactFormSubmit>
          </form>
        </Contact>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query OurWorkPageQuery {
    ourWork: allAirtable(
      filter: { table: { eq: "ourWork" } }
      sort: { fields: id, order: ASC } # Use 'sort' for ordering in Gatsby
    ) {
      edges {
        node {
          data {
            id
            title
            link
            image {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            background {
              localFiles {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`

function serializeWorks(w) {
  const buf = []
  for (let i = 0; i < w.length; i += 3) {
    let j = i + 3
    if (j >= w.length - 1) j = w.length - 1
    buf.push(w.slice(i, i + 3))
  }

  return buf
}
