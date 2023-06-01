import React from "react"
import styled from "@emotion/styled"
import { teamMembers } from "../content"
import shortid from "shortid"
import Line from "../assets/line"
import SpaceShip from "../assets/spaceship.svg"
import { TeamCard } from "./TeamCard"

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

      <TeamContainer>
        <SvgContainer>
          <img
            src={SpaceShip}
            className="center spaceship"
            alt=""
            role="presentation"
          />
          <Line className="line center" alt="" role="presentation" />
        </SvgContainer>

        <TeamSection>
          {teamMembers.map((mem, idx) => (
            <li key={shortid.generate()} className={`mem-${idx}`}>
              <TeamCard {...mem} />
            </li>
          ))}
        </TeamSection>
      </TeamContainer>
    </Section>
  )
}

const TeamContainer = styled.div`
  position: relative;
`

const SvgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  .center {
    position: absolute;
    top: 0;
    left: 50%;
  }
  .spaceship {
    transform: translate(-1.8rem, -7rem);
    scale: 0.8;
  }
  .line {
    svg,
    line {
      height: 100%;
    }
  }
`

const TeamSection = styled.div`
  margin: 0;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 8rem;
  width: 100%;
  img.planet,
  .horizontal-line {
    display: none;
  }
  @media only screen and (min-width: 1000px) {
    row-gap: 5rem;
    width: 1000px;
    grid-template-columns: repeat(2, 1fr);

    img.planet,
    .horizontal-line {
      display: block;
    }
    .horizontal-line {
      position: absolute;
      top: 2rem;
      width: 50%;
      z-index: -1;
    }
    img.planet {
      position: absolute;
      top: 1.4rem;
      right: 0;
      scale: 0.8;
    }
    li:nth-child(odd) {
      transform: translateY(11rem);
      .horizontal-line {
        right: 0;
        transform: translateX(4.8rem);
      }
      img.planet {
        right: -9.5rem;
        transform: translate(0rem, -50%);
      }
    }
    li:nth-child(even) {
      .horizontal-line {
        left: 0;
        transform: translateX(-4.8rem);
      }
      img.planet {
        left: -9.9rem;
        transform: translate(0rem, -50%);
      }
    }
    li:nth-child(1) img.planet {
      transform: translate(-1.7rem, -0.6rem);
    }
    li:nth-child(2) img.planet {
      transform: translate(3rem, -1rem);
    }
    li:nth-child(4) img.planet {
      transform: translate(-3.5rem, -50%);
    }
    li:nth-child(9) img.planet {
      transform: translate(-0.8rem, -0.8rem);
    }
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 9rem;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 8rem;
  margin-bottom: 10rem;
  li {
    list-style: none;
  }
`
