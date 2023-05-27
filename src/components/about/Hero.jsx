import React from "react"
import s from "@emotion/styled"
import HeroPlanets from "./assets/hero-planets.png"

export function Hero() {
  return (
    <Section>
      <HeroContent>
        <h1>About Us</h1>
        <p>
          Amet maxime id possimus earum repellendus! Explicabo nobis autem cum
          adipisci velit.
        </p>

        <button>Contact Us</button>
      </HeroContent>

      <img alt="planets" src={HeroPlanets} />
    </Section>
  )
}

const HeroContent = s.div`
display: flex;
flex-direction: column;
justify-contents: center;
align-items: center;
width: 100%;
margin: 0 auto;

h1 {
  color: #0FA3B1;
  font-family: 'Stolzl';
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 94px;
}
p {
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  font-family: 'Ubuntu';
  color: inherit;
  font-style: normal;
  max-width: 40ch;
}
button {
  padding: 17px 39px;
  background-color: #D5330D;
  color: white;
  font-family: 'Stolzl';
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 200ms;
}

@media (min-width: 1100px) {
  margin: 0;
  width: max(50vw, calc(100vw - 700px));
}
`

const Section = s.section`
width: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
background-color: #0D1F31;
text-align: center;
color: white;
position: relative;
isolation: isolate;
padding: 209px 20px;
img {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 650px;
  height: auto;
}
@media (min-width: 1100px) {
  background-color: white;
  color: #0B2642;
  img {
    display: block;
  }
}
`
