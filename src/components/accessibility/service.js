import React from "react"
import styled from "@emotion/styled"
import { PopupText } from "react-calendly"
import LaptopPlanet from "../../images/laptop-planets.svg"
import AstroClipboard from "../../images/astro-clipboard.svg"
import Astros from "../../images/two-astronauts.svg"
import AstroSpace from "../../images/astro-space.svg"
import ProcessGraphic from "../../images/process-consulting.svg"
import { Link } from "gatsby"

const ServiceSection = styled.section`
  color: var(--HN-Indigo);
  padding-bottom: 0;
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
  h1 {
    max-width: 600px;
  }
`
const RowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 8rem;
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
    border-top: 0.28rem solid var(--HN-Fuchsia);
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
    margin-bottom: 40px;
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
    margin: auto;
  }
`
const BookLink = styled(Link)`
  width: 100%;
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  padding-top: 2rem;
  letter-spacing: 0.1px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
`
const Line = styled.span`
  content: "";
  background: var(--HN-Fuchsia);
  height: 1.5px;
  width: 35px;
  margin: 0px 10px 0;
  display: inline-block;
  vertical-align: middle;
  &::after {
    transform: translate(30px, -3px);
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 8px solid var(--HN-Fuchsia);
  }
`
const ListBox = styled.div`
  a {
    display: block;
    width: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0.5rem;
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
    font-weight: 500;
  }
  .Subheader {
    font-size: 18px;
    line-height: 1.7;
    color: var(--HN-Indigo);
    margin: 20px 0 20px;
    font-family: Ubuntu;
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
  color: var(--HN-Indigo);
  margin: 20px 0 20px;
  font-family: Ubuntu;
`
const Button = styled.div`
  a {
    background-color: var(--HN-Fuchsia);
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #fff;
    font-family: Stolzl;
    padding: 14px 24px;
    text-decoration: none;
    margin-top: 20px;
    border: none;
    border-radius: 25px;
    display: inline-block;
  }
  & > a:hover {
    filter: grayscale(20%);
  }
`
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 677px;
  padding-top: 0;
  h3 {
    font-family: Stolzl;
    font-weight: 400;
    margin-top: 15px;
  }
  h4 {
    width: 50%;
    font-family: Ubuntu;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.38px;
    color: var(--HN-Indigo);
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
    width: 100%;
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
          <h2>Our Services</h2>
          <p class="Subheader">
            Our general approach has produced resounding success; however, we
            don’t believe one size fits all so we tailor our services to meet
            your needs based on the requirements and size of your team.
          </p>
        </ServiceHeader>
        <RowContainer>
          <NonStickyBox>
            <h3>WORKSHOP/WEBINAR</h3>
            <p>
              An overview to get you started on the journey of accessibility
            </p>
            <PhotoBox>
              <img
                src={LaptopPlanet}
                alt="Laptop Planets"
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              We find the best way to kick off our accessibility training is to
              start with a comprehensive overview. This zoom based workshop gets
              your team looking at accessibility through an empathetic lens by
              expressing the impact of an inaccessible digital world. The WCAG
              2.1 guidelines can be overwhelming, so we break it down into
              people-friendly terms based on the stages in your build process so
              each team member knows their role in achieving accessibility.{" "}
            </P>
            <h3>They will learn:</h3>
            <ListBox>
              <ul>
                <li>
                  <p>Who accessibility impacts</p>
                </li>
                <li>
                  <p>
                    The WCAG 2.1 Accessibility Guidelines and what is needed to
                    meet them
                  </p>
                </li>
                <li>
                  <p>Best practices for building with accessibility in mind</p>
                </li>
                <li>
                  <p>
                    What tools and resources are needed to test for
                    accessibility
                  </p>
                </li>
                <li>
                  <p>Other tips and tricks that will help along the way</p>
                </li>
              </ul>
              <BookLink
                to="/contact"
                aria-label="Contact us to learn more about our webinars"
              >
                Contact us to learn more
                <Line role="presentation" />
              </BookLink>
            </ListBox>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>Process & Strategy</h3>
            <p>Holistically weave accessibility into your overall process</p>
            <PhotoBox>
              <img
                src={ProcessGraphic}
                alt=""
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              Weaving Accessibility into your current build process is key.
              Waiting until the end of a project to initiate it can be
              time-consuming and costly. Luckily, with our help, accessibility
              will be a practice so baked into your process that it becomes
              second nature to include. We teach your team how to involve it at
              every stage of the project process, from strategic planning,
              through all the UX, interface design, & development stages.{" "}
            </P>
            <h3>You will gain:</h3>
            <ListBox>
              <ul>
                <li>
                  <p>
                    Accessibility checklists for each major project milestone
                  </p>
                </li>
                <li>
                  <p>A collaborative team accessibility goal</p>
                </li>
                <li>
                  <p>Confidence in your inclusive strategy</p>
                </li>
                <li>
                  <p>A strategy that will save you time and money</p>
                </li>
              </ul>
              <BookLink
                to="/contact"
                aria-label="Contact us to learn more about our auditing services"
              >
                Contact us to learn more
                <Line role="presentation" />
              </BookLink>
            </ListBox>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>AUDITS & REPORTS</h3>
            <p>
              We give you an evaluation of your current level of accessibility
            </p>
            <PhotoBox>
              <img
                src={AstroClipboard}
                alt=""
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              Our audits map out all the accessibility errors on your
              product/application that need to be fixed to meet WCAG 2.1
              Guidelines and be legally AODA and ADA compliant. However, we
              believe that accessibility is best achieved when it goes beyond a
              compliancy checklist, so we include recommendations that may not
              necessarily fit into a specific WCAG list item. This leaves you
              with suggestions that improve not only accessibility but overall
              usability.
            </P>
            <h3>You will gain:</h3>
            <ListBox>
              <ul>
                <li>
                  <p>
                    An overall summary of the numbers or errors we discovered by
                    category
                  </p>
                </li>
                <li>
                  <p>
                    Extensive test results based on manual code review,
                    contrast, keyboard, and screen-reader testing
                  </p>
                </li>
                <li>
                  <p>How each issue can affect users</p>
                </li>
                <li>
                  <p>How to fix the issues</p>
                </li>
              </ul>
              <BookLink
                to="/contact"
                aria-label="Contact us to learn more about our auditing services"
              >
                Contact us to learn more
                <Line role="presentation" />
              </BookLink>
            </ListBox>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>MENTORSHIP & EDUCATION</h3>
            <p>
              We will be right by your side (virtually) as you and your team
              learn and grow
            </p>
            <PhotoBox>
              <img src={Astros} alt="" role="presentation" class="Single" />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              Every team is different, with different internal processes,
              different ways they like to learn, and varying understanding of
              accessibility. That is why we cater our mentorship approach to
              ensure they have the resources they need to empower them towards
              accessible design and development in the formats that best suit
              them. Whether this is regular meetings or detailed documentation,
              your team will complete their time with us fueled with both
              knowledge and compassion for accessibility, making it a daily
              practice in their work.
            </P>
            <BookLink
              to="/contact"
              aria-label="Contact us to learn more about our educational services"
            >
              Contact us to learn more
              <Line role="presentation" />
            </BookLink>
          </FlexBox>
        </RowContainer>

        <RowContainer>
          <NonStickyBox>
            <h3>ONGOING SUPPORT</h3>
            <p>We are just a call or email away, always!</p>
            <PhotoBox>
              <img
                src={AstroSpace}
                alt="Astro Space"
                role="presentation"
                class="Single"
              />
            </PhotoBox>
          </NonStickyBox>
          <FlexBox>
            <P>
              Real growth is never over. After your team is ready to start
              tackling accessibility internally, we will always remain a quick
              message away to answer any questions that come up during new
              projects. We know our training will have you feeling so confident
              you will rarely need this, but as the technology field is always
              evolving and changing it is nice to know we are here if you need
              us.
            </P>
            <BookLink
              to="/contact"
              aria-label="Contact us to learn more about our accessibility support"
            >
              Contact us to learn more
              <Line role="presentation" />
            </BookLink>
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
              url="https://calendly.com/hey-nova/free-consult"
            />
          </Button>
        </ServiceFooter>
      </ContentContainer>
    </ServiceSection>
  )
}
export default Service
