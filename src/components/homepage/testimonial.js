import styled from '@emotion/styled'
import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const TestimonialSection = styled.section`
  padding: 63px 20px 50px;
  background-color: #051628;
  position: relative;
  img {
    width: 100%;
    display: block;
  }
  @media (min-width: 1026px) {
    .alice-carousel__stage-item {
      vertical-align: middle;
    }
  }
  .alice-carousel__dots-item {
    box-shadow: 0 2px 12px 0 #0d1015;
    border: 1px solid #0FA3B1;
    background-color: #0D2D4B;
    width: 16px;
    height: 16px;
    margin: 0 7px;
    cursor: pointer;
    border-radius: 50%;
  }
  .alice-carousel__dots-item:hover,
  .alice-carousel__dots-item.__active {
    background-color: #0fa3b1;
  }
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    color: #fff;
    font-size: 25px;
    font-family: Stolzl;
    letter-spacing: 0.05em;
    margin-top: 5px;
    span {
      border: 1px solid #7f8b97;
      padding: 4px 20px 6px;
    }
  }
  .alice-carousel__prev-btn-item:hover span,
  .alice-carousel__next-btn-item:hover span {
    background: #D5330D;
    color: #fff;
  }
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    padding: 15px 10px;
  }
`
const H2 = styled.h2`
  font-size: 50px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -1px;
  font-family: Stolzl;
  text-align: center;
  color: #0fa3b1;
  @media (max-width: 1026px) {
    font-size: 35px;
    margin-bottom: 0;
  }
`
const ContentCenter = styled.div`
  max-width: 688px;
  margin: 0 auto;
  display: flex;
  align-items: center;

`
const Content = styled.div`
  max-width: 615px;
  margin-left: auto;
  position: relative;
`
const ImgCenter = styled.div`
  @media (min-width: 1026px) {
    min-width: 585px;
  }
  @media (max-width: 1026px) {
    margin-bottom: 110px;
  }
  position: relative;
  margin: 0 auto;
`
const SiteLink = styled.a`
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #d5330d;
  font-family: Stolzl;
  display: inline-block;
  text-decoration: none;
  position: absolute;
  left: 18px;
  bottom: 0;
  &:hover {
    color: #d5330d;
  }
  @media (max-width: 1026px) {
    bottom: -28px;
  }
`
const Flex = styled.div`
  margin-top: 30px;
  @media (max-width: 1026px) {
    flex-wrap: wrap;
  }
  @media (min-width: 1026px) {
    display: flex;
  }
`
const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: Stolzl;
  color: #fff;
  margin-bottom: 5px;
`
const JobPosition = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #0fa3b1;
  font-family: Stolzl;
  margin-bottom: 4px;
`
const Place = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #0fa3b1;
  font-family: Stolzl;
`
const Quote = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  color: #fff;
  align-self: center;
  p {
    line-height: 1.4;
    margin-bottom: 16px;
  }
  @media (min-width: 1026px) {
    min-width: 552px;
  }
`
const QuoteLeft = styled.div`
  align-self: flex-start;
  margin-right: 15px;
  min-width: 45px;
  margin-left: -18px;
  @media (max-width: 1026px) {
    margin-left: 0;
    position: absolute;
    max-width: 30px;
    top: -54px;
  }
`
const TestimonialQuote = styled.div`
  display: flex;
`
const TestimonialDetails = styled.div`
  @media (min-width: 1026px) {
    padding-left: 40px;
  }
`

const handleOnDragStart = e => e.preventDefault()

