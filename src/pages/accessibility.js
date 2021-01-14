import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/accessibility/hero'
import Why from '../components/accessibility/why'
import Feature from '../components/accessibility/feature'
import Service from '../components/accessibility/service'
import Testimonial from '../components/accessibility/testimonial'

export default () => (
  <Layout>
    <SEO
        title="Accessibility Training Services | Hey Nova"
        description="Bake accessibility into your tech team's process so you can not only create products that are useable to a wider audience but also comply with WCAG 2.1 guidelines."
        keywords={[ `Accessibility`, `Web Design`, `Web Development`, `Canada`, `British Columbia`,`Ontario`, `Nova Scotia`, `Alberta`, `Marketing`, `User Experience`, `Branding` ]}
        image="https://heynova.io/static/laptop-planets-cc259abd5061e4d434e01ab4ce745fb1.svg"
    />
    <Hero/>
    <Service/>
    <Feature/>
    <Why/>
    <Testimonial/>
  </Layout>
)
