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
                The success of your website depends on how accessible it is in meeting the unique needs of your clients. Based on the most innovative research and the highest quality, we provide four primary services catered to your needs, to ensure your success:
              </MainPara>
            </MainContent>
          </Left>
          <Right>
            <List>
              <Elem>
                <h3>Accessibility testing</h3>
                <p>
                Our accessibility audits identify key elements in your website’s code and design helps you understand your current degree of accessibility.  This is your first step to connecting to the full scope and uniqueness of your clientele.
                </p>
              </Elem>
              <Elem>
                <h3>Accessibility consulting</h3>
                <p>
                Together as a team, we will help you actualize your innovations and provide you with a step-by-step guide to full accessibility.  We understand how special your product is to you and your clients.  We take pride in meeting your brand’s specific needs for both you and your users.

                </p>
              </Elem>
              <Elem>
                <h3>Accessibility training</h3>
                <p>
                  We emphasize your independence and we want you to be experts in UX.  Usability and accessibility are principles that everyone should share.  We provide immersive educational workshops that empower you and your team to maximize accessibility.  We want everyone to help take a step towards a future with more inclusive technologies for everyone.
                </p>
              </Elem>
              <Elem>
                <h3>Design & implementation for websites and applications</h3>
                <p>
                  Whether you decide to re-brand or start from scratch, we work with you to build creative, quality and inclusive applications beyond standard guidelines.  We will communicate with you throughout to provide full-service design and development that achieves a quality that rises above standard AAA accessibility guidelines.
                </p>
              </Elem>
            </List>
        </Right>
      </Rightify>
    </Center>
  </Inclusive>
)
