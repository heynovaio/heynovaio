import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/logo-2-x.png'

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
    font-size: 18px;
    font-family: Ubuntu;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    padding: 0 10px;
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

`
const ContactLink = styled.a`

`
const SocialLink = styled.a`

`
export default () => (
  <Footer>
  <ImgCenter><img src={img1}/></ImgCenter>
    <h2>HEY NOVA</h2>
    <Flex>
      <BlogLink>Blog</BlogLink>
      <ContactLink>Contact</ContactLink>
      <SocialLink>Placeholder</SocialLink>
    </Flex>
    <Flex>
      <SocialLink>Placeholder</SocialLink>
      <SocialLink>Placeholder</SocialLink>
    </Flex>
  </Footer>
)
