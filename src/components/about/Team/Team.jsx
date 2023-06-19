import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { teamMembers } from "../content"
import shortid from "shortid"
import Line from "../assets/line"
import SpaceShip from "../assets/spaceship.svg"
import HorizontalLine from "../assets/horizontal-line.svg"
import { TeamCard } from "./TeamCard"
import { table, PAGES } from "../../../lib/airtable"
import { planets } from "../content"
import { graphql, useStaticQuery } from "gatsby"

export function Team() {
  // const data = useFetch()
  const { data } = useQueries()
  /* graphql overall shape
   {
  "data": {
    "allAirtable": {
      "edges": [
        {
          "node": {
            "id": "ce60acbc-a5fa-519e-9e98-b2d6193d93b7",
            "data": {
              "bio": "Kathryn started her career as a graphic designer and transitioned to development 15 years ago, and uses her design background to enhance her development work whenever she can! She lives in Victoria, BC with her husband and 2 cats, and loves birding, being outside, and is an avid bike rider and an enthusiastic advocate for accessible transportation infrastructure.",
              "email": "kathryn@heynova.io",
              "location": "Victoria, B.C., Canada",
              "name": "Kathryn Lancashire",
              "title": "Foo",
              "images": [
                {
                  "url": "https://v5.airtableusercontent.com/v1/18/18/1687226400000/j8S2Sw92PeKAZiAuuavFNA/a5iy3hgvfKCGDEDlVV8sucTgQwROP_srg4mxqHgO9lBAO5rQCQF_IsEGEsti6w6bw5bsmuSzJxbuRiUOZgdF6RaAVga48GVRRMoSOJ0N-kA/RJgOcLdFBtlZoV9qGdbToqWa8DslPuGeCSJ8k2GV7BE"
                }
              ],
              "id": 7
            }
          }
        },
        {
          "node": {
            "id": "e674e830-92b0-57eb-9414-f22291993705",
            "data": {
              "bio": "Dina loves bringing clients’ visions to life, and enjoys the challenge of a new project that brings problems to work on and puzzles to solve!\n\nShe lives in Victoria, BC and enjoys exploring the outdoors in all seasons through sailing, hiking, skiing and biking. She also co-created a math and art class at WWU to help make both subjects more tangible and accessible.",
              "email": "dina@heynova.io",
              "location": "Victoria, B.C., Canada",
              "name": "Dina Buric",
              "title": "Foo",
              "images": [
                {
                  "url": "https://v5.airtableusercontent.com/v1/18/18/1687226400000/Wl3pEw2rygtPGRCNUOFE_g/AZR7JkqaQLTF1gTh4uZSldGJaQka4XcOC3C7Xt0dTy5a3simUGeM2a8ch_XxZafnwaAyaRHGgzlJUQEysPPpkWWjSvXeRhWuAz0Y0skoeQw/HBoHXnp9Ktor22Heq2ab2DvRWJtDBdLIHeqo5uB1wzI"
                }
              ],
              "id": 9
            }
          }
        }
      ]
    }
  },
  "extensions": {}
}*/
  useEffect(() => console.log(buf), [buf])
  // {data?.map(({ id, name, bio, location, email, image }) => {
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
          {data.length > 0 &&
            data?.map((mem, idx) => {
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

/** @typedef {object} AirtableAboutPage
 * @property {object} data
 * @property {object} data.allAirtable
 * @property {object[]} data.allAirtable.edges
 * @property {object} data.allAirtable.edges.node
 * @property {string} data.allAirtable.edges.node.id
 * @property {object} data.allAirtable.edges.node.data
 * @property {string} data.allAirtable.edges.node.data.bio
 * @property {string} data.allAirtable.edges.node.data.email
 * @property {number} data.allAirtable.edges.node.data.id
 * @property {object[]} data.allAirtable.edges.node.data.images
 * @property {string} data.allAirtable.edges.node.data.images.url
 * @property {string} data.allAirtable.edges.node.data.location
 * @property {string} data.allAirtable.edges.node.data.name
 * @property {string} data.allAirtable.edges.node.data.title
 *
 * @returns {AirtableAboutPage} data
 */
function useQueries() {
  return useStaticQuery(graphql`
    query AboutPageQuery {
      allAirtable {
        edges {
          node {
            id
            data {
              bio
              email
              id
              images {
                url
              }
              location
              name
              title
            }
          }
        }
      }
    }
  `)
}

function useFetch() {
  const [data, setData] = useState([])
  const team = []
  useEffect(() => {
    table(PAGES.about)
      .select({
        fields: ["id", "name", "title", "bio", "location", "images", "email"],
        sort: [{ field: "id", direction: "asc" }],
      })
      .eachPage((records, fetchNext) => {
        records.forEach(record => {
          const {
            name,
            bio,
            location,
            title,
            id,
            email,
            images,
          } = record.fields
          // NOTE: accessing image url with console.log(images[0]?.url)
          const teamMem = {
            name,
            bio,
            location,
            title,
            id,
            email,
            image: images[0]?.url || "",
          }
          team.push(teamMem) // so we don't rerender everytime
        })
      })

    setData(() => team)
  }, [])

  useEffect(() => console.log(data.length), [data])

  return data
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
