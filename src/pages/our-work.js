import React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import Contact from "../components/homepage/contact"
import { PopupText } from 'react-calendly'

const H1 = styled.h1`
  font-size: 110px;
  font-weight: 500;
  line-height: 1.04;
  color: #0a2239;
  margin: 0 0 25px;
  font-family: Stolzl;
  text-align: center;
`
const Main = styled.div`

`
const Container = styled.div`
  max-width: 1288px;
  padding: 145px 0 145px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 678px;
  }
  @media (max-width: 767px) {
    padding: 175px 0 155px;
  }
`
const ActionContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
  font-family: Ubuntu;
  font-size: 20px;
  vertical-align: middle;
  text-align: center;
  padding-bottom: 40px;
  @media (max-width: 767px) {
    padding: 0 5px;
  }
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`
const Button = styled.div`
  a {
    background: #d5330d;
    color: #fff;
    padding: 18px 25px 22px;
    font-size: 20px;
    text-decoration: none;
    width: 250px;
    text-align: center;
    font-family: Ubuntu;
    display: inline-block;
    @media (max-width: 767px) {
      width: 300px;
    }
    &:hover {
      background: #b33113;
    }
  }
`
const A = styled.a`
  background: #d5330d;
  color: #fff;
  padding: 18px 25px 22px;
  font-size: 20px;
  text-decoration: none;
  width: 250px;
  text-align: center;
  font-family: Ubuntu;
  display: inline-block;
  @media (max-width: 767px) {
    width: 300px;
  }
  &:hover {
    background: #b33113;
  }
`
const Span = styled.span`
  padding: 16px 5px 15px;
  font-weight: 500;
  @media (max-width: 767px) {
    display: block;
  }
`
export default () => (
  <Layout>
    <Main>
      <Container>
        <H1 id="main">Our Work</H1>
        <ActionContainer>
          <Button>
            <PopupText
              text="Book a Chat"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
          <Span>or</Span>
          <A href="mailto:info@heynova.io">Email us a Question</A>
        </ActionContainer>
      </Container>
    </Main>
    <Contact/>
  </Layout>
)

