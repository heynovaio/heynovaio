import styled from '@emotion/styled'
import React from 'react'
import Planet from '../../images/planet-1.png'

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
  @media (max-width: 780px) {
    font-size: 30px;
  }
`
const Center = styled.div`
  max-width: 1288px;
  margin: auto;
  padding: 0 20px;
`
const List = styled.div`
  max-width: 530px;
  right: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  @media (min-width: 1026px) {
    margin: -185px 0 0 auto;
  }
`
const Elem = styled.div`
  border-radius: 8px;
  margin-bottom: 18px;
  background-color: #0a2239;
  padding: 24px 34px 34px;
  max-width: 425px;
  box-shadow: 8px 12px 16px 2px rgba(10, 35, 57, 0.35);
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
  max-width: 600px;
  @media (min-width: 1026px) {
    position: sticky;
    top: 160px;
  }
`
const ImgContainer = styled.div`
  max-width: 450px;
  z-index: 0;
  margin: 0 0 0 auto;

  @media (max-width: 780px) {
    display: none;
  }
  @media (max-width: 1026px) {
    width: 355px;
    position: absolute;
    right: 20px;
  }
  @media (min-width: 1026px) {
    position: sticky;
    top: 0;
  }
  img {
    position: absolute;
    right: 0;
  }
`
export default () => (
  <Inclusive>
    <Center>
      <ImgContainer>
        <img role="presentation" alt="planet" src={Planet}/>
      </ImgContainer>
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
