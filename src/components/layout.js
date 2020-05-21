/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import styled from '@emotion/styled'
import SEO from "./seo"
import "./layout.css"

const Main = styled.main`
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <>
      <SEO
        title="Hey Nova | Branding, Designing, Developing"
        description="Evolving the way companies communicate to their audience by creating cohesive brands, user-centred design, and inclusive code."
        keywords={[ `Web Design`, `Web Development`, `Victoria`, `British Columbia`, `Marketing`, `User Experience`, `Branding` ]}
      />
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
