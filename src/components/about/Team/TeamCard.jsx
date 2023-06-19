import React from "react"
import styled from "@emotion/styled"
import Earth from "../assets/earth.svg"

export function TeamCard({ image, name, title, bio, location }) {
  return (
    <Card>
      <TeamImage src={image} loading="lazy" alt={name} />
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
  h3,
  h4 {
    margin: 0; /* Reseting default margin */
  }
`

const TeamImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
`

const Name = styled.h3`
  font-family: "Stolzl";
  font-style: normal;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.5px;
  color: #0a2239;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  color: #d5330d;
  margin: 1rem 0 !important;
`

const Desc = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: #0a2239;
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