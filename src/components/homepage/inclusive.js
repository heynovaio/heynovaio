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
    color: #ffffff;
  }
  p {
    max-width: 398px;
    min-height: 95px;
    font-size: 18px;
    line-height: 1.44;
    color: #ffffff;
    margin: 0;
  }
  h3 {
    height: 31px;
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    color: #ffffff;
    margin: 0;
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
const Button = styled.div`
  max-width: 274px;
  height: 40px;
  border-radius: 4px;
  background-color: #424b5a;
  padding: 14px 0 0;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  line-height: normal;
`
const List = styled.div`
  position: absolute;
  width: 400px;
  right: 0;
  padding: 0;
  top: 49px;
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
  min-height: 176px;
  padding: 31px 0 0 96px;
  margin-bottom: -40px;
  position: relative;
  p {
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
  }
`
const Line = styled.div`
  position: absolute;
  top: 24px;
  left: 35px;
  bottom: 20px;
  width: 1px;
  background-color: #ffffff;
`
export default () => (
  <Inclusive>
    <Center>
      <Rightify>
        <MainContent>
          <h2>Does your website work for everyone?</h2>
          <p>
            We can help you determine whether your website is inclusive
            to everyone regardless of gender, race, mental or
            physical limitation.
          </p>
          <Button>LEARN MORE ABOUT ACCESSIBILITY</Button>
        </MainContent>
        <List>
          <Line/>
          <Elem><Index>1</Index>
            <h3>Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </Elem>
          <Elem><Index>2</Index>
            <h3>Testing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </Elem>
          <Elem><Index>3</Index>
            <h3>Training</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </Elem>
          <Elem><Index>4</Index>
            <h3>Design & Development</h3>
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
