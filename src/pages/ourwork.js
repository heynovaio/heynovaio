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
  Contact,
  ContactForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextArea,
  InputGroup,
  ContactFormSubmit,
} from "../components/ourWork/styles"
import { Group, Work } from "../components/ourWork/Works"
import { Button } from "../components/shared/Button"

import Hero from "../components/ourWork/assets/hero.svg"
import Moli from "../components/ourWork/assets/moli-industries.png"
import MoliBG from "../components/ourWork/assets/moli-bg.svg"
import YourVoice from "../components/ourWork/assets/your-voice-is-power.png"
import YourVoiceBG from "../components/ourWork/assets/your-voice-bg.svg"
import CodeToLearn from "../components/ourWork/assets/code-to-learn.png"
import CodeToLearnBG from "../components/ourWork/assets/code-to-learn-bg.svg"

import IICAcademy from "../components/ourWork/assets/iic-academy.png"
import IICBG from "../components/ourWork/assets/iic-bg.svg"
import PelvicHealth from "../components/ourWork/assets/pelvic-health.png"
import PelvicHealthBG from "../components/ourWork/assets/pelvic-health-bg.svg"
import RisingYouth from "../components/ourWork/assets/rising-youth.png"

import Commit2Act from "../components/ourWork/assets/commit-to-act.png"
import Commit2ActBG from "../components/ourWork/assets/commit2act-bg.svg"
import SnapTrade from "../components/ourWork/assets/snap-trade.png"
import SnapTradeBG from "../components/ourWork/assets/snaptrade-bg.svg"
import GrapevineTattoo from "../components/ourWork/assets/grapevine-tattoo.png"

import Sprout from "../components/ourWork/assets/sprout.png"
import ConnectedNorthWebapp from "../components/ourWork/assets/connected-north-webapp.png"
import TakingITGlobal from "../components/ourWork/assets/taking-it-global.png"

import ConnectedNorth from "../components/ourWork/assets/connected-north.png"
import ConnectedNorthBG from "../components/ourWork/assets/connected-north-bg.svg"
import WhoseLand from "../components/ourWork/assets/whose-land.png"
import Passiv from "../components/ourWork/assets/passiv.png"
import PassivBG from "../components/ourWork/assets/passiv-bg.svg"

import PharmacyForLife from "../components/ourWork/assets/pharmacy-for-life.png"
import Nixit from "../components/ourWork/assets/nixit.png"
import NixitBG from "../components/ourWork/assets/nixit-bg.svg"
import WatsonAndBarnard from "../components/ourWork/assets/watson-and-bernard.png"

import StreamOfConsciousness from "../components/ourWork/assets/stream-of-consciousness.png"
import SrpoutLearningPortal from "../components/ourWork/assets/sprout-learning-portal.png"
import Commit2ActWebapp from "../components/ourWork/assets/commit-2-act-webapp.png"

import PurpleSector from "../components/ourWork/assets/purple-sector.png"
import PurpleSectorBG from "../components/ourWork/assets/purple-sector-bg.svg"
import Joni from "../components/ourWork/assets/joni.png"
import JoniBG from "../components/ourWork/assets/joni-bg.svg"

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
  {
    title: "IIC Academy",
    image: IICAcademy,
    background: IICBG,
  },
  {
    title: "Pelvic Health & Physiotherapy",
    image: PelvicHealth,
    background: PelvicHealthBG,
  },
  {
    title: "Rising Youth",
    image: RisingYouth,
  },
  {
    title: "Commit2Act",
    image: Commit2Act,
    background: Commit2ActBG,
  },
  {
    title: "SnapTrade",
    image: SnapTrade,
    background: SnapTradeBG,
  },
  {
    title: "Grapevine Tattoo",
    image: GrapevineTattoo,
  },
  {
    title: "Sprout",
    image: Sprout,
  },
  {
    title: "Connected North Webapp",
    image: ConnectedNorthWebapp,
  },
  {
    title: "TakingITGlobal",
    image: TakingITGlobal,
  },
  {
    title: "Conneceted North",
    image: ConnectedNorth,
    background: ConnectedNorthBG,
  },
  {
    title: "Whoseland PWA",
    image: WhoseLand,
  },
  {
    title: "Passiv",
    image: Passiv,
    background: PassivBG,
  },
  {
    title: "Pharmacy for Life",
    image: PharmacyForLife,
  },
  {
    title: "Nixit",
    image: Nixit,
    background: NixitBG,
  },
  {
    title: "Watson and Barnard",
    image: WatsonAndBarnard,
  },
  {
    title: "Stream of Consciousness",
    image: StreamOfConsciousness,
  },
  {
    title: "Sprout Learning Portal",
    image: SrpoutLearningPortal,
  },
  {
    title: "Commit2Act Webapp",
    image: Commit2ActWebapp,
  },
  {
    title: "Purple Sector",
    image: PurpleSector,
    background: PurpleSectorBG,
  },
  {
    title: "Joni",
    image: Joni,
    background: JoniBG,
  },
]
export default function OurWork() {
  const w = serializeWorks(works)

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
          {w.map((a, i) => (
            <Group key={i} reverse={i % 2 === 0 ? false : true}>
              {a.map((project, j) => (
                <Work key={j + i} {...project} />
              ))}
            </Group>
          ))}
        </Center>

        <Contact>
          <p>Like what you see? Let's chat.</p>

          <form netlify name="contact" id="contact-form" action="/ourwork">
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

              <a role="button">Book a Call</a>
            </ContactFormSubmit>
          </form>
        </Contact>
      </Container>
    </Layout>
  )
}

/**
 * @param {import("../components/ourWork/Works/Works").WorkProps[]} w
 * @returns {import("../components/ourWork/Works/Works").WorkProps[][]}
 */
function serializeWorks(w) {
  /** @type {import("../components/ourWork/Works/Works").WorkProps[]} */
  const buf = []
  for (let i = 0; i < w.length; i += 3) {
    let j = i + 3
    if (j >= w.length - 1) j = w.length - 1
    buf.push(w.slice(i, i + 3))
  }

  return buf
}
