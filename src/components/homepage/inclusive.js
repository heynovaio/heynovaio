import styled from '@emotion/styled'
import React from 'react'

const Inclusive = styled.section`
  min-height: 667px;
  padding: 0 20px 20px;
  h2 {
    max-width: 363px;
    min-height: 180px;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.2;
    font-family: Stolzl;
  }
  p {
    max-width: 398px;
    min-height: 95px;
    font-size: 20px;
    line-height: 1.44;
    color: #0a2239;
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
  max-width: 1220px;
  margin: auto;
`
const Rightify = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
`
const MainContent = styled.div`
  margin: 0 400px 0 0;
  padding: 143px 0 0;
`
const List = styled.div`
  position: absolute;
  max-width: 719px;
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
  max-width: 331px;
  p {
    font-size: 20px;
    line-height: 1.5;
    color: #ffffff;
    font-family: Ubuntu;
  }
`
const MainPara = styled.p`
  color: #0a2239;
`
const Left = styled.div`
`
const Right = styled.div`
`

export default () => (
  <Inclusive>
    <Center>
      <Rightify>
          <Left>
            <MainContent>
              <h2>Does your website work for everyone?</h2>
              <MainPara>
              It’s okay not to know, that is what we are here for.</MainPara>

              <MainPara>Based on the most innovative research, we can cater our approach to your unique needs and unique users, to ensure your success in reaching full accessibility and providing your users with the best experience possible.

              </MainPara>
            </MainContent>
          </Left>
          <Right>
            <List>
              <Elem>
                <h3>Accessibility testing</h3>
                <p>
                Our accessibility audits identify key elements in your website’s code and design to help you understand your current degree of accessibility, as your first step to connecting to your clientele and achieving accessibility.
                </p>
              </Elem>
              <Elem>
                <h3>Accessibility consulting</h3>
                <p>
                We will help you actualize your innovations and provide you with a step-by-step guide to full accessibility.  We understand how special your product is to you and your clients.
                </p>
              </Elem>
              <Elem>
                <h3>Accessibility training</h3>
                <p>
                  We want everyone to help take a step towards a future with more inclusive technologies for everyone, so we provide immersive educational workshops that empower you and your team to maximize accessibility.
                </p>
              </Elem>
              <Elem>
                <h3>Design & implementation for websites and applications</h3>
                <p>
                  Whether you decide to re-brand or start from scratch, we work with you to build creative, quality and inclusive applications beyond standard guidelines from design to code.
                </p>
              </Elem>
            </List>
        </Right>
      </Rightify>
    </Center>
  </Inclusive>
)
