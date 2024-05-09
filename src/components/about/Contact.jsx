import React from "react"
import styled from "@emotion/styled"
import { PopupText } from "react-calendly"

export function Contact() {
  return (
    <Section>
      <h3>Connect with us</h3>
      <form netlify name="contact" id="contact-form" action="/about">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />

        <Div>
          <ButtonSubmit type="submit">Send Message</ButtonSubmit>
          <p>or</p>

          <ButtonSecondary>
            <PopupText
              text="BOOK A CALL"
              url="https://calendly.com/hey-nova/free-consult"
            />
          </ButtonSecondary>
        </Div>
      </form>
    </Section>
  )
}

const Div = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    margin: 0;
    font-family: "Stolzl";
    font-weight: 700;
    font-size: 18px;
  }
  button {
    cursor: pointer;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
const ButtonSubmit = styled.button`
  padding: 18px 37px;
  background-color: var(--HN-Fuchsia);
  width: max-content;
  font-family: Stolzl;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 200ms;
  cursor: pointer;
  &:focus {
    outline: 4px solid hsla();
  }
  &:hover {
    filter: grayscale(20%);
  }
`
const ButtonSecondary = styled.div`
  padding: 1.1rem 1.5rem;
  font-family: Stolzl;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  & > a {
    padding: 18px 37px;
    background-color: var(--HN-Fuchsia);
    width: max-content;
    font-family: Stolzl;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    line-height: 22px;
    color: white;
    border: none;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 200ms;
    cursor: pointer;
    &:focus {
      outline: 4px solid hsla();
    }
    &:hover {
      filter: grayscale(25%);
    }
  }
`

const Section = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 700px) {
    margin-bottom: 5rem;
  }
  form {
    width: 100%;
    @media (min-width: 700px) {
      width: 665px;
      margin: 0 auto;
    }
  }
  h3 {
    color: var(--HN-Indigo);
    margin-top: 10rem;
    font-family: Stolzl;
    font-size: 40px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
  }
  label,
  input,
  textarea {
    color: var(--HN-Indigo);
    display: block;
    width: 100%;
    max-width: 665px;
  }
  label {
    margin-top: 34px;
    margin-bottom: 5px;
    font-family: Stolzl;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
  }
  input {
    height: 61px;
  }
  textarea {
    height: 138px;
  }
`
