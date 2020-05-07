import styled from '@emotion/styled'
import React from 'react'

const Inclusive = styled.section`
  padding: 50px 0 80px;
`
const H2 = styled.h2`
  max-width: 463px;
  font-size: 50px;
  font-weight: normal;
  line-height: 1;
  font-family: Stolzl;
  color: #0b7389;
  font-size: 62px;
  font-weight: 500;
  line-height: 1;
  @media (max-width: 960px) {
    font-size: 35px;
  }
`
const H3 = styled.h3`
  font-size: 34px;
  font-weight: 400;
  line-height: 1.25;
  color: #0FA3B1;
  margin-bottom: 10px;
  font-family: Stolzl;
`
const Center = styled.div`
  max-width: 1288px;
  margin: auto;
  padding: 0 20px;
`
const List = styled.div`
  max-width: 560px;
  right: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: -185px 0 0 auto;
  justify-content: space-between;
`
const Elem = styled.div`
  border-radius: 8px;
  margin-bottom: 18px;
  background-color: #0a2239;
  padding: 24px 34px 34px;
  max-width: 425px;
  @media (max-width: 960px) {
    margin: 10px auto;
  }
`
const P = styled.p`
  max-width: 398px;
  line-height: 1.5;
  color: #fff;
  margin: 0;
  font-family: Ubuntu;
`
const MainParaOne = styled.p`
  color: #0a2239;
  font-size: 24px;
  line-height: 1.5;
  font-family: Ubuntu;
  font-weight: 600;
`
const MainPara = styled.p`
  color: #0a2239;
  padding-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-family: Ubuntu;
`
const MainContent = styled.div`
  position: sticky;
  top: 10px;
  max-width: 600px;
`

export default () => (
  <Inclusive>
    <Center>
      <MainContent>
        <H2>Does your website work for everyone?</H2>
        <MainParaOne>These are ways we are able to help you find out.</MainParaOne>
        <MainPara>Through an empathetic human lens we aim to ensure your success in reaching full accessibility and providing ALL your users with the best experience possible.</MainPara>
      </MainContent>
      <List>
        <Elem>
          <H3>Testing</H3>
          <P>Our accessibility testing identifies key elements in your website’s code and design that could be causing your users problems.</P>
        </Elem>
        <Elem>
          <H3>Consulting</H3>
          <P>We help you reach your marginalized users through a step-by-step guide of what your digital solution needs. We Work collaboratively with your team, teaching and expanding your accessibility knowledge base.</P>
        </Elem>
        <Elem>
          <H3>Workshop</H3>
          <P>We want to help everyone take a step towards a future with more inclusive technologies, so we provide immersive educational workshops that empower you and your team to maximize accessibility.</P>
        </Elem>
        <Elem>
          <H3>Design & Implementation</H3>
          <P>Whether you already have a website or are starting from scratch, we work with you to build creative, quality and inclusive applications that give ALL your users a superior digital experience.</P>
        </Elem>
      </List>
    </Center>
  </Inclusive>
)
