import React from "react"
import styled from "@emotion/styled"
import { PopupText } from "react-calendly"
import Planet1 from "../../images/group-33.svg"
import Astro1 from "../../images/group-32.svg"
import Astro2 from "../../images/group-8.svg"
import Planet2 from "../../images/group-20.svg"
import Astro3 from "../../images/group-27.svg"

const ServiceSection = styled.section`
  color: #0a2239;
  padding-bottom: 0;
`
const ContentContainer = styled.div`
  max-width: 1288px;
  padding: 100px 20px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    min-height: 778px;
  }
  @media (max-width: 768px) {
    padding-top: 115px;
  }
  h1 {
    max-width: 600px;
  }
`
const RowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 4rem;
  flex-wrap: wrap;
`

const NonStickyBox = styled.div`
  position: relative;
  padding-right: 46px;
  padding-top: 15px;
  max-width: 494px;
  height: auto;
  h3::before {
    display: inline-block;
    content: "";
    border-top: 0.28rem solid #d5330d;
    width: 36px;
    margin-right: 0.75rem;
    transform: translateY(-0.25rem);
  }
  h3 {
    font-family: Stolzl;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.44px;
  }
  p {
    font-family: Stolzl;
    font-size: 39px;
    font-weight: 300;
    line-height: 1.36;
    letter-spacing: -0.78px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`
const PhotoBox = styled.div`
  margin: auto;
  vertical-align: center;
  position: relative;
  display: inline-block;

  .Single {
    display: block;
    padding: 2.5rem 4.5rem 2.5rem 4.5rem;
    margin: auto;
  }
  .Planet {
    position: absolute;
    max-width: 249px;
    top: 0;
    left: 0;
    padding-right: 2rem;
  }
  .Astro {
    position: relative;
    max-width: 100%;
    padding: 10rem 0 2rem 9rem;
  }
`

const BookLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  h5 {
    max-width: fit-content;
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    padding-top: 2rem;
    letter-spacing: 0.1px;
  }
  @media (max-width: 768px) {
    h5 {
      font-size: 17px;
    }
  }
`
const Line = styled.div`
  position: relative;
  content: "";
  background: #d5330d;
  height: 1.5px;
  width: 35px;
  margin: 0 10px;
  transform: translate(8px, 46px);

  ::after {
    transform: translate(30px, -3px);
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 8px solid #d5330d;
  }
  @media (max-width: 768px) {
    transform: translate(8px, 42px);
  }
`
const ListBox = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding-left: 3.5rem;
  }
  li {
    position: relative;
    padding-left: 30px;
  }
  li::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0fa3b1;
    position: absolute;
    left: 0;
    transform: translateY(11px);
  }
  p {
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.25px;
  }
`
const ServiceHeader = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 4rem;
  h2 {
    font-family: Stolzl;
    font-size: 50px;
    line-height: 1.28;
    letter-spacing: -1px;
    margin-bottom: 0.75rem;
    color: #0c7489;
    font-weight: 400;
  }
  .Subheader {
    font-family: Stolzl;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.33;
  }
`
const ServiceFooter = styled.div`
  max-width: 761px;
  text-align: center;
  margin: 0 auto;
  p {
    font-family: Ubuntu;
    font-size: 25px;
    line-height: 1.44;
    letter-spacing: 0.31px;
  }
`
const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #0a2239;
  margin: 20px 0 20px;
  font-family: Ubuntu;
`
const Button = styled.div`
  a {
    background-color: #d5330d;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #fff;
    font-family: Stolzl;
    padding: 14px 24px;
    text-decoration: none;
    margin-top: 20px;
    border: none;
    display: inline-block;
  }
`
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 677px;
  padding-top: 0;
  h4 {
    width: 50%;
    font-family: Ubuntu;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.38px;
    color: #0a2239;
  }
  p {
    font-weight: 400;
    line-height: 1.5;
    margin-top: 0;
    font-family: Ubuntu;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.25px;
  }
  .temp {
    width: 100%;
  }
  .book {
    font-family: Ubuntu;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    padding-top: 2rem;
    letter-spacing: 0.1px;
  }
  a {
    color: inherit;
    max-width: 100%;
    font-family: Ubuntu;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
  }
`

