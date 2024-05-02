import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

import img1 from "../images/HN-logo-fuchsia.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  img {
    display: block;
  }
`
const ImgContainer = styled(Link)`
  max-width: 111px;
  padding-top: 12px;
  padding-left: 14px;
  position: absolute;
  left: 0;
  display: block;
`
const LinkContainer = styled.div`
  display: flex;
  margin-right: 56px;
  background: var(--HN-Indigo);
  padding-left: 20px;
  a {
    padding: 14px 12px 18px;
    font-size: 20px;
    font-family: Stolzl;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.025em;
    &:hover {
      color: #fff;
    }
  }
  @media (max-width: 780px) {
    display: none;
  }
`
const FaceBookLink = styled.a`
  color: var(--HN-Teal);
`
const InstagramLink = styled.a`
  color: var(--HN-Teal);
  margin-right: 20px;
`
const LinkedInLink = styled.a`
  color: var(--HN-Teal);
`
const SkipButton = styled.a`
  border-radius: 3px;
  width: 150px;
  padding: 8px;
  background-color: #D70449;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-align: center;
  color: #ffffff;
  font-family: Stolzl;
  text-decoration: none;

  left: 50%;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;

  &:focus {
    transform: translateY(0%);
  }
`

const showDrop = () => {
  var button = document.getElementById("burger")
  var menu = document.getElementById("drop")

  menu.classList.toggle("open")
  button.classList.toggle("open")

  var expanded = button.getAttribute("aria-expanded")

  if (expanded === "false") {
    button.setAttribute("aria-expanded", "true")
    menu.setAttribute("aria-hidden", "false")
  } else {
    button.setAttribute("aria-expanded", "false")
    menu.setAttribute("aria-hidden", "true")
  }
}

const Hamburger = () => (
  <HamburgerStyle
    id="burger"
    onClick={showDrop}
    aria-label="Navigation Menu"
    aria-expanded="false"
    aria-controls="menu"
  >
    <div />
    <div />
    <div />
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
  border-radius: 0px 0px 0px 15px;
  background: var(--HN-Indigo);
  border: none;


  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  div {
    position: absolute;
    background-color: var(--HN-Teal);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
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
    div:first-of-type {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 50%;
    }
    div:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }
    div:last-of-type {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 50%;
    }
  }
`
const NavContainer = styled.div`
  a {
    text-decoration: none;
    padding: 10px 10px 10px;
    font-size: 50px;
    display: block;
    color: #0fa3b1;
    -webkit-text-stroke: 2px #0a2239;
    font-weight: 700;
    line-height: 1.04;
    font-family: Stolzl;
    position: relative;
    transition: all 0.5s;
    @media (max-width: 960px) {
      font-size: 64px;
      -webkit-text-stroke: 2px #0a2239;
    }
    @media (max-width: 780px) {
      font-size: 40px;
      -webkit-text-stroke: 2px #0a2239;
    }
    &:hover {
      background-image: -webkit-linear-gradient(#0a2239 0, #0fa3b1 76%);
      background-size: 100% 60px;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }
`
const Menu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 0;
  text-align: center;
  background: #0fa3b1;
  z-index: 3;
  opacity: 0;
  transition: 0.25s all;
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
    padding-top: 5vh;
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

class Header extends React.Component {
  componentDidMount() {
    window.onkeydown = function(event) {
      if (event.keyCode === 27) {
        var button = document.getElementById("burger")
        var menu = document.getElementById("drop")
        var expanded = button.getAttribute("aria-expanded")

        if (expanded === "true") {
          menu.classList.toggle("open")
          button.classList.toggle("open")
          button.setAttribute("aria-expanded", "false")
          menu.setAttribute("aria-hidden", "true")
        }
      }
    }
  }

  render() {
    return (
      <HeaderStyle>
        <SkipButton href="#main">Skip to Content</SkipButton>
        <ImgContainer to="/" title="Hey Nova Homepage">
          <img alt="Hey Nova Logo" src={img1} />
        </ImgContainer>
        <LinkContainer tabindex="-1">
          <LinkedInLink
            aria-label="LinkedIn"
            tabindex="-1"
            target="_blank"
            href="https://www.linkedin.com/company/hey-nova/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </LinkedInLink>
          <FaceBookLink
            aria-label="Facebook"
            tabindex="-1"
            target="_blank"
            href="https://www.facebook.com/heynovaio/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </FaceBookLink>
          <InstagramLink
            aria-label="Instagram"
            tabindex="-1"
            target="_blank"
            href="https://www.instagram.com/heynovaio/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </InstagramLink>
        </LinkContainer>
        <NavContainer>
          <Hamburger />
          <Menu aria-hidden="true" aria-labelledby="burger" id="drop">
            {/*whole drop down*/}
            <ul>
              <li>
                <Link onClick={showDrop} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={showDrop} to="/ourwork/">
                  Our Work
                </Link>
              </li>
              <li>
                <Link onClick={showDrop} to="/about/">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={showDrop} to="/blog/">
                  Our Blog
                </Link>
              </li>
              
              <li>
                <Link onClick={showDrop} to="/accessibility/">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link onClick={showDrop} to="/contact/">
                  Get in Touch
                </Link>
              </li>
            </ul>
            <LinkContainerMenu>
              <LinkedInLink
                aria-label="LinkedIn"
                target="blank"
                href="https://www.linkedin.com/company/hey-nova/"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </LinkedInLink>
              <FaceBookLink
                aria-label="facebook"
                target="blank"
                href="https://www.facebook.com/heynovaio/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </FaceBookLink>
              <InstagramLink
                aria-label="Instagram"
                target="blank"
                href="https://www.instagram.com/heynovaio/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </InstagramLink>
            </LinkContainerMenu>
          </Menu>
        </NavContainer>
      </HeaderStyle>
    )
  }
}

export default Header
