import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'

import img1 from '../images/logo-2-x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  img {
    max-width: 56px;
    margin-top:17px;
    margin-left: 15px;
    position: absolute;
    left: 0;
  }
`
const LinkContainer = styled.div`
  display: flex;
  margin-right: 70px;
  a {
    padding: 23px 12px 20px;
    font-size: 20px;
    font-family: Stolzl;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    letter-spacing: 0.025em;
    &:hover {
      color: #ca1f0e;
    }
  }
`
const FaceBookLink = styled.a`
  color: #d5330d;
`
const InstagramLink = styled.a`
  color: #d5330d;
  margin-right: 20px;
`
const LinkedInLink = styled.a`
  color: #d5330d;
`
const showDrop = () => {
  document.getElementById("drop").classList.toggle("open");
  document.getElementById("burger").classList.toggle("open");
}
const Hamburger = () => (
  <HamburgerStyle id="burger" onClick={showDrop}>
    <div/><div/><div/>
  </HamburgerStyle>
)

const HamburgerStyle = styled.div`
  width: 45px;
  height: 32px;
  position: fixed;
  z-index: 4;
  cursor: pointer;
  right: 20px;
  top: 20px;
  div {
    position: absolute;
    background-color: #d5330d;
  }
  div:first-of-type {
    width: 38px;
    height: 4px;
    top: 0;
  }
  div:nth-of-type(2) {
    width: 38px;
    height: 4px;
    top: 12px;
  }
  div:last-of-type {
    width: 38px;
    height: 4px;
    top: 24px;
  }
  &.open {
    div {
      background: #fff;
    }
  }
`

const Menu = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 0;
  text-align: center;
  background: #0fa3b1;
  z-index: 3;
  opacity: 0;
  transition: .25s all;
  visibility: hidden;
  &.open {
    display: block;
    height: 100vh;
    opacity: 1;
    padding-top: 200px;
    visibility: visible;
  }
  a {
    text-decoration: none;
    padding: 10px 10px 10px;
    font-size: 94px;
    display: block;
    line-height: 1;
    color: #0fa3b1;
    -webkit-text-stroke: 3px #0a2239;
    font-weight: 700;
    line-height: 1.04;
    font-family: Stolzl;
    position: relative;
    transition: all .5s;
    @media (max-width: 960px) {
      font-size: 64px;
      -webkit-text-stroke: 2px #0a2239;
    }
    @media (max-width: 780px) {
      font-size: 50px;
      -webkit-text-stroke: 2px #0a2239;
    }
    &:hover {
      background-image: -webkit-linear-gradient(#0a2239 0,#0fa3b1 76%);
      background-size: 100% 60px;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }
`

export default () => (
  <Header>
    <img role="presentation" alt="Hey Nova Logo" src={img1}/>
    <LinkContainer>
      <LinkedInLink target="blank" href="https://www.linkedin.com/in/kirsten-dodd-heynova/">
         <FontAwesomeIcon icon={faLinkedinIn} />
      </LinkedInLink>
      <FaceBookLink target="blank" href="https://www.facebook.com/heynovaio/">
         <FontAwesomeIcon icon={faFacebook} />
      </FaceBookLink>
      <InstagramLink target="blank" href="https://www.instagram.com/heynovaio/">
         <FontAwesomeIcon icon={faInstagram} />
      </InstagramLink>
    </LinkContainer>
    <Hamburger/>
    <Menu id="drop">{/*whole drop down*/}
      <div>
        <div><Link onClick={showDrop} to="/">Home</Link></div>
        <div><Link onClick={showDrop} to="/work/">Our Work</Link></div>
        <div><a onClick={showDrop} href="#footer">Get in Touch</a></div>
      </div>
    </Menu>
  </Header>
)