function Service() {
  return (
    <ServiceSection>
      <ContentContainer>
        <ServiceHeader>
          <h2>Our E-Commerce Services</h2>
          <p class="Subheader">
            We will tailor our services to meet your needs, depending on whether
            you are a fresh start-up or and a steadfast company making updates.
          </p>
        </ServiceHeader>
        <RowContainer>
          <NonStickyBox>
            <h3>CUSTOM WEBSITE DESIGN</h3>
            <p>Starting from nothing and designing your dream site</p>
            <PhotoBox>
              <img
                src={Planet1}
                alt="Planet1"
                role="presentation"
                class="Planet"
              />
              <img
                src={Astro1}
                alt="Planet1"
                role="presentation"
                class="Astro"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              If you are starting scratch and envision something truly unique to
              you, we share that vision. We design stunning websites that speak
              to your target audience while providing the best user experience.
            </P>
            <P>We offer:</P>
            <ListBox>
              <ul>
                <li>
                  <p>
                    Initial branding for new businesses if needed, with brand
                    guidelines to use on all digital platforms.
                  </p>
                </li>
                <li>
                  <p>Wireframes and content layout</p>
                </li>
                <li>
                  <p>
                    Content strategy to help you determine what information
                    structure you need to provide on your site
                  </p>
                </li>
                <li>
                  <p>
                    A unique design just for you tailored to your brand,
                    following accessibility and UX best practices so your store
                    is usable by everyone.
                  </p>
                </li>
                <li>
                  <p>
                    A website design that speaks to your target audience and
                    engages your customers.
                  </p>
                </li>
              </ul>
              <a href="../contact">
                <BookLink>
                  <h5>Book a free consult to learn more</h5>
                  <Line />
                </BookLink>
              </a>
            </ListBox>
          </FlexBox>
        </RowContainer>
        <RowContainer>
          <NonStickyBox>
            <h3>E-COMMERCE CODING</h3>
            <p>
              Taking that design and building it with the best code practices
            </p>
            <PhotoBox>
              <img
                src={Astro2}
                alt="Astro2"
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              Once we have nailed down the design of your dreams, will we code
              it up so that you can edit each section in Shopify and control
              your own content? Our websites are coded to the highest quality
              always.
            </P>
            <P>We offer:</P>
            <ListBox>
              <ul>
                <li>
                  <p>
                    A full-stack build from start to finish, we handle it all in
                    house.
                  </p>
                </li>
                <li>
                  <p>
                    With custom coding, we can make sure your website is extra
                    fast to load and SEO optimized!
                  </p>
                </li>
                <li>
                  <p>
                    We will ensure it is mobile friendly so that it looks and
                    works amazingly on every device.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    We can help you avoid using unnecessary plugins that slow
                    down your computer by coding it from scratch, or
                    recommending the best plugins for your needs that won’t hurt
                    your user experience.
                  </p>
                </li>
                <li>
                  <p>
                    With proper code practices, we will build your website to
                    meet accessibility standards to ensure it is usable by
                    everyone, no matter their limitations.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Once we are done, we are always here for support to fix
                    bugs, add extras or answer your questions.{" "}
                  </p>
                </li>
              </ul>
              <a href="../contact">
                <BookLink>
                  <h5>Book a free consult to learn more</h5>
                  <Line />
                </BookLink>
              </a>
            </ListBox>
          </FlexBox>
        </RowContainer>
        <RowContainer>
          <NonStickyBox>
            <h3>THEME CUSTOMIZATION</h3>
            <p>Editing your current shopify theme to better suit your needs</p>
            <PhotoBox>
              <img
                src={Planet2}
                alt="Planet1"
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              Already purchased a theme and not ready to let go of it? We can
              work on any theme to help bring it to the highest standards and
              meet all your unique needs that generic themes rarely can.
            </P>
            <P>We offer:</P>
            <ListBox>
              <ul>
                <li>
                  <p>
                    Design tweaks, to give your website that unique edge so that
                    it stands out from the crowd of other themes.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Theme code editing to bring your website up to the level you
                    need, with improved user experience.
                  </p>
                </li>
                <li>
                  <p>
                    Help with installing plugins and recommending the best
                    options.
                  </p>
                </li>
                <li>
                  <p>
                    Theme auditing to test for page loading speed,
                    accessibility, and user experience.{" "}
                  </p>
                </li>
              </ul>
              <a href="../contact">
                <BookLink>
                  <h5>Book a free consult to learn more</h5>
                  <Line />
                </BookLink>
              </a>
            </ListBox>
          </FlexBox>
        </RowContainer>
        <RowContainer>
          <NonStickyBox>
            <h3>E-COMMERCE CONSULTING</h3>
            <p>Helping you solve any issues you face no matter how big</p>
            <PhotoBox>
              <img
                src={Astro3}
                alt="Astro3"
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              You may already have a team or theme that you love, and that’s
              okay. We can work alongside you and your team to consult on the
              best user-experience and e-commerce practices, to reach your goal
              together.
            </P>
            <P>We offer:</P>
            <ListBox>
              <ul>
                <li>
                  <p>
                    Training on how to customize your theme within Shopify and
                    make the most out of it.
                  </p>
                </li>
                <li>
                  <p>
                    User experience consulting, to guide you or your team on
                    best practices.
                  </p>
                </li>
                <li>
                  <p>
                    Accessibility consulting, to help you or your team bring
                    your website up to meet accessibility standards.
                  </p>
                </li>
                <li>
                  <p>
                    Design consultation so that you can get a little expert
                    advice on how to make your website as beautiful as it can
                    be.
                  </p>
                </li>
              </ul>
              <a href="../contact">
                <BookLink>
                  <h5>Book a free consult to learn more</h5>
                  <Line />
                </BookLink>
              </a>
            </ListBox>
          </FlexBox>
        </RowContainer>
        <ServiceFooter>
          <p>
            Not sure what you need yet? That’s okay! We can help you determine
            the best course of action after a free session to better understand
            your needs.
          </p>
          <Button>
            <PopupText
              text="Book a Free Consult"
              url="https://calendly.com/hey-nova/free-consultation"
            />
          </Button>
        </ServiceFooter>
      </ContentContainer>
    </ServiceSection>
  )
}
export default Service
