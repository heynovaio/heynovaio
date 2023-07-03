import styled from "@emotion/styled"
import BgMobile from "../assets/bgmobile.svg"
import BgDesktop from "../assets/bgdesktop.svg"

export * from "./Hero"

export const Container = styled.div`
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 900px) {
    background-image: url(${BgDesktop});
  }
`

export const Center = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 900px) {
    padding: 0;
    max-width: 900px;
    margin: 0 auto;
  }
`

export const Button = styled.button`
  border-radius: 40px;
  background: #d5330d;
  padding: 13px 20px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border: none;
`
