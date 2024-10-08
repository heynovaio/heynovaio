import styled from "@emotion/styled"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactSection = styled.section`
  padding: 55px 0 21px;
  background: var(--HN-Indigo);
`
const H2 = styled.h2`
  font-size: 50px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
  margin: 0 0 5px;
  font-family: Stolzl;
  @media (max-width: 960px) {
    font-size: 35px;
    padding: 0 20px;
  }
`
const H3 = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 16px;
  color: #0fa3b1;
  font-family: Stolzl;
  padding-bottom: 11px;
  border-bottom: solid;
  @media (max-width: 960px) {
    font-size: 25px;
  }
`
const P = styled.p`
  max-width: 690px;
  font-size: 20px;
  line-height: 1.55;
  text-align: center;
  color: #fff;
  font-family: Ubuntu;
  margin: auto;
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const Box = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #0a2239;
  padding: 20px;
  position: relative;
  margin: 20px 20px 50px;
  display: flex;
  max-width: 460px;
  @media (max-width: 960px) {
    flex-wrap: wrap;
    margin: 0;
  }
  @media (max-width: 780px) {
    background: none;
  }
`
const Elem = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.56;
  color: #ffffff;
  position: relative;
  font-family: Ubuntu;
`
const EmailLink = styled.a`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.56;
  color: #ffffff;
  position: relative;
  font-family: Ubuntu;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    color: var(--HN-Fuchsia);
  }
`
const TextBox = styled.div`
  margin: 20px;
  @media (max-width: 780px) {
    margin: 20px auto;
    text-align: center;
  }
`
const Image = styled.div`
  max-width: 277px;
  @media (max-width: 960px) {
    margin: 20px auto 0px;
  }
  img {
    display: block;
    width: 100%;
    margin-bottom: 0;
    border-radius: 8px;
  }
`
const ParagraphCentre = styled.div`
  margin: 10px 0 30px;
  @media (max-width: 960px) {
    padding: 0 20px;
  }
`
const LinkedInLink = styled.a`
  color: #fff;
  font-size: 30px;
  display: block;
  margin-top: 5px;
  font-weight: 500;
  &:hover {
    color: var(--HN-Fuchsia);
  }
`
const GeneralEmailLink = styled.a`
  color: #0fa3b1;
  font-weight: 600;
  &:hover {
    color: var(--HN-Fuchsia);
  }
`

function Contact() {
  const data = useStaticQuery(graphql`
    query {
      kirsten: file(relativePath: { eq: "kirsten.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bryony: file(relativePath: { eq: "bryony.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <ContactSection>
      <H2>Reach out to our Co-founders</H2>
      <ParagraphCentre>
        <P>As the leaders of this company, we are never too busy to chat.</P>
        <P>
          Even if you just want a chat or are starting out in the tech industry
          and are looking for some advice. We are here to help!
        </P>
      </ParagraphCentre>
      <Flex>
        <Box>
          <Image>
            <Img
              alt="Photo of Kirsten"
              role="presentation"
              fadeIn={false}
              fixed={data.kirsten.childImageSharp.fixed}
            />
          </Image>
          <TextBox>
            <H3>Kirsten Dodd</H3>
            <Elem>
              <EmailLink href="mailto:kirsten@heynova.io">
                kirsten@heynova.io
              </EmailLink>
            </Elem>
            <LinkedInLink
              aria-label="Kirsten's LinkedIn"
              target="blank"
              href="https://www.linkedin.com/in/kirsten-dodd-heynova/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </LinkedInLink>
          </TextBox>
        </Box>
        <Box>
          <Image>
            <Img
              alt="Photo of Bryony"
              role="presentation"
              fadeIn={false}
              fixed={data.bryony.childImageSharp.fixed}
            />
          </Image>
          <TextBox>
            <H3>Bryony Anderson</H3>
            <Elem>
              <EmailLink href="mailto:bryony@heynova.io">
                bryony@heynova.io
              </EmailLink>
            </Elem>
            <LinkedInLink
              aria-label="Bryony's LinkedIn"
              target="blank"
              href="https://www.linkedin.com/in/bryony-anderson-266943160/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </LinkedInLink>
          </TextBox>
        </Box>
      </Flex>
      <ParagraphCentre>
        <P>
          Not sure which to contact, email{" "}
          <GeneralEmailLink href="mailto:info@heynova.io">
            info@heynova.io
          </GeneralEmailLink>{" "}
          or flip a coin!
        </P>
      </ParagraphCentre>
    </ContactSection>
  )
}
export default Contact
