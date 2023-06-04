import React from "react"
import styled from "@emotion/styled"
import { teamMembers } from "../content"
import shortid from "shortid"
import Line from "../assets/line"
import SpaceShip from "../assets/spaceship.svg"
import HorizontalLine from "../assets/horizontal-line.svg"
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
          {teamMembers.map(mem => {
            const { planet, ...rest } = mem
            return (
              <li key={shortid.generate()}>
                <img
                  src={HorizontalLine}
                  className="horizontal-line"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
                <img
                  src={planet}
                  className="planet"
                  role="presentation"
                  alt=""
                  loading="lazy"
                />
                <TeamCard {...rest} />
              </li>
            )
          })}
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
    transform: translate(-34px, -105px);
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
  .horizontal-line {
    display: none;
  }
  li {
    position: relative;
  }
  img.planet {
    margin: 0;
    padding: 0;
    scale: 0.7;
    position: absolute;
    transform-origin: center;
  }
  @media (max-width: 999px) {
    img.horizontal-line {
      display: none;
    }
    img.planet {
      left: 115px;
      bottom: -130px;
    }
    li:nth-child(1) img.planet {
      transform: translate(35px, -35px);
    }
    li:nth-child(2) img.planet {
      transform: translate(53px, -35px);
    }
    li:nth-child(3) img.planet {
      transform: translate(17px, 5px);
    }
    li:nth-child(4) img.planet {
      transform: translate(-110px, 40px);
      scale: 0.5;
    }
    li:nth-child(5) img.planet {
      transform: translate(-7px, 20px);
    }
    li:nth-child(6) img.planet {
      transform: translate(-4px, 20px);
    }
    li:nth-child(7) img.planet {
      transform: translate(-1px, 15px);
    }
    li:nth-child(8) img.planet {
      transform: translate(-18px, 0px);
    }
    li:nth-child(9) img.planet {
      transform: translate(18px, -25px);
    }
    li:nth-child(10) img.planet {
      transform: translate(-14px, 95px);
    }
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    .horizontal-line {
      display: block;
      width: 50%;
      position: absolute;
      top: 50px;
    }
    img.planet {
      top: 0;
      z-index: 999;
      scale: 0.6;
    }
    li:nth-child(odd) {
      margin-top: calc(50% - 50px);
      .horizontal-line {
        right: -69px;
      }
      .planet {
        left: 100%;
      }
    }
    li:nth-child(even) {
      .horizontal-line {
        left: -69px;
      }
      .planet {
        right: 100%;
      }
    }
    li:nth-child(1) .planet {
      transform: translate(60px, 50px);
    }
    li:nth-child(2) .planet {
      transform: translate(-75px, 45px);
    }
    li:nth-child(3) .planet {
      transform: translate(35px, 3px);
    }
    li:nth-child(4) .planet {
      transform: translate(65px, -50px);
    }
    li:nth-child(5) .planet {
      transform: translate(12px, -20px);
    }
    li:nth-child(6) .planet {
      transform: translate(-15px, -15px);
    }
    li:nth-child(7) .planet {
      transform: translate(18px, -15px);
    }
    li:nth-child(8) .planet {
      transform: translate(12px, -1px);
    }
    li:nth-child(9) .planet {
      transform: translate(37px, 45px);
    }
    li:nth-child(10) .planet {
      transform: translate(17px, -37px);
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
