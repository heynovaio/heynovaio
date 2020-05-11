import React from "react"
import Layout from "../components/layout"

import Hero from "../components/homepage/hero"
import How from "../components/homepage/how"
import Who from "../components/homepage/who"
import What from "../components/homepage/what"
import Usability from "../components/homepage/usability"
import Inclusive from "../components/homepage/inclusive"
import Testimonial from "../components/homepage/testimonial"
import About from "../components/homepage/about"
import Contact from "../components/homepage/contact"

export default () => (
  <Layout>
    <Hero/>
    <Who/>
    <What/>
    <How/>
    <Usability/>
    <Inclusive/>
    <Testimonial/>
    <About/>
    <Contact/>
  </Layout>
)
