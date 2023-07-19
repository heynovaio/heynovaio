import React, { useEffect, useRef, useState } from "react"
import styled from "@emotion/styled"
import shortid from "shortid"
import Line from "../assets/line"
import SpaceShip from "../assets/spaceship.svg"
import HorizontalLine from "../assets/horizontal-line.svg"
import { TeamCard } from "./TeamCard"
import { planets } from "../content"

/**
 * @param {object} props
 * @param {import("../../../pages/about").TeamInfo[]} props.team
 * @param {string} props.content
 * */
export function Team({ team, content }) {
  const teamMembers = team
    .filter(({ node }) => node.data.id !== null)
    .map(({ node }) => {
      const { images, ...rest } = node.data
      return { ...rest, image: images.localFiles[0].childImageSharp.fluid }
    })
    .sort((prev, next) => {
      return prev.name < next.name ? -1 : 1
    })

  const { ref, height } = useResponsiveHeight()

  return (
    <Section>
      <SectionHeader>
        <h2>Our Team</h2>
        <p>{content}</p>
      </SectionHeader>

      <TeamContainer>
        <SvgContainer>
          <img
            src={SpaceShip}
            className="center spaceship"
            alt=""
            role="presentation"
          />
          <Line
            className="line center"
            alt=""
            role="presentation"
            height={height}
          />
        </SvgContainer>

        <TeamSection ref={ref}>
          {teamMembers.map((mem, idx) => {
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
                  src={planets[idx % planets.length]}
                  className="planet"
                  role="presentation"
                  alt=""
                  loading="lazy"
                />
                <TeamCard {...mem} />
              </li>
            )
          })}
        </TeamSection>
      </TeamContainer>
    </Section>
  )
}

// HOOKS
/**
 * @typedef {object} Prop
 * @property {number} height
 * @property {React.MutableRefObject<null | HTMLElement>} prop.ref
 * @returns {Prop} prop
 * */
function useResponsiveHeight() {
  const ref = useRef()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(() => ref?.current?.clientHeight)
  }, [ref])

  return { ref, height }
}

// COMPONENTS
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

const TeamSection = styled.ul`
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
    li:nth-of-type(1) img.planet {
      transform: translate(35px, -40px);
    }
    li:nth-of-type(2) img.planet {
      transform: translate(53px, -35px);
    }
    li:nth-of-type(3) img.planet {
      transform: translate(17px, 5px);
    }
    li:nth-of-type(4) img.planet {
      transform: translate(-110px, 40px);
      scale: 0.5;
    }
    li:nth-of-type(5) img.planet {
      transform: translate(-7px, 20px);
    }
    li:nth-of-type(6) img.planet {
      transform: translate(-4px, 20px);
    }
    li:nth-of-type(7) img.planet {
      transform: translate(-1px, 15px);
    }
    li:nth-of-type(8) img.planet {
      transform: translate(-18px, 0px);
    }
    li:nth-of-type(9) img.planet {
      transform: translate(18px, -25px);
    }
    li:nth-of-type(10) img.planet {
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
    li:nth-of-type(odd) {
      margin-top: calc(50% - 50px);
      .horizontal-line {
        right: -69px;
      }
      .planet {
        left: 100%;
      }
    }
    li:nth-of-type(even) {
      .horizontal-line {
        left: -69px;
      }
      .planet {
        right: 100%;
      }
    }
    li:nth-of-type(1) .planet {
      transform: translate(65px, 50px);
    }
    li:nth-of-type(2) .planet {
      transform: translate(-75px, 43px);
    }
    li:nth-of-type(3) .planet {
      transform: translate(47px, 3px);
    }
    li:nth-of-type(4) .planet {
      transform: translate(55px, -50px);
    }
    li:nth-of-type(5) .planet {
      transform: translate(14px, -20px);
    }
    li:nth-of-type(6) .planet {
      transform: translate(-30px, -18px);
    }
    li:nth-of-type(7) .planet {
      transform: translate(20px, -15px);
    }
    li:nth-of-type(8) .planet {
      transform: translate(5px, -1px);
    }
    li:nth-of-type(9) .planet {
      transform: translate(45px, 45px);
    }
    li:nth-of-type(10) .planet {
      transform: translate(15px, -37px);
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
