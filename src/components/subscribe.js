import React, { useState } from "react"
import styled from "@emotion/styled"
import addToMailchimp from "gatsby-plugin-mailchimp"
import AstroRead from "./../images/astronaut-reading.svg"

const SubSect = styled.section`
  background-color: #0c7489;
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 0;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`

const SubmitBox = styled.div`
  padding: 60px 42px 45px 48px;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 0 2px 16px 0 rgba(10, 34, 57, 0.46);
  background-color: #ffffff;
  max-width: 761px;
  display: inline-block;
  vertical-align: top;
  margin-top: 70px;
  @media (max-width: 767px) {
    padding: 30px 20px 0px;
    margin: 10px 10px 40px;
  }
  h3 {
    font-family: Stolzl;
    font-size: 60px;
    font-weight: 500;
    letter-spacing: -0.19px;
    line-height: 0.85;
    color: #0a2239;
    margin: 0;
    padding: 0 175px 10px 0;
    @media (max-width: 767px) {
      padding-right: 0;
      font-size: 35px;
    }
  }
`
const Grid = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
`
const EmailLabel = styled.label`
  font-family: Ubuntu;
  font-size: 25px;
  letter-spacing: 0.31px;
  color: #0a2239;
  font-weight: 600;
  margin: 0;
  display: block;
  padding-bottom: 8px;
`

const EmailInput = styled.input`
  border: solid 3px #0a2239;
  height: 54px;
  font-size: 22px;
  width: 65%;
  padding-left: 10px;
  font-family: Ubuntu;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const ButtonInput = styled.button`
  background-color: #d5330d;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  text-decoration: none;
  border: none;
  display: inline-block;
  margin-left: 15px;
  padding: 14px 70px 15px 71px;
  transform: translateY(-2px);
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }
  &:focus {
    outline: #000 auto 1px;
  }
`
const PhotoBox = styled.div`
  transform: translateY(70px);
  @media (max-width: 767px) {
    width: 0;
  }
`

const MessageState = styled.p`
  font-family: Ubuntu;
  font-size: 20px;
  line-height: 1.45;
  color: #0a7387;
  margin: 0;
  padding: 15px 0 0;
  font-weight: 600;
`

const Desc = styled.p`
  font-family: Ubuntu;
  font-size: 22px;
  line-height: 1.45;
  letter-spacing: 0.28px;
  color: #0a2239;
  margin: 0;
  padding: 10px 0 25px;
`

function Subscribe() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
    const { result, msg } = await addToMailchimp(email)
    result === "success" && setEmail("")
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split("<")[0])
    setStatus(result)
  }

  const handleChange = event => setEmail(event.target.value)

  return (
    <SubSect id="subscribe">
      <ContentContainer>
        <PhotoBox>
          <img
            src={AstroRead}
            alt="AstroRead"
            role="presentation"
            class="AstroRead"
          />
        </PhotoBox>
        <SubmitBox>
          <h3>Stay in the loop</h3>
          <Desc>
            Leave your email to get updated on the happenings at HEY NOVA
          </Desc>

          <form id="contactForm">
            <EmailLabel htmlFor="emailInput">Email:</EmailLabel>
            <Grid>
              <EmailInput
                id="emailInput"
                type="email"
                name="emailInput"
                autoComplete="email"
                placeholder="email@example.com"
                onChange={handleChange}
                required
              />
              <ButtonInput type="submit" onClick={handleSubmit}>
                Subscribe
              </ButtonInput>
            </Grid>
            <MessageState status={status}>{message}</MessageState>
          </form>
        </SubmitBox>
      </ContentContainer>
    </SubSect>
  )
}

export default Subscribe
