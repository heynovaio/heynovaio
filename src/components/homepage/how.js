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
    font-size: 50px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: -1px;
    text-align: center;
    color: #0a2239;
    margin: 0 0 5px;
    font-family: Stolzl;
    margin-top: 75px;
    @media (max-width: 960px) {
      font-size: 30px;
    }
  }
  p {
    max-width: 690px;
    font-size: 20px;
    line-height: 1.55;
    text-align: center;
    color: #455868;
    margin: auto;
    font-family: Ubuntu;
  }
  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.09;
    color: #ffffff;
    margin: 40px 0 13px;
    font-family: Stolzl;
  }
`
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
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
const ParagraphCentre = styled.div`
  width: 100%;
  padding: 20px 10px;
`
export default () => (
  <How>
      <h2>Curious about our strategy?</h2>
      <ParagraphCentre>
        <p>We can break down our methodology into four key components: strategy, design, implementation, and consultation.</p>
      </ParagraphCentre>
      <Flex>
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
            <Elem>User Interface/Visual Design</Elem>
            <Elem>User Experience Design</Elem>
            <Elem>Inclusive Design</Elem>
            <Elem>Inclusive User Testing</Elem>
          </Center>
        </Box>
        <Box>
          <img src={img4}/>
          <Center>
            <h3>Implementation</h3>
            <Elem>Web development</Elem>
            <Elem>Mobile-first development</Elem>
            <Elem>Accessibile Development</Elem>
            <Elem>SEO Optimization</Elem>
            <Elem>Data & Analytics</Elem>
            <Elem>Custom CMS themes</Elem>
          </Center>
        </Box>
        <Box>
          <img src={img1}/>
          <Center>
            <h3>Consulting</h3>
            <Elem>Workshops & Mentoring</Elem>
            <Elem>Accessibility Training</Elem>
            <Elem>Accessibility Audits</Elem>
            <Elem>Project Consulting</Elem>
            <Elem>UX Consulting</Elem>
            <Elem>Translating Geek Speak</Elem>
          </Center>
        </Box>
      </Flex>
  </How>
)
