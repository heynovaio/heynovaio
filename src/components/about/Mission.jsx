import React from "react"
import styled from "@emotion/styled"

export function Mission() {
  return (
    <Section>
      <h2>Sit quasi iure et ea velit. Velit similique nemo eveniet</h2>
      <p>
        Adipisicing quisquam magnam at totam deserunt dolor atque impedit? Quos
        aliquid doloremque perferendis eligendi quos Totam veniam harum beatae
        voluptates distinctio sequi Autem eum aut reiciendis itaque consequuntur
        rem? Ullam aliquam ipsam sequi aut voluptas?
      </p>
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
