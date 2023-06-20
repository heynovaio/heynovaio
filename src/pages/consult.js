import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/consult/hero"
import Why from "../components/consult/why"
import Feature from "../components/consult/feature"
import Service from "../components/consult/service"
import Build from "../components/consult/build"

export default () => (
  <Layout>
    <SEO
      title="Ecommerce Design and Consulting"
      description="Making your mark in today's most important industry by building superior, accessible shopping experiences"
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
      image="https://heynova.io/static/5a425dc5ea1fa50ee84c4e50acbbafc1/88523/group-20.webp"
    />
    <Hero />
    <Why />
    <Feature />
    <Service />
    <Build />
  </Layout>
)
