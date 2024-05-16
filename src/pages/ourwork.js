import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../reset.css"
import "../components/ourWork/styles/styles.css"
import { graphql, useStaticQuery } from "gatsby"
import { PopupText } from "react-calendly"
import { Link } from "gatsby"

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
import { Group, Work } from "../components/ourWork/Works"
import { Button } from "../components/shared/Button"

import Hero from "../components/ourWork/assets/heroX2.png"

import MoliBG from "../components/ourWork/assets/moli-bg.svg"

import YourVoiceBG from "../components/ourWork/assets/your-voice-bg.svg"

import CodeToLearnBG from "../components/ourWork/assets/code-to-learn-bg.svg"

import IICBG from "../components/ourWork/assets/iic-bg.svg"

import PelvicHealthBG from "../components/ourWork/assets/pelvic-health-bg.svg"

import Commit2ActBG from "../components/ourWork/assets/commit2act-bg.svg"

import ConnectedNorthBG from "../components/ourWork/assets/connected-north-bg.svg"
import PassivBG from "../components/ourWork/assets/passiv-bg.svg"

import JoniBG from "../components/ourWork/assets/joni-bg.svg"

import BloomingHouseBg from "../components/ourWork/assets/blooming-house-bg.svg"


/**
 * @type {import("../components/ourWork/Works/Works").WorkProps[]}
 */

export default function OurWork() {
  const data = useStaticQuery(graphql`
    query {
      bloomingHouse: file(relativePath: { eq: "blooming-house.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      moli: file(relativePath: { eq: "moli-industries.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yourVoice: file(relativePath: { eq: "your-voice-is-power.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      codeToLearn: file(relativePath: { eq: "code-to-learn.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iicAcademy: file(relativePath: { eq: "iic-academy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pelvicHealth: file(relativePath: { eq: "pelvic-health.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      risingYouth: file(relativePath: { eq: "rising-youth.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      commit2Act: file(relativePath: { eq: "commit-to-act.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snaptrade: file(relativePath: { eq: "snap-trade.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grapevineTattoo: file(relativePath: { eq: "grapevine-tattoo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sprout: file(relativePath: { eq: "sprout.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      connectedNorthWebApp: file(relativePath: { eq: "connected-north-webapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takingITGlobal: file(relativePath: { eq: "taking-it-global.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      connectedNorth: file(relativePath: { eq: "connected-north.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whoseLand: file(relativePath: { eq: "whose-land.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      passiv: file(relativePath: { eq: "passiv-alt.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pharmacyForLife: file(relativePath: { eq: "pharmacy-for-life.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      watsonAndBarnard: file(relativePath: { eq: "watson-and-bernard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sproutLearningPortal: file(relativePath: { eq: "sprout-learning-portal.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      commit2ActWebApp: file(relativePath: { eq: "commit-2-act-webapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joni: file(relativePath: { eq: "joni-alt.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      createToLearn: file(relativePath: { eq: "create-to-learn.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const works = [
    {
      title: "Blooming House",
      image: data.bloomingHouse.childImageSharp.fluid,
      background: BloomingHouseBg,
      link: "bloominghouse.ca",
    },
    {
      title: "Commit2Act Webapp",
      image: data.commit2ActWebApp.childImageSharp.fluid,
    },
    {
      title: "Sprout Learning Portal",
      image: data.sproutLearningPortal.childImageSharp.fluid,
    },
    {
      title: "Commit2Act",
      image: data.commit2Act.childImageSharp.fluid,
      background: Commit2ActBG,
      link: "https://www.commit2act.org/",
    },
    {
      title: "Your Voice is Power",
      background: YourVoiceBG,
      image: data.yourVoice.childImageSharp.fluid,
      link: "https://www.yourvoiceispower.ca/",
    },
    {
      title: "Code to Learn",
      background: CodeToLearnBG,
      image: data.codeToLearn.childImageSharp.fluid,
      link: "https://www.codetolearn.ca/en",
    },
    {
      title: "Sprout",
      image: data.sprout.childImageSharp.fluid,
      link: "https://www.sproutideas.org/",
    },
    {
      title: "Rising Youth",
      image: data.risingYouth.childImageSharp.fluid,
      link: "https://www.risingyouth.ca/stories",
    },
    {
      title: "Whoseland PWA",
      image: data.whoseLand.childImageSharp.fluid,
      link: "https://www.whose.land/",
    },
    {
      title: "Connected North",
      image: data.connectedNorth.childImageSharp.fluid,
      background: ConnectedNorthBG,
      link: "https://www.connectednorth.org/",
    },
    {
      title: "Connected North Webapp",
      image: data.connectedNorthWebApp.childImageSharp.fluid,
    },
    {
      title: "TakingITGlobal",
      image: data.takingITGlobal.childImageSharp.fluid,
      link: "https://takingitglobal.org/",
    },
    
    {
      title: "Moli Industries LTD",
      background: MoliBG,
      image: data.moli.childImageSharp.fluid,
      link: "https://moli.ca/"
    },
    {
      title: "Watson and Barnard",
      image: data.watsonAndBarnard.childImageSharp.fluid,
      link: "https://wbsurveys.ca/",
    },
    {
      title: "Passiv",
      image: data.passiv.childImageSharp.fluid,
      background: PassivBG,
      link: "https://passiv.com/",
    },
    {
      title: "Pharmacy for Life",
      image: data.pharmacyForLife.childImageSharp.fluid,
      link: "https://pharmacyforlife.ca/",
    },
    {
      title: "Pelvic Health & Physiotherapy",
      image: data.pelvicHealth.childImageSharp.fluid,
      background: PelvicHealthBG,
      link: "https://pelvic-floor.ca/",
    },
    {
      title: "Joni",
      image: data.joni.childImageSharp.fluid,
      background: JoniBG,
      link: "https://getjoni.com/",
    },
    {
      title: "IIC Academy",
      image: data.iicAcademy.childImageSharp.fluid,
      background: IICBG,
      link: "https://www.iicacademy.com/",
    },
    {
      title: "Create to Learn",
      image: data.createToLearn.childImageSharp.fluid,
      link: "https://www.createtolearn.ca/",
    },
  ]
  const w = serializeWorks(works)

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
                Where creativity meets accessibility; see how we’ve transformed our client’s ideas into beautiful and inclusive digital spaces.
              </HeroText>

              <ButtonLink to="/contact">Get in Touch</ButtonLink>
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

          <form method="post" data-netlify="true" name="contact" id="contact-form" action="/thanks">
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
