import React from "react"
import styled from "@emotion/styled"

export default function Line(props) {
  return (
    <Svg
      width="4"
      height="9000"
      viewBox="0 0 4 9000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mobile"
    >
      <line
        x1="2.15234"
        y1="0.984863"
        x2="2.15234"
        y2="9000"
        stroke="#D5330D"
        stroke-width="3"
        stroke-dasharray="14 14"
      />
    </Svg>
  )
}

const Svg = styled.svg`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 1000px) {
    height: 5000px;
    line {
      y2: 5000px;
    }
  }
`
