import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../reset.css"
import "../components/ourWork/styles/styles.css"
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
import { Group, Work } from "../components/ourWork/Works"

import Hero from "../components/ourWork/assets/hero.svg"
import Moli from "../components/ourWork/assets/moli-industries.png"
import MoliBG from "../components/ourWork/assets/moli-bg.svg"
import YourVoice from "../components/ourWork/assets/your-voice-is-power.png"
import YourVoiceBG from "../components/ourWork/assets/your-voice-bg.svg"
import CodeToLearn from "../components/ourWork/assets/code-to-learn.png"
import CodeToLearnBG from "../components/ourWork/assets/code-to-learn-bg.svg"

export default function OurWork() {
  /**
   * @type {import("../components/ourWork/Works/Works").WorkProps[]}
   */
  const works = [
    {
      title: "Moli Industries LTD",
      background: MoliBG,
      image: Moli,
    },
    {
      title: "Code to Learn",
      background: CodeToLearnBG,
      image: CodeToLearn,
    },
    {
      title: "Your Voice is Power",
      background: YourVoiceBG,
      image: YourVoice,
    },
  ]

  const moli = works[0]
  const codeToLearn = works[1]
  const yourVoice = works[2]

  return (
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
        </Center>

        {/* WORK SECTION */}
        <Center className="works">
          <Group>
            <Work {...moli} className="moli long" />
            <Work {...codeToLearn} className="code-to-learn" />
            <Work {...yourVoice} className="your-voice" />
          </Group>
        </Center>
      </Container>
    </Layout>
  )
}
