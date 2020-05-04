import styled from '@emotion/styled'
import React from 'react'

const Inclusive = styled.section`
  padding: 0 20px 20px;
  h2 {
    max-width: 363px;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.2;
    font-family: Stolzl;
    @media (max-width: 960px) {
      font-size: 35px;
    }
  }
  p {
    max-width: 398px;
    line-height: 1.5;
    color: #0a2239;
    margin: 0;
    font-family: Ubuntu;
  }
  h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.25;
    color: #0FA3B1;
    margin-bottom: 10px;
    font-family: Stolzl;
  }
`
const Center = styled.div`
  max-width: 1288px;
  margin: auto;
`
const Rightify = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const MainContent = styled.div`
  padding: 143px 0 0;
  @media (min-width: 960px) {
    margin: 106px 400px 0 0;
  }
`
const List = styled.div`
  max-width: 760px;
  right: 0;
  padding: 0;
  top: 49px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 960px) {
    position: absolute;
  }
`
const Elem = styled.div`
  border-radius: 8px;
  margin-bottom: 18px;
  background-color: #0a2239;
  padding: 34px 34px;
  max-width: 372px;
  @media (max-width: 960px) {
    margin: 10px auto;
  }
  h3 + p {
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
    font-family: Ubuntu;
  }
`
const MainPara = styled.p`
  color: #0a2239;
  padding-bottom: 20px;
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
              We are here to help you find out.</MainPara>
              <MainPara>Based on the most innovative research, we can cater our approach to your unique needs and unique users, to ensure your success in reaching full accessibility and providing your users with the best experience possible.
              </MainPara>
            </MainContent>
          </Left>
          <Right>
            <List>
              <Elem>
                <h3>Testing</h3>
                <p>
                Our accessibility audits identify key elements in your website’s code and design to help you understand your current degree of accessibility, as your first step to connecting to your clientele and achieving accessibility.
                </p>
              </Elem>
              <Elem>
                <h3>Consulting</h3>
                <p>
                We will help you actualize your innovations through a step-by-step guide to full web accessibility.  Working collaboratively with your team, we can take your great ideas and identify the barriers between your products and your customers and provide a better experience for all your users.
                </p>
              </Elem>
              <Elem>
                <h3>Training/Workshop</h3>
                <p>
                  We want everyone to help take a step towards a future with more inclusive technologies for everyone, so we provide immersive educational workshops that empower you and your team to maximize accessibility.
                </p>
              </Elem>
              <Elem>
                <h3>Design & Implementation</h3>
                <p>
                  Whether you already have a website or are starting from scratch, we work with you to build creative, quality and inclusive applications that give your unique users a superior digital experience.
                </p>
              </Elem>
            </List>
        </Right>
      </Rightify>
    </Center>
  </Inclusive>
)
