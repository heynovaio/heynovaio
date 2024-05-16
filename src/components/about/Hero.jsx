import React from "react"
import styled from "@emotion/styled"
import HeroGraphic from "../ourWork/assets/heroX2.png"
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
  max-width: 1400px;
  p {
    overflow-wrap: break-word;
    max-width: 50ch;
    color: #000000;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7;
    margin-top: 15px;
    font-size: 18px;
    
  }
  @media (min-width: 1100px) {
    margin: 0;
  }
  @media (min-width: 1400px) {
    transform: none;
  }
`

export const HeroHeading = styled.h1`
  font-size: 55px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 1rem;
  @media only screen and (min-width: 900px) {
    font-size: 90px;
  }
  color: #0F002E;
`

const Section = styled.section`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  color: white;
  position: relative;
  isolation: isolate;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 704px;
  @media (min-width: 1100px) {
    color: #0b2642;
  }
`
