import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../components/services/hero"
import Ecommerce from "../../components/services/ecommerce"
import Businesses from "../../components/services/businesses"
import Components from "../../components/services/components"
import Projects from "../../components/services/projects"
import Contact from "../../components/homepage/contact"

export default () => (
  <Layout>
    <SEO
      title="Shopify Services"
      description="Shopify Services"
      keywords={[ `Web Design`, `Accessibility`, `Web Development`, `Victoria`, `Halifax`,`Toronto`, `Marketing`, `User Experience`, `Branding` ]}
      image="https://heynova.io/static/5a425dc5ea1fa50ee84c4e50acbbafc1/88523/group-20.webp"
    />
    <Hero/>
    <Ecommerce/>
    <Businesses/>
    <Components/>
    <Projects/>
    <Contact/>
  </Layout>
)
