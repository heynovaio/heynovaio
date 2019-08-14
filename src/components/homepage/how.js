import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/icon.svg'
import img2 from '../../images/group-7.svg'
import img3 from '../../images/group-8.svg'
import img4 from '../../images/group-9.svg'

const How = styled.section`
  padding: 0 0 51px;
  img {
    width: 88px;
    margin: 0 auto 40px;
    display: block;
  }
  h2 {
    min-height: 64px;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #0a2239;
    margin: 0 0 5px;
  }
  p {
    min-height: 38px;
    font-size: 20px;
    line-height: 1.55;
    text-align: center;
    color: #455868;
    margin: 5px 0 38px;
  }
  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.09;
    color: #ffffff;
    margin: 40px 0 13px;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1349.9px;
  margin: auto;
`
const Box = styled.div`
  width: 305px;
  min-height: 421px;
  border-radius: 8px;
  background-color: #0a2239;
  padding: 58px 10px 10px;
  position: relative;
  margin: 10px;
`
const ListElementStyle = styled.div`
  padding: 0 0 0 25px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.56;
  letter-spacing: -0.36px;
  color: #ffffff;
  position: relative;
`
const Marker = styled.div`
  height: 10px;
  width: 10px;
  background-color: #0fa3b1;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 2px;
`
const Elem = ({children}) => (
  <ListElementStyle>
    {children}
    <Marker/>
  </ListElementStyle>
)
const Center = styled.div`
  max-width: 254px;
  margin-left: auto;
`
export default () => (
  <How>
    <h2>How we do it</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed.</p>
    <Flex>
      <Box>
        <img src={img1}/>
        <Center>
          <h3>Consulting</h3>
          <Elem>Accessibility Workshops </Elem>
          <Elem>Training</Elem>
          <Elem>Mentoring</Elem>
          <Elem>User Experience Audit</Elem>
          <Elem>Translating geek speak</Elem>
        </Center>
      </Box>
      <Box>
        <img src={img2}/>
        <Center>
          <h3>Strategy</h3>
          <Elem>User Research</Elem>
          <Elem>Brand Strategy</Elem>
          <Elem>Content Strategy</Elem>
          <Elem>Market Research</Elem>
          <Elem>Accessibility Research</Elem>
        </Center>
      </Box>
      <Box>
        <img src={img3}/>
        <Center>
          <h3>Design</h3>
          <Elem>Branding</Elem>
          <Elem>User Interface Design</Elem>
          <Elem>User Experience</Elem>
          <Elem>Inclusive Design</Elem>
        </Center>
      </Box>
      <Box>
        <img src={img4}/>
        <Center>
          <h3>Implementation</h3>
          <Elem>Web development</Elem>
          <Elem>Mobile development</Elem>
          <Elem>Accessibility Development</Elem>
          <Elem>SEO optimization</Elem>
          <Elem>Data & Analytics</Elem>
          <Elem>Custom CMS themes</Elem>
        </Center>
      </Box>
    </Flex>
  </How>
)
