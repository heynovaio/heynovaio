import styled from '@emotion/styled'
import React from 'react'

const Inclusive = styled.section`
  padding: 0 20px 20px;
  h2 {
    max-width: 363px;
    font-size: 50px;
    font-weight: normal;
    line-height: 1;
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
              These are ways we are able to help you find out.</MainPara>
              <MainPara>Through an empathetic human lens we aim to ensure your success in reaching full accessibility and providing ALL your users with the best experience possible.
              </MainPara>
            </MainContent>
          </Left>
          <Right>
            <List>
              <Elem>
                <h3>Testing</h3>
                <p>
                  Our accessibility testing identifies key elements in your website’s code and design that could be causing your users problems.
                </p>
              </Elem>
              <Elem>
                <h3>Consulting</h3>
                <p>
                  We help you reach your marginalized users through a step-by-step guide of what your digital solution needs. We Work collaboratively with your team, teaching and expanding your accessibility knowledge base.
                </p>
              </Elem>
              <Elem>
                <h3>Workshop</h3>
                <p>
                  We want to help everyone take a step towards a future with more inclusive technologies, so we provide immersive educational workshops that empower you and your team to maximize accessibility.
                </p>
              </Elem>
              <Elem>
                <h3>Design & Implementation</h3>
                <p>
                  Whether you already have a website or are starting from scratch, we work with you to build creative, quality and inclusive applications that give ALL your users a superior digital experience.
                </p>
              </Elem>
            </List>
        </Right>
      </Rightify>
    </Center>
  </Inclusive>
)
