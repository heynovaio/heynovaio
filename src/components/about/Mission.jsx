import React from "react"
import styled from "@emotion/styled"

/**
 * @param {object} props
 * @param {string} props.content
 * @param {string} props.header
 */
export function Mission({ content, header }) {
  return (
    <Section>
      <h2>{header} -</h2>
      <p>{content}</p>
    </Section>
  )
}

const Section = styled.section`
  max-width: 35ch;
  margin: 70px auto;
  color: #0b2642;
  h2 {
    font-family: "Stolzl";
    font-weight: 400;
    font-size: 30px;
    line-height: 150%;
    letter-spacing: -0.8px;
  }
  p {
    font-family: Ubuntu;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: left;
  }
  @media (min-width: 700px) {
    max-width: 55ch;
  }
  @media (min-width: 1100px) {
    margin: 0;
    margin-left: 143px;
  }
`
