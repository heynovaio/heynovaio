import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/logo-2-x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = styled.section`
  padding: 63px 20px 63px;
  background-color: #0a2239;
  h2 {
    min-height: 64px;
    font-size: 50px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -1px;
    font-family: Stolzl;
    text-align: center;
    color: #2BC8D7;
  }
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
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
`
const ImgCenter = styled.div`
  max-width: 60px;
  margin: auto;
`
const BlogLink = styled.a`
  font-size: 22px;
`
const ContactLink = styled.a`
  font-size: 22px;
`
const FaceBookLink = styled.a`
  font-size: 30px;
`
const InstagramLink = styled.a`
  font-size: 30px;
`
const LinkedInLink = styled.a`
  font-size: 30px;
`
export default () => (
  <Footer>
  <ImgCenter><img role="presentation" alt="" src={img1}/></ImgCenter>
    <h2>HEY NOVA</h2>
    <Flex>
      <BlogLink>Blog</BlogLink>
      <ContactLink>Contact</ContactLink>
    </Flex>
    <Flex>
      <LinkedInLink target="blank" href="https://www.linkedin.com/in/kirsten-dodd-heynova/">
         <FontAwesomeIcon icon={faLinkedinIn} />
      </LinkedInLink>
      <FaceBookLink target="blank" href="https://www.facebook.com/heynovaio/">
         <FontAwesomeIcon icon={faFacebook} />
      </FaceBookLink>
      <InstagramLink target="blank" href="https://www.instagram.com/heynovaio/">
         <FontAwesomeIcon icon={faInstagram} />
      </InstagramLink>
    </Flex>
  </Footer>
)
