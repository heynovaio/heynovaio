import styled from '@emotion/styled'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = styled.section`
  padding: 30px 20px 15px;
  background-color: #051628;
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
      color: #d5330d;
    }
  }
`
const P = styled.p`
  font-size: 20px;
  line-height: 1.28;
  letter-spacing: -1px;
  font-family: Stolzl;
  text-align: center;
  color: #2BC8D7;
`
const Span = styled.span`
  color: #d5330d;
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
      <Icon target="blank" href="https://www.linkedin.com/in/kirsten-dodd-heynova/">
         <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon target="blank" href="https://www.facebook.com/heynovaio/">
         <FontAwesomeIcon icon={faFacebook} />
      </Icon>
      <Icon target="blank" href="https://www.instagram.com/heynovaio/">
         <FontAwesomeIcon icon={faInstagram} />
      </Icon>
    </Flex>
    <P> &copy; 2020 <Span>HEY NOVA</Span></P>
  </Footer>
)
