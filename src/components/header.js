import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'
import img1 from '../images/logo-2-x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  img {
    max-width: 56px;
    margin-top:17px;
    margin-left: 49px;
  }
`
const LinkContainer = styled.div`
  display: flex;
  a {
    padding: 20px 12px;
  font-size: 23px;
  font-family: Stolzl;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
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
const MailLink = styled.a``
export default () => (
  <Header>
    <img src={img1}/>
    <LinkContainer>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
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
  </Header>
)
