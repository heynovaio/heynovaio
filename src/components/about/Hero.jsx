import React from "react"
import styled from "@emotion/styled"
import HeroGraphic from "./assets/hero.svg"
import HeroMoonGraphic from "./assets/moon.svg"
import HeroStarDust from "./assets/star-dust.svg"
import { Button } from "../shared/Button"

/**
 * @param {object} props
 * @param {string} props.content
 */
export function Hero({ content }) {
  function handleClick() {
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Section>
      <HeroContent>
        <HeroHeading>About Us</HeroHeading>
        <p>{content}</p>

        <Button onClick={handleClick}>Contact Us</Button>
      </HeroContent>

      <MobileGraphic>
        <HeroMoon>
          <img alt="" src={HeroMoonGraphic} role="presentation" />
          <div className="drop-shadow" />
        </HeroMoon>
        <StarDust alt="" src={HeroStarDust} role="presentation" />
      </MobileGraphic>

      <HeroImage alt="" src={HeroGraphic} role="presentation" />
    </Section>
  )
}

const MobileGraphic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const StarDust = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
`

const HeroMoon = styled.div`
  position: absolute;
  bottom: -150px;
  right: 0;
  img {
    padding: 0;
    margin: 0;
  }
`

const HeroImage = styled.img`
  display: none;
  position: absolute;
  top: -5px;
  right: 0;
  width: 650px;
  height: auto;

  @media (min-width: 1100px) {
    display: block;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  width: 100%;

  padding: 0 20px;
  max-width: 500px;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    font-family: "Ubuntu";
    color: inherit;
    font-style: normal;
    margin-bottom: 1rem;
    
  }
  @media (min-width: 1100px) {
    margin: 0;
    width: max(50vw, calc(100vw - 700px));
    transform: translateX(-300px);
  }
  @media (min-width: 1400px) {
    transform: none;
  }
`

const HeroHeading = styled.h1`
  color: #0fa3b1;
  font-family: "Stolzl";
  font-style: normal;
  font-weight: 500;
  font-size: 62px;
  line-height: 94px;
  z-index: 999;
  background: linear-gradient(to right, #0fa3b1, #ffffff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media only screen and (min-width: 400px) {
    font-size: 72px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 72px;
    background: linear-gradient(91.86deg, #0fa3b1 5.53%, #0d1f31 102.96%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

const Section = styled.section`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0d1f31;
  text-align: left;
  color: white;
  position: relative;
  isolation: isolate;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 704px;
  @media (min-width: 1100px) {
    background-color: white;
    color: #0b2642;
  }
`
