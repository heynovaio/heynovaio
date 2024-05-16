import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { PopupText } from "react-calendly"
import SEO from "../components/seo"

import {
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextArea,
  InputGroup,
  ContactFormSubmit,
} from "../components/ourWork/styles"

const H1 = styled.h1`
  font-size: 90px;
  font-weight: 500;
  line-height: 1.04;
  color: var(--HN-Indigo);
  margin: 0 0 25px;
  font-family: Stolzl;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 48px;
  }
`
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: var(--HN-Indigo);
  font-family: Stolzl;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const Main = styled.div``
const P = styled.p`
  color: var(--HN-Indigo);
  max-width: 556px;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.64;
  margin: 35px auto 55px;
  font-family: Ubuntu;
  text-align: center;
`
const Container = styled.div`
  max-width: 1288px;
  padding: 145px 0 145px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 678px;
  }
  @media (max-width: 767px) {
    padding: 115px 0 155px;
  }
`
const ActionContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
  font-family: Ubuntu;
  font-size: 20px;
  vertical-align: middle;
  text-align: center;
  padding-bottom: 40px;
  @media (max-width: 767px) {
    padding: 0 5px;
  }
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`
const Button = styled.div`
  a {
    border-radius: 25px;
    background: var(--HN-Fuchsia);
    color: #fff;
    padding: 18px 25px 22px;
    font-size: 20px;
    text-decoration: none;
    width: 250px;
    text-align: center;
    font-family: Ubuntu;
    display: inline-block;
    @media (max-width: 767px) {
      width: 300px;
    }
    &:hover {
      filter: grayscale(20%);
    }
  }
`
const SubmitButton = styled.button`
  border-radius: 25px;
  background: var(--HN-Fuchsia);
  color: #fff;
  padding: 18px 25px 22px;
  font-size: 20px;
  text-decoration: none;
  width: 250px;
  text-align: center;
  font-family: Ubuntu;
  display: inline-block;
  @media (max-width: 767px) {
    width: 300px;
  }
  &:hover {
    filter: grayscale(20%);
  }
`
const A = styled.a`
  background: var(--HN-Fuchsia);
  border-radius: 25px;
  color: #fff;
  padding: 18px 25px 22px;
  font-size: 20px;
  text-decoration: none;
  width: 250px;
  text-align: center;
  font-family: Ubuntu;
  display: inline-block;
  @media (max-width: 767px) {
    width: 300px;
  }
  &:hover {
    filter: grayscale(20%);
  }
`
const Span = styled.span`
  padding: 16px 5px 15px;
  font-weight: 500;
  @media (max-width: 767px) {
    display: block;
  }
`

export default () => (
  <Layout>
    <SEO
      title="Contact us"
      description="Get in touch so we can help you with your next accessibile digital solution."
      keywords={[
        `Web Design`,
        `Accessibility`,
        `Web Development`,
        `Victoria`,
        `Halifax`,
        `Toronto`,
        `Marketing`,
        `User Experience`,
        `Branding`,
      ]}
    />
    <Main>
      <Container>
        <H1 id="main">Hey There</H1>
        <P>How can we help you?</P>
        <ActionContainer>
          <Button>
            <PopupText
              text="Book a Meeting"
              url="https://calendly.com/hey-nova/free-consult"
            />
          </Button>
          <Span>or</Span>
          <A href="mailto:info@heynova.io">Email us a Question</A>
        </ActionContainer>
         <div>
          <H2>or Fill out this form</H2>
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
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactFormSubmit>
          </form>
        </div>
      </Container>
   
    </Main>
  </Layout>
)
