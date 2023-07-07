import styled from "@emotion/styled"
import BgMobile from "../assets/bgmobile.svg"
import BgDesktop from "../assets/bgdesktop.svg"

export * from "./Hero"

export const Container = styled.div`
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 900px) {
    background-image: url(${BgDesktop});
  }
`

export const Center = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 900px) {
    padding: 0 80px;
    max-width: 1400px;
    margin: 0 auto;
  }
`

export const Button = styled.button`
  border-radius: 40px;
  background: #d5330d;
  padding: 13px 20px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border: none;
`

export const Contact = styled.section`
  background-color: #051628;
  color: #fff;
  font-family: Stolzl;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  padding: 45px 30px;
`

export const ContactForm = styled.form``

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 665px;
  margin: 0 auto;
`

export const ContactFormLabel = styled.label`
  margin: 24px 0px 16px 10px;
  font-family: Stolzl;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
`

export const ContactFormInput = styled.input`
  width: 100%;
  max-width: 665px;
  padding: 20px 10px;
`

export const ContactFormTextArea = styled.textarea`
  width: 100%;
  max-width: 665px;
  height: 138px;
`

export const ContactFormSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 45px auto 0;
  gap: 20px;

  a {
    text-decoration: underline;
    text-transform: uppercase;
    padding: 13px 20px;
    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 900px) {
    flex-direction: row;
    gap: 50px;
  }
`
