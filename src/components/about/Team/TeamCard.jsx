import React from "react"
import styled from "@emotion/styled"
import Earth from "../assets/earth.svg"
import Img from "gatsby-image"

export function TeamCard({ image, name, title, bio, location }) {
  return (
    <Card>
      <Img fluid={image} alt={name} />
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Desc>{bio}</Desc>
      <Location>
        <img src={Earth} role="presentation" />
        <p>{location}</p>
      </Location>
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  padding: 5px;
  background-color: white;
  width: 100%;
  max-width: 351px;
  margin: 0;
  img {
    border-radius: 10px;
    margin-bottom: 10px;
  }
`

const Name = styled.h3`
  font-family: "Stolzl";
  font-style: normal;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.5px;
  color: var(--HN-Indigo);
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 12px 0 0px;
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  color: var(--HN-Fuchsia);
  margin-bottom: 12px;
`

const Desc = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: var(--HN-Indigo);
  margin-bottom: 0.5rem;
`

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    margin: 0 !important;
  }
`
