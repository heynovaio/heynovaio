import React from "react"
import styled from "@emotion/styled"
import { teamMembers } from "./content"
import shortid from "shortid"
import Earth from "./assets/earth.svg"

export function Team() {
  return (
    <Section>
      <SectionHeader>
        <h2>Our Team</h2>
        <p>
          Lorem aliquam facilis quam nesciunt maxime. Doloremque modi incidunt
          iure dicta incidunt cumque? Ad dignissimos delectus totam dolorum
          deleniti? Sit consectetur iure omnis autem esse Cumque assumenda odit
          omnis voluptatibus!
        </p>
      </SectionHeader>

      <TeamSection>
        {teamMembers.map(mem => (
          <li key={shortid.generate()}>
            <TeamCard {...mem} />
          </li>
        ))}
      </TeamSection>
    </Section>
  )
}

const TeamSection = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 10rem;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    row-gap: 5rem;
    width: 1000px;
    grid-template-columns: repeat(2, 1fr);
    li:nth-child(odd) {
      transform: translateY(11rem);
    }
  }
`

const SectionHeader = styled.div`
  text-align: center;
  h2 {
    font-family: "Stolzl";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    letter-spacing: -0.8px;
    color: #0b2642;
  }
  p {
    max-width: 65ch;
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: center;
    color: #0b2642;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 8rem;
  li {
    list-style: none;
  }
`

function TeamCard({ img, name, title, desc, location }) {
  return (
    <Card>
      <img src={img} alt={name} />
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Location>
        <img src={Earth} />
        <p>{location}</p>
      </Location>
    </Card>
  )
}

const Card = styled.div`
  font-family: "Ubuntu";
  background-color: white;
  width: 100%;
  max-width: 351px;
  margin: 0;
  img {
    border-radius: 10px;
    margin-bottom: 10px;
  }
  h3,
  h4 {
    margin: 0; /* Reseting default margin */
  }
`

const Name = styled.h3`
  font-family: "Stolzl";
  font-style: normal;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.5px;
  color: #0a2239;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  color: #d5330d;
  margin: 1rem 0 !important;
`

const Desc = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: #0a2239;
  margin-bottom: 0.5rem;
`

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    margin: 0 !important;
  }
`
