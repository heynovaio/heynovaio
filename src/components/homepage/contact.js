import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/kirsten.jpg'
import img2 from '../../images/bryony.jpg'

const Contact = styled.section`
  padding: 0 0 51px;
  img {
    display: block;
    width: 100%;
  }
  h2 {
    font-size: 50px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #0a2239;
    margin: 0 0 5px;
    font-family: Stolzl;
    margin-top: 55px;
  }
  p {
    max-width: 690px;
    min-height: 38px;
    font-size: 20px;
    line-height: 1.55;
    text-align: center;
    color: #455868;
    font-family: Ubuntu;
    margin: auto;
  }
  h3 {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.09;
    color: #0fa3b1;
    font-family: Stolzl;
  }
  a {
    font-weight: 500;
    color: #0fa3b1;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`
const Box = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #0a2239;
  padding: 20px;
  position: relative;
  margin: 20px 40px 50px;
  display: flex;
`
const Elem = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.56;
  color: #ffffff;
  position: relative;
  font-family: Ubuntu;
`
const EmailLink = styled.a`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.56;
  color: #ffffff;
  position: relative;
  font-family: Ubuntu;
`
const TextBox = styled.div`
  margin: 20px;
`
const Image = styled.div`
  max-width: 200px;
`
const ParagraphCentre = styled.div`
  margin: 10px 0 30px;
`
export default () => (
  <Contact>
      <h2>Reach out to our Co-founders</h2>
      <ParagraphCentre>
        <p>As the leaders of this company, we are never too busy to chat.</p>
        <p>Even if you just want a chat or are starting out in the tech industry and are looking for some advice. We are here to help!</p>
      </ParagraphCentre>
      <Flex>
        <Box>
          <Image>
            <img src={img1}/>
          </Image>
          <TextBox>
            <h3>Kirsten Dodd</h3>
            <Elem><EmailLink href="mailto:kirsten@heynova.io">kirsten@heynova.io</EmailLink></Elem>
            <Elem>linkedin</Elem>
          </TextBox>
        </Box>
        <Box>
          <Image>
            <img src={img2}/>
          </Image>
          <TextBox>
            <h3>Bryony Anderson</h3>
            <Elem><EmailLink href="mailto:bryony@heynova.io">bryony@heynova.io</EmailLink></Elem>
            <Elem>linkedin</Elem>
          </TextBox>
        </Box>
      </Flex>
      <ParagraphCentre><p>Not sure who to contact, email <a href="mailto:info@heynova.io">info@heynova.io</a> or flip a coin!</p></ParagraphCentre>
  </Contact>
)
