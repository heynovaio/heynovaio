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
  z-index: 3;
  background: #051628;
  img {
    display: block;
  }
`
const ImgContainer = styled(Link)`
  max-width: 56px;
  padding-top: 14px;
  padding-left: 15px;
  position: absolute;
  left: 0;
  display: block;
`
const LinkContainer = styled.div`
  display: flex;
  margin-right: 56px;
  a {
    padding: 16px 12px 20px;
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
  <HamburgerStyle id="burger" onClick={showDrop} aria-label="Navigation Menu" aria-expanded="false">
    <div/><div/><div/>
  </HamburgerStyle>
)

const HamburgerStyle = styled.button`
  width: 68px;
  height: 58px;
  position: fixed;
  z-index: 4;
  cursor: pointer;
  right: 0px;
  top: 0px;
  padding: 15px;
  background: #041729;
  border: none;

  div {
    position: absolute;
    background-color: #d5330d;
  }
  div:first-of-type {
    width: 38px;
    height: 4px;
    top: 14px;
  }
  div:nth-of-type(2) {
    width: 38px;
    height: 4px;
    top: 26px;
  }
  div:last-of-type {
    width: 38px;
    height: 4px;
    top: 38px;
  }
  &.open {
    div {
      background: #fff;
    }
  }
`
const Nav = styled.nav `
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
  ul {
    padding-left: 0;
    margin-left: 0;
  }
  li {
    list-style: none;
  }
  &.open {
    display: block;
    height: 100vh;
    opacity: 1;
    padding-top: 200px;
    visibility: visible;
  }
`
const LinkContainerMenu = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
  a {
    padding: 23px 18px 20px;
    font-size: 80px;
    font-family: Stolzl;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    color: #0a2239;
    letter-spacing: 0.025em;
    &:hover {
      color: #fff;
    }
  }
`
export default () => (
  <Header>
    <ImgContainer to="/" title="Hey Nova Homepage">
      <img role="presentation" alt="Hey Nova Logo" src={img1}/>
    </ImgContainer>
    <LinkContainer tabindex="-1">
      <LinkedInLink aria-label="LinkedIn" tabindex="-1" target="_blank" href="https://www.linkedin.com/in/kirsten-dodd-heynova/">
         <FontAwesomeIcon icon={faLinkedinIn} />
      </LinkedInLink>
      <FaceBookLink aria-label="Facebook" tabindex="-1" target="_blank" href="https://www.facebook.com/heynovaio/">
         <FontAwesomeIcon icon={faFacebook} />
      </FaceBookLink>
      <InstagramLink aria-label="Instagram" tabindex="-1" target="_blank" href="https://www.instagram.com/heynovaio/">
         <FontAwesomeIcon icon={faInstagram} />
      </InstagramLink>
    </LinkContainer>
    <Nav role="navigation">
      <Hamburger/>
      <Menu id="drop">{/*whole drop down*/}
        <ul>
          <li><Link onClick={showDrop} to="/">Home</Link></li>
          <li><Link onClick={showDrop} to="/blog/">Blog</Link></li>
          <li><Link onClick={showDrop} to="/contact/">Get in Touch</Link></li>
        </ul>
        <LinkContainerMenu>
          <LinkedInLink aria-label="LinkedIn" target="blank" href="https://www.linkedin.com/in/kirsten-dodd-heynova/">
             <FontAwesomeIcon icon={faLinkedinIn} />
          </LinkedInLink>
          <FaceBookLink aria-label="facebook" target="blank" href="https://www.facebook.com/heynovaio/">
             <FontAwesomeIcon icon={faFacebook} />
          </FaceBookLink>
          <InstagramLink aria-label="Instagram" target="blank" href="https://www.instagram.com/heynovaio/">
             <FontAwesomeIcon icon={faInstagram} />
          </InstagramLink>
        </LinkContainerMenu>
      </Menu>
    </Nav>
  </Header>
)
