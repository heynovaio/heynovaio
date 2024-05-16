import React from "react"
import UpperMoon from "./assets/upper-moon.svg"
import LowerMoon from "./assets/lower-moon.svg"
import styled from "@emotion/styled"
import { values as content } from "./content"

/**
 * @param {object} props
 * @param {import("../../pages/about").Val[]} props.values
 */
export function Values({ values: v }) {
  const values = v.map(({ node }) => ({
    id: node.id,
    icon: content[node.data.value],
    title: node.data.value,
    content: node.data.text,
  }))

  return (
    <Div>
      <img src={UpperMoon} alt="" role="presentation" />

      <Container>
        <Section>
          <h2>Our Core Values</h2>

          <Ul>
            {values.map(value => {
              const { id, ...rest } = value
              return (
                <li key={id}>
                  <ValueCard {...rest} />
                </li>
              )
            })}
          </Ul>
        </Section>
      </Container>

      <img
        src={LowerMoon}
        alt=""
        role="presentation"
        style={{ marginTop: "-3px" }}
      />
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
    margin-bottom: 2.5rem;
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
    & > li:nth-of-type(odd) {
      justify-self: end;
    }
    & > li:nth-of-type(even) {
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
      <img src={icon} role="presentation" alt="" />

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
  background-color: var(--HN-Indigo);
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
  img {
    height: 40px;
    aspect-ratio: auto;
    @media only screen and (min-width: 800px) {
      height: 45px;
    }
  }
`
