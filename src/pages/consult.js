import React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"

import Hero from '../components/consult/hero'
import Why from '../components/consult/why'
import Feature from '../components/consult/feature'
import Service from '../components/consult/service'
import Build from '../components/consult/build'


export default () => (
  <Layout>
    <Hero/>
    <Why/>
    <Feature/>
    <Service/>
    <Build/>
  </Layout>
)
