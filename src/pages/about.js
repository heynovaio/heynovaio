import React from "react"
import Layout from "../components/layout"
import { Hero, Mission, Values, Contact, Team } from "../components/about"
import { graphql } from "gatsby"

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
 */

export default function About({ data }) {
  return (
    <>
      <Layout>
        <Hero />
        <Mission />
        <Team data={data} />
        <Values />
        <Contact />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
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
`
