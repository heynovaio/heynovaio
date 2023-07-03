import styled from "@emotion/styled"

export const HeroImage = styled.img`
  position: absolute;
  top: -6px;
  right: 0;
  max-width: 90vw;
  aspect-ratio: auto;
  max-height: 600px;
  z-index: -1;
`

export const HeroContainer = styled.section`
  isolation: isolate;
  min-height: 500px;
`

export const HeroContent = styled.div`
  padding-top: 230px;
  margin: 0 auto;

  button {
    margin-top: 30px;
  }
`

export const HeroHeading = styled.h1`
  font-size: 55px;
  font-family: Stolzl;
  font-style: normal;
  font-weight: 500;
  @media only screen and (min-width: 900px) {
    font-size: 90px;
  }
  background: -webkit-linear-gradient(#ffffff, #49e1ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #051627;
`

export const HeroText = styled.p`
  overflow-wrap: break-word;
  width: 30ch;
  color: #fff;
  font-size: 0.91em;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  margin-top: 15px;
`
