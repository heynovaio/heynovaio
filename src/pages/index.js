import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/homepage/hero"
import How from "../components/homepage/how"
import Who from "../components/homepage/who"
import Inclusive from "../components/homepage/inclusive"
export default () => (
  <Layout>
    <Header/>
    <Hero/>
    <Who/>
    <How/>
    <Inclusive/>
  </Layout>
)
