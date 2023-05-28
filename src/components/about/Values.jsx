import React from "react"
import UpperMoon from "./assets/upper-moon.svg"
import LowerMoon from "./assets/lower-moon.svg"
import styled from "@emotion/styled"
import { values } from "./content"
import shortid from "shortid"

export function Values() {
  return (
    <Div>
      <img src={UpperMoon} alt="upper moon" />

      <Container>
        <Section>
          <h2>Our Core Values</h2>

          <Ul>
            {values.map(value => (
              <li key={shortid.generate()}>
                <ValueCard {...value} />
              </li>
            ))}
          </Ul>
        </Section>
      </Container>

      <img src={LowerMoon} alt="lower moon" style={{ marginTop: "-3px" }} />
    </Div>
  )
}

const Container = styled.div`
  background-color: #0c556b;
`

const Section = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-family: Stolzl;
    font-size: 40px;
    font-weight: 500;
    line-height: 64px;
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
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0 45px;
  }
`
const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: stretch;
  grid-gap: 2rem;
  li {
    width: 305px;
  }
  @media (min-width: 850px) and (max-width: 1399px) {
    grid-template-columns: repeat(2, 1fr);
    & > li:nth-child(odd) {
      justify-self: end;
    }
    & > li:nth-child(even) {
      justify-self: start;
    }
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

function ValueCard({ icon, title, content }) {
  return (
    <Card>
      <img src={icon} role="img" />

      <h3>{title}</h3>

      <p>{content}</p>
    </Card>
  )
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 5px;
  gap: 10px;
  background-color: #0a2239;
  border-radius: 8px;
  color: #ffffff;
  width: 100%;
  height: 100%;
  h3 {
    font-family: "Stolzl";
    font-size: 20px;
  }
  p {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    width: 27ch;
    padding: 0 10px;
  }
`
