import React from "react"
import UpperMoon from "./assets/upper-moon.svg"
import LowerMoon from "./assets/lower-moon.svg"
import styled from "@emotion/styled"

export function Values() {
  return (
    <Div>
      <img src={UpperMoon} alt="upper moon" />

      <Section>
        <h2>Our Core Values</h2>
      </Section>

      <img src={LowerMoon} alt="lower moon" />
    </Div>
  )
}

function TeamCard({ icon, title, content }) {}

const Section = styled.div`
  background-color: #0c556b;
  h2 {
    text-align: center;
    font-family: Stolzl;
    font-size: 40px;
    font-weight: 500;
    line-height: 64px;
    letter-spacing: -0.800000011920929px;
    text-align: center;
    color: #ffffff;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin: 0;
  }
`
