import styled from "@emotion/styled"
import BgMobile from "../assets/bgmobile.svg"
import BgDesktop from "../assets/bgdesktop.svg"
import { Link } from "gatsby"

export const HeroImage = styled.img`
  position: absolute;
  top: -6px;
  right: 0;
  max-width: 90vw;
  aspect-ratio: auto;
  max-height: 600px;
  z-index: -1;
  @media only screen and (max-width: 900px) {
    max-width: 50vw
  }
`

export const HeroContainer = styled.section`
  isolation: isolate;
  min-height: 500px;
  padding: 0 40px;
`

export const HeroContent = styled.div`
  padding-top: 230px;
  margin: 0 auto;

  button {
    margin-top: 30px;
  }

  @media only screen and (min-width: 900px) {
    padding-top: 150px;
  }
`

export const HeroHeading = styled.h1`
  font-size: 55px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 500;
  @media only screen and (min-width: 900px) {
    font-size: 90px;
  }
  background: -webkit-linear-gradient(#ffffff, #49e1ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #051627;
`

export const HeroText = styled.p`
  overflow-wrap: break-word;
  width: 30ch;
  color: #000000;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  margin-top: 15px;
  font-size: 18px;
`

export const Container = styled.div`
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(1.2);
  @media only screen and (min-width: 900px) {
    background-image: url(${BgDesktop});
    filter: brightness(1.2);
  }
`

export const Center = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 900px) {
    padding: 0 40px;
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
  transition: filter 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    filter: grayscale(0.2);
  }
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

export const ButtonLink = styled(Link)`
  border-radius: 3px;
  width: 197px;
  padding: 15px 0 18px;
  background-color: #d5330d;
  margin: 45px 0 0;
  display: block;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-align: center;
  color: #ffffff;
  font-family: Stolzl;
  text-decoration: none;
  &:hover {
    background: #ae2a09;
  }
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
  padding: 20px 10px;
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
