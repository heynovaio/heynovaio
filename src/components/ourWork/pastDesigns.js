import React from "react"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const DesignsSection = styled.section`
  
`


const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 0px 20px 100px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;

  }
  h1{
    max-width: 600px;
  }
`
const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(548px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 80px;
  align-items: left;
  margin: 0 auto;
  @media (max-width: 1160px) {
    grid-column-gap: 0;
    grid-row-gap: 40px;
    grid-template-columns: 1fr;
  }
`
const OneBox = styled.div`
  height: 954px;
  @media (max-width: 700px) {
    height: fit-content;
    margin-bottom: 0;
  }
`

const TwoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 954px;
  @media (max-width: 700px) {
    height: 100%;
    gap: 40px;
  }
`

const WorkBox = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 548px;
  .gatsby-image-wrapper{
    display: block;
    height: 100%;
  }
  &:hover, &:focus{
    & > div{
      transition: 650ms;
      height: 100%;
      width: 100%;
      & > a{
        opacity: 1;
        transition-property: opacity;
        transition-duration: 250ms;
        transition-timing-function: linear;
        transition-delay: 150ms;
      }
    }
  }
  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }  
`

const Content = styled.a`
  width: 100%;
  height: 100%;
  padding: 80px; 
  opacity: 0;
  display: block;
`
const SiteLink = styled.span`
  color: #fff;
`
const WorkBoxSm = styled(WorkBox)`
  height: 448px;
`
const WorkBoxLg = styled(WorkBox)`
`

const PhotoBox = styled.div`
  max-height: 80px;
  min-height: 40px;
  max-width: 50%;
  position: relative;
  display: block;
  margin-bottom: 40px;
  margin-top: -20px;
  img{
    max-width: 100%;
    height: auto;
  }
`
const HoverBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  p{
    font-family: Ubuntu;
    font-size: 18px;
    line-height: 21px;
  }
`
const HoverBoxSm = styled(HoverBox)`
  width: 0;
  height: 100%;
`
const HB1 = styled(HoverBox)`
  background: #2E787B;
  color: #FFFFFF;
`
const HB2 = styled(HoverBoxSm)`
  background: #E0B183;
`
const HB3 = styled(HoverBoxSm)`
  background: #3972A4;
  color: #FFFFFF;
`
const HB4 = styled(HoverBoxSm)`
  background: #83C1B3;
`
const HB5 = styled(HoverBoxSm)`
  background: #363C44;
  color: #FFFFFF;
`
const HB6 = styled(HoverBox)`
  background: #CAE1F4;
`
const HB7 = styled(HoverBox)`
  background: #9BD8CE;
`
const HB8 = styled(HoverBoxSm)`
  background: #092145;
  color: #FFFFFF;
`
const HB9 = styled(HoverBoxSm)`
  background: #E9CDC1;
  img{
    transform: scale(.75);
    margin-top: -24px;
  }
`
function PastDesigns () {
  const data = useStaticQuery(graphql`
    query {
      soc: file(relativePath: { eq: "SOC1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      joni: file(relativePath: { eq: "Joni1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ch: file(relativePath: { eq: "CommunityHall.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fatso: file(relativePath: { eq: "Fatso.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      gv: file(relativePath: { eq: "Grapevine.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      iic: file(relativePath: { eq: "IIC.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      passiv: file(relativePath: { eq: "Passiv.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      wab: file(relativePath: { eq: "WatsonAndBarnard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      eco: file(relativePath: { eq: "Eco.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      socLogo: file(relativePath: { eq: "soc-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      joniLogo: file(relativePath: { eq: "joni-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      chLogo: file(relativePath: { eq: "ch-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fatsoLogo: file(relativePath: { eq: "fatso-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      gvLogo: file(relativePath: { eq: "gv-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      iicLogo: file(relativePath: { eq: "iic-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      passivLogo: file(relativePath: { eq: "passiv-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      wabLogo: file(relativePath: { eq: "wab-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ecoLogo: file(relativePath: { eq: "eco-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
  	<DesignsSection>
  	  <ContentContainer>

        <WorkGrid>
          <OneBox>
            <WorkBoxLg tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.passiv.childImageSharp.fluid} />
              <HB7>
                <Content>
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.passivLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                  lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                  purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </p>
                  <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing</p>
                </Content>
              </HB7>
            </WorkBoxLg>
          </OneBox>
          <TwoBox>

            
          </TwoBox>
          

          <TwoBox>
            <WorkBoxSm tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.wab.childImageSharp.fluid} />
              <HB8>
                <Content>
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.wabLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                  lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                  purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </p>
                  <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing</p>
                </Content>
              </HB8>
            </WorkBoxSm>
            <WorkBoxSm tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.gv.childImageSharp.fluid} />
              <HB5>
                <Content>
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.gvLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                  lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                  purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </p>
                  <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing</p>
                </Content>
              </HB5>
            </WorkBoxSm>
          </TwoBox>
          <OneBox>
            <WorkBoxLg tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.iic.childImageSharp.fluid} />
              <HB6>
                <Content>
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.iicLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                  lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                  purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </p>
                  <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing</p>
                </Content>
              </HB6>
            </WorkBoxLg>
          </OneBox>
          <OneBox>
            <WorkBoxLg tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.soc.childImageSharp.fluid} />
              <HB1>
                <Content href="https://streamofconsciousness.ca/" target="_blank">
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.socLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <SiteLink>View Stream of Consciousness Website</SiteLink>
                </Content>
              </HB1>
            </WorkBoxLg>
          </OneBox>
          <TwoBox>
            <WorkBoxSm tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.joni.childImageSharp.fluid} />
              <HB2>
                <Content>
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.joniLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <SiteLink>View Joni Website</SiteLink>
                </Content>
              </HB2>
            </WorkBoxSm>
            <WorkBoxSm tabIndex="0">
              <Img alt="" role="presentation" fadeIn={false} fluid={data.ch.childImageSharp.fluid} />
              <HB3>
                <Content>
                  <PhotoBox>
                    <Img alt="" role="presentation" fadeIn={false} fluid={data.chLogo.childImageSharp.fluid} />
                  </PhotoBox>
                  <SiteLink>View Community Haul Website</SiteLink>
                </Content>
              </HB3>
            </WorkBoxSm>
          </TwoBox>
        </WorkGrid>

  	  </ContentContainer>
  	</DesignsSection>
  )
}
export default PastDesigns