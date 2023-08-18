import React from "react"
import "../styles/styles.css"

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {boolean?} props.reverse
 */
export function Group({ children, reverse }) {
  return (
    <ul className="work-grid" data-order-grid={reverse ? "reverse" : null}>
      {children}
    </ul>
  )
}
