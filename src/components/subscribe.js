import React from "react"
import styled from '@emotion/styled'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import AstroRead from './../images/astronaut-reading.svg'

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
  h3{
    font-family: Stolzl;
    font-size: 60px;
    font-weight: 500;
    letter-spacing: -0.19px;
    line-height: .85;
    color: #0a2239;
    margin: 0;
    padding: 0 175px 22.5px 0;
  }
  h4{
    
  }
  p{
    font-family: Ubuntu;
    font-size: 22px;
    line-height: 1.45;
    letter-spacing: 0.28px;
    color: #0a2239;
    margin: 0;
    padding: 12px 0;
  }
  form{
    display: flex;
  }
`
const EmailLabel = styled.label`
  font-family: Ubuntu;
  font-size: 25px;
  letter-spacing: 0.31px;
  color: #0a2239;
  font-weight: normal;
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
`
const ButtonInput = styled.input`
  background-color: #D5330D;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  font-family: Stolzl;
  text-decoration: none;
  border: none;
  display: inline-block;
  margin-left:15px;
  padding: 14px 70px 15px 71px;
  transform: translateY(-2px);
`
const PhotoBox = styled.div`
  transform: translateY(70px);
  @media (max-width: 767px) {
    width: 0;
  }
  
`

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    .then((data) => {
        alert(data.result);
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
    this.setState({result: result})
  }
  handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
      <SubSect>
        <ContentContainer>
          <SubmitBox>
            <h3>Stay in the loop</h3>
            <p>Leave your email to get updated about new articles</p>
            <EmailLabel for="email">Email</EmailLabel>
            <form onSubmit={this._handleSubmit}>
              <EmailInput type="email" id="email"/>
              <ButtonInput type="submit" value="Submit"/>
            </form>
          </SubmitBox>
          <PhotoBox>
            <img src={AstroRead} alt="AstroRead" role="presentation" class="AstroRead"/>
          </PhotoBox>
        </ContentContainer>
      </SubSect>
    )
  }
}
