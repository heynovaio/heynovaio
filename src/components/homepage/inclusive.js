import styled from '@emotion/styled'
import React from 'react'

const Inclusive = styled.div`
  background-color: #0c7489;
  min-height: 667px;
  padding: 0 20px 20px;
  h2 {
    max-width: 363px;
    min-height: 180px;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.2;
    color: #0a2239;
    font-family: Stolzl;
  }
  p {
    max-width: 398px;
    min-height: 95px;
    font-size: 20px;
    line-height: 1.44;
    color: #ffffff;
    margin: 0;
    font-family: Ubuntu;
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    color: #0FA3B1;
    margin-bottom: 10px;
    font-family: Ubuntu;
  }
`
const Center = styled.div`
  max-width: 892px;
  margin: auto;
`
const Rightify = styled.div`
  max-width: 867px;
  margin-left: auto;
  position: relative;
`
const MainContent = styled.div`
  margin: 0 400px 0 0;
  padding: 143px 0 0;
`
const List = styled.div`
  position: absolute;
  width: 400px;
  right: 0;
  padding: 0;
  top: 49px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Index = styled.div`
  width: 48px;
  height: 48px;
  background-color: #0a2239;
  top: 23px;
  left: 11px;
  position: absolute;
  border-radius: 50%;
  text-align: center;
  padding-top: 8px;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.48;
  color: #ffffff;
`
const Elem = styled.div`
  min-height: 395px;
  min-width: 331px;
  border-radius: 8px;
  margin-bottom: 52px;
  background-color: #0a2239;
  padding: 34px 34px;
  margin-left: 60px;
  p {
    font-size: 20px;
    line-height: 1.5;
    color: #ffffff;
    font-family: Ubuntu;
  }
`
export default () => (
  <Inclusive>
    <Center>
      <Rightify>
        <MainContent>
          <h2>Does your website work for everyone?</h2>
          <p>
            Our in-depth assessments identify key elements in your website’s code and design to identify your degree of accessibility.  It’s your first step to connecting with the full scope of your clientele.
          </p>
        </MainContent>
        <List>
          <Elem>
            <h3>Accessibility testing</h3>
            <p>
              Our consultations provide you with a step-by-step guide to full accessibility tailored to your brand’s specific needs of you and your users.
            </p>
          </Elem>
          <Elem>
            <h3>Accessibility consulting</h3>
            <p>
              Usability and accessibility are principles that we believe everyone should share.  Our educational modules/ workshops empower you and your staff to maximize accessibility for yourself.
            </p>
          </Elem>
          <Elem>
            <h3>Accessibility training</h3>
            <p>
              Whether re-branding or starting from scratch, we build creative, quality and inclusive applications far beyond the standard guidelines based on your unique vison.
            </p>
          </Elem>
          <Elem>
            <h3>Design & implementation for websites and applications</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </Elem>
        </List>
      </Rightify>
    </Center>
  </Inclusive>
)
