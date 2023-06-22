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
import styled from "@emotion/styled"
import "./layout.css"

const Main = styled.main`
  position: relative;
  font-family: "Ubuntu";
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main id="#main">{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
