import React from "react"
import styled from "@emotion/styled"

export function Contact() {
  return (
    <Section>
      <h3>Connect with us</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" />

        <Div>
          <ButtonMain>Send Message</ButtonMain>
          <p>or</p>
          <ButtonSecondary>Book a call</ButtonSecondary>
        </Div>
      </form>
    </Section>
  )
}

const Div = styled.div`
  margin-top: 1.5rem;
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

const ButtonMain = styled.button`
  padding: 18px 37px;
  background-color: #d5330d;
  width: max-content;
  font-family: Stolzl;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  border: none;
  text-transform: uppercase;
`

const ButtonSecondary = styled.button`
  padding: 18px 37px;
  font-family: Stolzl;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  text-transform: uppercase;
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