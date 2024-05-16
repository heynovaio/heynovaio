import styled from "@emotion/styled"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = styled.footer`
  padding: 30px 20px 15px;
  background-color: var(--HN-Indigo);
  img {
    width: 100%;
    display: block;
  }
  a {
    font-family: Ubuntu;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    padding: 10px 10px;
    &:hover {
      color: var(--HN-Fuchsia);
    }
  }
`
const P = styled.p`
  font-size: 20px;
  line-height: 1.28;
  letter-spacing: -1px;
  font-family: Stolzl;
  text-align: center;
  color: #2bc8d7;
`
const Span = styled.span`
  color: #fff;
  font-weight: 400;
`
const Flex = styled.nav`
  display: flex;
  justify-content: center;
`
const Icon = styled.a`
  font-size: 70px;
  margin: 0 14px 30px;
  &:hover {
    color: #d5330d;
  }
`
export default () => (
  <Footer>
    <Flex>
      <Icon
        aria-label="LinkedIn"
        target="blank"
        href="https://www.linkedin.com/company/hey-nova/"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon
        aria-label="Facebook"
        target="blank"
        href="https://www.facebook.com/heynovaio/"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </Icon>
      <Icon
        aria-label="Instagram"
        target="blank"
        href="https://www.instagram.com/heynovaio/"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
    </Flex>
    <P>
      {" "}
      &copy; {new Date().getFullYear()} <Span>HEY NOVA</Span>
    </P>
  </Footer>
)
