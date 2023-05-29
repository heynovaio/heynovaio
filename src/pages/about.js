import React from "react"
import Layout from "../components/layout"
import { Hero, Mission, Values, Contact, Team } from "../components/about"

export default function About() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Team />
      <Values />
      <Contact />
    </Layout>
  )
}
