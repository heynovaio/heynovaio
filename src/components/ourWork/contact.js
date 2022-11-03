import React from "react"
import styled from '@emotion/styled'

const ContactSection = styled.section`
  background: #0A2239;
`

const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px;
  margin: auto auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;

  }
  
`
const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  padding: 24px;
  color: #fff;
  h1{
    text-align: center;
    font-family: Stolzl;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 70px;
  }
  label {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.07em;
    margin-bottom: 15px;
    font-family: Ubuntu;
  }
  textarea,
  input[type="text"],
  input[type="email"] {
    width: 100%;
    margin-bottom: 25px;
    background: #fff;
    
    border: none;
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
      box-shadow: 0 0 0 1px #d5330d;
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
    border: none;
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
const ActionContainer = styled.div`
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
    justify-content: left;
  }
`
const A = styled.a`
  color: #fff;
  text-align: center;
  font-family: Ubuntu;
  display: inline-block;
  padding: 22px 25px 20px;
  text-transform: uppercase;
  margin: auto 0;
  @media (max-width: 767px) {
    width: 300px;
  }
  &:hover {
    color: #d5330d;
  }
`
const Span = styled.span`
  padding: 22px 100px 20px;
  font-weight: 500;
   margin: auto 0;
  @media (max-width: 767px) {
    display: block;
    padding-top: 35px;
  }
`
function Contact () {
  return(
  	<ContactSection>
  	  <ContentContainer>
        
        <Form action="https://formspree.io/info@heynova.io" method="post" name="contact-form" class="validate" target="_blank" novalidate>
          <h1>Like what you see? Let's chat.</h1>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <label htmlFor="cf-EMAIL">Email </label>
              <input type="email" name="EMAIL" required class="required email" id="cf-EMAIL"/>
            </div>
            <div class="mc-field-group">
              <label htmlFor="cf-MSG">Message</label>
              <textarea name="MSG" class="required msg" id="cf-MSG"></textarea>
            </div>
            <ActionContainer>
              <input type="submit" value="SEND MESSAGE" name="SUBMIT" id="cf-embedded-subscribe" class="btn-primary"/>
              <Span>or</Span>
              <A href="mailto:info@heynova.io">Book a call</A>
            </ActionContainer>
          </div>
        </Form>
  	  </ContentContainer>
  	</ContactSection>
  )
}
export default Contact