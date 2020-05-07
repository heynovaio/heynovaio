import styled from '@emotion/styled'
import React from 'react'
import img1 from '../../images/icon.svg'
import img2 from '../../images/group-7.svg'
import img3 from '../../images/group-8.svg'
import img4 from '../../images/group-9.svg'
import Planet from '../../images/group-17.png'

const How = styled.section`
  padding: 0 0 80px;
  position: relative;
`
const H2 = styled.h2`
  font-size: 50px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -1px;
  text-align: center;
  color: #0a2239;
  margin: 75px 0 15px;
  font-family: Stolzl;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`
const H3 = styled.h3`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.09;
  color: #ffffff;
  margin: 40px 0 13px;
  font-family: Stolzl;
`
const P = styled.p`
  max-width: 690px;
  font-size: 20px;
  line-height: 1.55;
  text-align: center;
  color: #455868;
  margin: 0 auto 20px;
  font-family: Ubuntu;
  padding: 0 10px 30px;
`
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1288px;
  margin: auto;
`
const Box = styled.div`
  width: 305px;
  min-height: 421px;
  border-radius: 8px;
  background-color: #0a2239;
  padding: 58px 10px 10px;
  position: relative;
  z-index: 1;
  box-shadow: 8px 12px 16px 2px rgba(10, 35, 57, 0.35);
  img {
    width: 88px;
    margin: 0 auto 40px;
    display: block;
  }
  @media (max-width: 960px) {
    margin: 10px auto;
  }
`
const ListElementStyle = styled.div`
  padding: 0 0 0 25px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.56;
  letter-spacing: -0.36px;
  color: #ffffff;
  position: relative;
  font-family: Ubuntu;
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
const ImgContainer = styled.div`
  max-width: 400px;
  position: absolute;
  bottom: -260px;
  z-index: 0;
  left: 0;
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
    <H2>Curious about our process?</H2>
    <P>We can break down our methodology into four key components: strategy, design, implementation, and consultation.</P>
    <Flex>
      <Box>
        <img role="presentation" alt="" src={img2}/>
        <Center>
          <H3>Strategy</H3>
          <Elem>User Research</Elem>
          <Elem>Brand Strategy</Elem>
          <Elem>Content Strategy</Elem>
          <Elem>Market Research</Elem>
          <Elem>Accessibility Research</Elem>
          <Elem>User Testing</Elem>
        </Center>
      </Box>
      <Box>
        <img role="presentation" alt="" src={img3}/>
        <Center>
          <H3>Design</H3>
          <Elem>Branding</Elem>
          <Elem>User Interface/Visual Design</Elem>
          <Elem>User Experience</Elem>
          <Elem>Inclusive Design</Elem>
          <Elem>Behavioral Science</Elem>
          <Elem>Gamification</Elem>
        </Center>
      </Box>
      <Box>
        <img role="presentation" alt="" src={img4}/>
        <Center>
          <H3>Implementation</H3>
          <Elem>Web Development</Elem>
          <Elem>Mobile-first Development</Elem>
          <Elem>Accessibile Development</Elem>
          <Elem>SEO Optimization</Elem>
          <Elem>Data & Analytics</Elem>
          <Elem>Custom CMS Themes</Elem>
        </Center>
      </Box>
      <Box>
        <img role="presentation" alt="" src={img1}/>
        <Center>
          <H3>Consulting</H3>
          <Elem>Workshops & Mentoring</Elem>
          <Elem>Accessibility Training</Elem>
          <Elem>Accessibility Audits</Elem>
          <Elem>Project Consulting</Elem>
          <Elem>UX Consulting</Elem>
          <Elem>Translating Geek Speak</Elem>
        </Center>
      </Box>
    </Flex>
    <ImgContainer>
      <img role="presentation" alt="planet" src={Planet}/>
    </ImgContainer>
  </How>
)
