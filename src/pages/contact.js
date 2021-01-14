import React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import Contact from "../components/homepage/contact"
import { PopupText } from 'react-calendly'
import SEO from "../components/seo"

const H1 = styled.h1`
  font-size: 110px;
  font-weight: 500;
  line-height: 1.04;
  color: #0a2239;
  margin: 0 0 25px;
  font-family: Stolzl;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 68px;
  }
`
const Main = styled.div`

`
const P = styled.p`
  color: #0a2239;
  max-width: 556px;
  font-size: 26px;
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
    padding: 175px 0 155px;
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
    background: #d5330d;
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
      background: #b33113;
    }
  }
`
const A = styled.a`
  background: #d5330d;
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
    background: #b33113;
  }
`
const Span = styled.span`
  padding: 16px 5px 15px;
  font-weight: 500;
  @media (max-width: 767px) {
    display: block;
  }
`
const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  border: 1px solid #051628;
  padding: 24px;
  margin-top: 50px;
  h2 {
    line-height: 1.2;
    font-size: 34px;
    margin: 0px 0 0;
    font-weight: 700;
    color: #051628;
    line-height: 2;
    font-family: Stolzl;
    text-align: center;
  }
  p {
    color: #051628;
    font-weight: 300;
    margin-bottom: 25px;
    font-family: Ubuntu;
    text-align: center;
  }
  label {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.07em;
    margin-bottom: 15px;
    color: #051628;
    font-family: Ubuntu;
  }
  textarea,
  input[type="text"],
  input[type="email"] {
    width: 100%;
    margin-bottom: 25px;
    background: none;
    border: none;
    border-bottom: 2px solid #051628;
    font-size: 18px;
    font-weight: 300;
    color: #051628;
    line-height: 1.5;
    height: 38px;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    font-family: Ubuntu;
    &:focus {
      border-bottom: 2px solid #d5330d;
    }
  }
  textarea {
    border: 2px solid #051628;
    height: 200px;
    padding: 15px;
    font-family: Ubuntu;
    &:focus {
      border-color: #d5330d;
    }
  }
  input[type="submit"] {
    outline: none;
    -webkit-appearance: none;
    margin-top: 12px;
    font-family: Ubuntu;
    background: #d5330d;
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
      background: #b33113;
    }
  }
`
export default () => (
  <Layout>
    <SEO
      title="Hey Nova | Contact | Branding, Designing, Developing"
      description="Evolving the way companies communicate to their audience by creating cohesive brands, user-centred design, and inclusive code."
      keywords={[ `Web Design`, `Web Development`, `Victoria`, `British Columbia`, `Marketing`, `User Experience`, `Branding` ]}
    />
    <Main>
      <Container>
        <H1 id="main">Hey There</H1>
        <P>How can we help you?</P>
        <ActionContainer>
          <Button>
            <PopupText
              text="Book a Meeting"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
          <Span>or</Span>
          <A href="mailto:info@heynova.io">Email us a Question</A>
        </ActionContainer>
        <Form action="https://formspree.io/info@heynova.io" method="post" name="contact-form" class="validate" target="_blank" novalidate>
          <h2>Leave us a Message</h2>
          <p>We will get back to you shortly!</p>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <label htmlFor="cf-FNAME">Name </label>
              <input type="text" required name="FNAME" class="" id="cf-FNAME"/>
            </div>
            <div class="mc-field-group">
              <label htmlFor="cf-EMAIL">Email </label>
              <input type="email" name="EMAIL" required class="required email" id="cf-EMAIL"/>
            </div>
            <div class="mc-field-group">
              <label htmlFor="cf-MSG">Type Your Message </label>
              <textarea name="MSG" class="required msg" id="cf-MSG"></textarea>
            </div>
            <input type="submit" value="I Want to Chat" name="SUBMIT" id="cf-embedded-subscribe" class="btn-primary"/>
          </div>
        </Form>
      </Container>
    </Main>
    <Contact/>
  </Layout>
)
