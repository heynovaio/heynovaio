import React from "react"
import Layout from "../components/layout"
import { Hero, Values, Contact, Team } from "../components/about"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "@emotion/styled"

/**
 * @typedef {object} Val
 * @property {object} node
 * @property {string} node.id
 * @property {object} node.data
 * @property {string} node.data.text
 * @property {string} node.data.value
 */

/** @typedef {object} Value
 * @property {Val[]} edges
 */

/**
 * @typedef {object} ContentDetail
 * @property {object} node
 * @property {object} node.data
 * @property {string} node.data.paragraph
 * @property {string} node.data.context
 */

/** @typedef {object} Content
 * @property {ContentDetail[]} edges
 */

/** @typedef {object} TeamInfo
 * @property {object} node
 * @property {string} node.id
 * @property {object} node.data
 * @property {string} node.data.bio
 * @property {string} node.data.email
 * @property {number} node.data.id
 * @property {object[]} node.data.images
 * @property {string} node.data.images.url
 * @property {string} node.data.location
 * @property {string} node.data.name
 * @property {string} node.data.title
 */

/** @typedef {object} Team
 * @property {object[]} edges
 * @property {object} edges.node
 * @property {string} edges.node.id
 * @property {object} edges.node.data
 * @property {string} edges.node.data.bio
 * @property {string} edges.node.data.email
 * @property {number} edges.node.data.id
 * @property {object[]} edges.node.data.images
 * @property {string} edges.node.data.location
 * @property {string} edges.node.data.name
 * @property {string} edges.node.data.title
 */

/** @typedef AirtableQuery
 * @property {object} data
 * @property {Content} data.content
 * @property {Team} data.team
 * @property {Value} data.values
 * */

/**
 * @param {AirtableQuery} props
 */
export default function About({ data: { content, team, values } }) {
  const contextMap = getContentIndex(content.edges)
  const ctx = content.edges
  const heroContent = ctx[contextMap["hero"]].node.data.paragraph
  const teamContent = ctx[contextMap["team"]].node.data.paragraph

  return (
    <>
      <Layout style="background: green;">
        <SEO
          title="About us"
          description="Learn more about the team behind Hey Nova."
          keywords={[
            `Web Design`,
            `Accessibility`,
            `Web Development`,
            `Victoria`,
            `Halifax`,
            `Toronto`,
            `Marketing`,
            `User Experience`,
            `Branding`,
          ]}
        />
        <Background>
          <Hero content={heroContent} />
          <Team team={team.edges} content={teamContent} />
          <Values values={values.edges} />
          <Contact />
        </Background>
      </Layout>
    </>
  )
}

/**
 * @param {ContentDetail[]} t
 * @returns {{[key: string]: number}} index: map { context: index }
 */
function getContentIndex(t) {
  const buf = {}

  t.forEach(({ node }, idx) => {
    const { context } = node.data
    buf[context] = idx
  })

  return buf
}

export const Background = styled.div`
  background: radial-gradient(
    751.95% 45.58% at 89.31% 52.02%,
    #63b2b9 0.96%,
    #c8f2f5 25.5%,
    rgba(150, 224, 229, 0.382722) 46.5%,
    #97e1e6 78%,
    rgba(151, 225, 230, 0.37) 100%
  );
  opacity: 0.9;
  background-repeat: no-repeat;
  background-size: cover;
`

export const pageQuery = graphql`
  query AboutPageQuery {
    values: allAirtable(filter: { table: { eq: "aboutPageValues" } }) {
      edges {
        node {
          id
          data {
            text
            value
          }
        }
      }
    }

    content: allAirtable(filter: { table: { eq: "aboutPageContent" } }) {
      edges {
        node {
          data {
            paragraph
            context
          }
        }
      }
    }

    team: allAirtable(filter: { table: { eq: "aboutPage" } }) {
      edges {
        node {
          id
          data {
            bio
            email
            id
            images {
              localFiles {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            location
            name
            title
          }
        }
      }
    }
  }
`
