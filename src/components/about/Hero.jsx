import React from "react"
import styled from "@emotion/styled"
import HeroPlanets from "./assets/hero.svg"
import { Button } from "./Button"

export function Hero() {
  return (
    <Section>
      <HeroContent>
        <HeroHeading>About Us</HeroHeading>
        <p>
          Amet maxime id possimus earum repellendus! Explicabo nobis autem cum
          adipisci velit.
        </p>

        <Button>Contact Us</Button>
      </HeroContent>

      <HeroImage alt="" src={HeroPlanets} role="presentation" />
    </Section>
  )
}

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
  justify-contents: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    font-family: "Ubuntu";
    color: inherit;
    font-style: normal;
    max-width: 40ch;
  }
  @media (min-width: 1100px) {
    margin: 0;
    width: max(50vw, calc(100vw - 700px));
  }
`

const HeroHeading = styled.h1`
  color: #0fa3b1;
  font-family: "Stolzl";
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 94px;

  @media only screen and (min-width: 1000px) {
    font-size: 72px;
    background: linear-gradient(91.86deg, #0fa3b1 5.53%, #0d1f31 102.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Section = styled.section`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0d1f31;
  text-align: center;
  color: white;
  position: relative;
  isolation: isolate;
  padding: 180px 20px;
  @media (min-width: 1100px) {
    background-color: white;
    color: #0b2642;
  }
`
