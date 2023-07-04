import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../reset.css"
import {
  HeroImage,
  Container,
  HeroContainer,
  Center,
  HeroHeading,
  HeroContent,
  HeroText,
  Button,
} from "../components/ourWork/styles"
import Hero from "../components/ourWork/assets/hero.svg"

export default () => (
  <Layout>
    <SEO
      title="Previous Consulting Work"
      description="Bake accessibility into your tech team's process so you can not only create products that are useable to a wider audience but also comply with WCAG 2.1 guidelines."
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.
            </HeroText>

            <Button>Contact us</Button>
          </HeroContent>
        </HeroContainer>

        {/* WORK SECTION */}
      </Center>
    </Container>
  </Layout>
)