function Testimonial () {

  const data = useStaticQuery(graphql`
    query {
      Kwench: file(relativePath: { eq: "kwench-img2.png" }) {
        childImageSharp {
          fluid(maxWidth: 585, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      P4l: file(relativePath: { eq: "p4l-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 585, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      Brainbox: file(relativePath: { eq: "brainbox-workshop.png" }) {
        childImageSharp {
          fluid(maxWidth: 625, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      Tipp: file(relativePath: { eq: "tipp-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 585, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      Grapevine: file(relativePath: { eq: "grapevine-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 585, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      Eco: file(relativePath: { eq: "eco-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 585, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      wb: file(relativePath: { eq: "watson-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 585, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      quote: file(relativePath: { eq: "quote-left.png" }) {
        childImageSharp {
          fluid(maxWidth: 66, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (

    <TestimonialSection>
      <H2>What our clients have to say</H2>
      <AliceCarousel
        mouseTrackingEnabled={true}
        mouseDragEnabled={true}
        disableAutoPlayOnAction={true}
        autoPlay={true}
        autoPlayInterval={5000}>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <Flex>
            <ImgCenter>
              <Img alt="Tipp Consulting Screenshot" fadeIn={false} role="presentation" fluid={data.Grapevine.childImageSharp.fluid} />
              <SiteLink href="https://grapevinetattoo.com/" target="_blank">View site</SiteLink>
            </ImgCenter>
            <ContentCenter>
              <Content>
                <TestimonialQuote>
                  <QuoteLeft>
                    <Img alt="Left Quote" fadeIn={false} role="presentation" fluid={data.quote.childImageSharp.fluid} />
                  </QuoteLeft>
                  <Quote>
                    <p>Bryony Anderson and Kirsten Dodd, co-founders of Hey Nova and their staff are nothing short of amazing. They're diligent and committed to producing the best possible product. Our finished website was beyond our expectations. I wholeheartedly recommend them to anyone looking for a new website or cloud application.</p>
                  </Quote>
                </TestimonialQuote>
                <TestimonialDetails>
                  <Name>John Baran</Name>
                  <JobPosition>Project Manager, Netterbot Communications</JobPosition>
                  <Place>Vancouver, BC</Place>
                </TestimonialDetails>
              </Content>
            </ContentCenter>
          </Flex>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <Flex>
            <ImgCenter>
              <Img alt="P4L Website Screenshot" fadeIn={false} role="presentation" fluid={data.P4l.childImageSharp.fluid} />
              <SiteLink href="https://pharmacyforlife.ca/" target="_blank">View site</SiteLink>
            </ImgCenter>
            <ContentCenter>
              <Content>
                <TestimonialQuote>
                  <QuoteLeft>
                    <Img alt="Left Quote" fadeIn={false} role="presentation" fluid={data.quote.childImageSharp.fluid} />
                  </QuoteLeft>
                  <Quote>
                    <p>What can I say… they had me at “Hey”.</p>
                    <p>The Hey Nova team has been instrumental in helping us set up our e-commerce website. From the planning stages to building the format and content to preparing for launch, Hey Nova is with you every step.</p>
                    <p>We enjoy our brainstorming sessions and working in collaboration with Hey Nova to distill ideas into functional, accessible and attractive designs and concepts. Whether you are just getting started or looking to provide your online business identity with a boost or a complete overhaul, Hey Nova can help road map your way to success.</p>
                    <p>We look forward to continuing to work with Hey Nova to create a first-class experience with our online business.</p>
                  </Quote>
                </TestimonialQuote>
                <TestimonialDetails>
                  <Name>Luke Leslie</Name>
                  <JobPosition>Owner/Operator, Pharmacy For Life </JobPosition>
                  <Place>Hartland, NB</Place>
                </TestimonialDetails>
              </Content>
            </ContentCenter>
          </Flex>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <Flex>
            <ImgCenter>
              <Img alt="Watson and Barnard Website Screenshot" fadeIn={false} role="presentation" fluid={data.wb.childImageSharp.fluid} />
              <SiteLink href="http://www.wbsurveys.bc.ca/" target="_blank">View site</SiteLink>
            </ImgCenter>
            <ContentCenter>
              <Content>
                <TestimonialQuote>
                  <QuoteLeft>
                    <Img alt="Left Quote" fadeIn={false} role="presentation" fluid={data.quote.childImageSharp.fluid} />
                  </QuoteLeft>
                  <Quote>
                    <p>We hired Hey Nova to create a website that would attract new clients and advertise our accomplishments within our community. Kirsten and Bryony were eager to meet with us and understand our business and needs. They helped expand our online presence and reinvent our brand. Once the new website launched, we started receiving new clients within days.</p>
                  </Quote>
                </TestimonialQuote>
                <TestimonialDetails>
                  <Name>Connor R. Embleton</Name>
                  <JobPosition>BC Land Surveyor, E.I.T., Partner</JobPosition>
                  <Place>Vancouver, BC</Place>
                </TestimonialDetails>
              </Content>
            </ContentCenter>
          </Flex>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <Flex>
            <ImgCenter>
              <Img alt="Kwench Website Screenshot" fadeIn={false} role="presentation" fluid={data.Kwench.childImageSharp.fluid} />
              <SiteLink href="https://www.clubkwench.com/" target="_blank">View site</SiteLink>
              </ImgCenter>
            <ContentCenter>
              <Content>
                <TestimonialQuote>
                  <QuoteLeft>
                    <Img alt="Left Quote" fadeIn={false} role="presentation" fluid={data.quote.childImageSharp.fluid} />
                  </QuoteLeft>
                  <Quote>
                    <p>
                      With their competent and calm approach, Hey Nova has been an integral part of our technology team.  They are professional, accountable, and realistic regarding the scope of a project. I recommend them to anyone I meet.
                    </p>
                  </Quote>
                </TestimonialQuote>
                <TestimonialDetails>
                  <Name>Tessa McLoughlin</Name>
                  <JobPosition>Founder/Director, KWENCH</JobPosition>
                  <Place>Victoria, BC</Place>
                </TestimonialDetails>
              </Content>
            </ContentCenter>
          </Flex>
        </div>

        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <Flex>
            <ImgCenter>
              <Img alt="Brainbox Accessibility Workshop Screenshot" fadeIn={false} role="presentation" fluid={data.Brainbox.childImageSharp.fluid} />
            </ImgCenter>
            <ContentCenter>
              <Content>
                <TestimonialQuote>
                  <QuoteLeft>
                    <Img alt="Left Quote" fadeIn={false} role="presentation" fluid={data.quote.childImageSharp.fluid} />
                  </QuoteLeft>
                  <Quote>
                    <p>Our overall experience with Hey Nova was, in short, easy. They worked closely with us on large and small projects, while providing valuable insight to better our understanding of accessibility. They delivered all feedback in one go, which allowed us to be more efficient for faster client turnaround times. The owners, Kirsten and Bryony, really care about accessibility. Not only do they care about being compliant, but they care about the human aspect of accessibility and how it feels to someone with accessibility needs.</p>
                  </Quote>
                </TestimonialQuote>
                <TestimonialDetails>
                  <Name>Kris Nicolaou</Name>
                  <JobPosition>President, Brain Box</JobPosition>
                  <Place>Toronto, ON</Place>
                </TestimonialDetails>
              </Content>
            </ContentCenter>
          </Flex>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <Flex>
            <ImgCenter>
              <Img alt="Tipp Consulting Screenshot" role="presentation" fadeIn={false} fluid={data.Tipp.childImageSharp.fluid} />
              <SiteLink href="http://tippconsulting.com/" target="_blank">View site</SiteLink>
            </ImgCenter>
            <ContentCenter>
              <Content>
                <TestimonialQuote>
                <QuoteLeft>
                  <Img alt="Left Quote" fadeIn={false} role="presentation" fluid={data.quote.childImageSharp.fluid} />
                </QuoteLeft>
                <Quote>
                  <p>I am very pleased with my new website. Hey Nova was lovely to work with.
                  The project was completed within reasonable budget and timeline.
                  Bryony and Kirsten are talented, pragmatic and attentive to client needs.</p>
                </Quote>
                </TestimonialQuote>
                <TestimonialDetails>
                  <Name>Aggie Mikulski</Name>
                  <JobPosition>Principal, Tipp Consulting</JobPosition>
                  <Place>Edmonton, AB</Place>
                </TestimonialDetails>
              </Content>
            </ContentCenter>
          </Flex>
        </div>
      </AliceCarousel>
    </TestimonialSection>
  )
}
export default Testimonial
