import React from "react"
import "../styles/styles.css"
import cx from "classnames"

/**
 * @typedef {object} WorkProps prop
 * @property {string} prop.image
 * @property {string?} prop.background
 * @property {string} prop.title
 * @property {string?} prop.className
 */

/**
 * @param {WorkProps} props
 * NOTE: the long one is the first one in the list.
 */
export function Work({ image, background, title, className }) {
  return (
    <div
      className={cx([
        "work-card",
        title.replaceAll(" ", "-").toLowerCase(),
        className,
      ])}
    >
      <img src={image} alt="" className="img" />
      {background && <img src={background} alt="presentation" className="bg" />}
      <h6 className="title">{title}</h6>
    </div>
  )
}
