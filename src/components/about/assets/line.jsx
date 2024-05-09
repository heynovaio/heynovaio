import React from "react"
import styled from "@emotion/styled"

export default function Line({ height }) {
  const padd = 700
  return (
    <Svg
      width="4"
      height={`${height + padd}`}
      viewBox={`0 0 4 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mobile"
    >
      <line
        x1="2.15234"
        y1="0"
        x2="2.15234"
        y2={`${height + padd}`}
        stroke="#D70449"
        strokeWidth="3"
        strokeDasharray="14 14"
        style={{ transform: "translateY(-400px)" }}
      />
    </Svg>
  )
}

const Svg = styled.svg`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0px);
`
