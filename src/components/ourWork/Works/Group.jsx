import React from "react"
import "../styles/styles.css"

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {boolean?} props.reverse
 */
export function Group({ children, reverse }) {
  return (
    <div className="work-grid" data-order-grid={reverse ? "reverse" : null}>
      {children}
    </div>
  )
}
