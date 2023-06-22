import React from "react"
import styled from "@emotion/styled"

export function Button(props) {
  const { children, ...rest } = props

  return <Btn {...rest}>{children}</Btn>
}

const Btn = styled.button`
  padding: 18px 37px;
  background-color: #d5330d;
  width: max-content;
  font-family: Stolzl;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  border: none;
  text-transform: uppercase;
  transition: all 200ms;
  cursor: pointer;
  &:focus {
    outline: 4px solid hsla();
  }
  &:hover {
    filter: grayscale(15%);
  }
`
