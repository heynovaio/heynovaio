import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/homepage/hero"
import How from "../components/homepage/how"
import Who from "../components/homepage/who"
import What from "../components/homepage/what"
import Usability from "../components/homepage/usability"
import Inclusive from "../components/homepage/inclusive"
import Testimonial from "../components/homepage/testimonial"
import About from "../components/homepage/about"
import Contact from "../components/homepage/contact"
import Subscribe from "../components/subscribe"

export default () => (
  <Layout>
     <SEO
        title="Designing Inclusive & Accessible Solutions"
        description="Evolving the way companies communicate to their inclusive audience by creating cohesive brands, user-centred design, and accessible code."
        keywords={[ `Web Design`, `Accessibility`, `Web Development`, `Victoria`, `Halifax`,`Toronto`, `Marketing`, `User Experience`, `Branding` ]}
        image="https://heynova.io/static/5a425dc5ea1fa50ee84c4e50acbbafc1/88523/group-20.webp"
    />
    <Hero/>
    <Who/>
    <What/>
    <How/>
    <Usability/>
    <Inclusive/>
    <Testimonial/>
    <About/>
    <Subscribe/>
    <Contact/>
  </Layout>
)
