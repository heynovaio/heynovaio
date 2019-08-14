import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'
import img1 from '../images/logo-2-x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Header = styled.header`
  img {
    width: 56px;
    top:17px;
    left: 49px;
    position: fixed;
  }
  a {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }
`
const BlogLink = styled.a`
  width: 41px;
  height: 26px;
  top: 26px;
  right: 356px;
  position: fixed;
`
const ContactLink = styled.a`
  width: 80px;
  height: 26px;
  top: 26px;
  right: 213px;
  position: fixed;
`
const FaceBookLink = styled.a``
const InstagramLink = styled.a``
const MailLink = styled.a``
export default () => (
  <Header>
    <img src={img1}/>
    <BlogLink>Blog</BlogLink>
    <ContactLink>Contact</ContactLink>
  </Header>
)
