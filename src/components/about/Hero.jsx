import React from "react"
import styled from "@emotion/styled"
import HeroPlanets from "./assets/hero.svg"
import { Button } from "./Button"

/**
 * @param {object} props
 * @param {string} props.content
 */
export function Hero({ content }) {
  return (
    <Section>
      <HeroContent>
        <h1>About Us</h1>
        <p>{content}</p>

        <Button>Contact Us</Button>
      </HeroContent>

      <img alt="" src={HeroPlanets} role="presentation" />
    </Section>
  )
}

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  h1 {
    color: #0fa3b1;
    font-family: "Stolzl";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 94px;
    background: linear-gradient(91.86deg, #0fa3b1 5.53%, #0d1f31 102.96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
  img {
    display: none;
  }
  @media (min-width: 1100px) {
    background-color: white;
    color: #0b2642;

    img {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 650px;
      height: auto;
    }
  }
`
