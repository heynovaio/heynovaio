import React from "react"
import styled from "@emotion/styled"

/**
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 */
export function Button({ children, ...rest }) {
  return <Btn {...rest}>{children}</Btn>
}

const Btn = styled.button`
  padding: 18px 37px;
  background-color: var(--HN-Fuchsia);
  width: max-content;
  font-family: Stolzl;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  border: none;
  border-radius: 40px;
  text-transform: uppercase;
  transition: all 200ms;
  cursor: pointer;
  &:focus {
    outline: 4px solid hsla();
  }
  &:hover {
    filter: grayscale(20%);
  }
`
