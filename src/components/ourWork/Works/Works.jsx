import React from "react"
import "../styles/styles.css"
import cx from "classnames"
import Img from "gatsby-image"


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
export function Work({ image, link=null, background, title, className }) {
  if(link) return (
    <a href={link}
      className={cx([
        "work-card",
        title.replaceAll(" ", "-").toLowerCase(),
        className,
      ])}
    >
      <Img
        alt=""
        role="presentation"
        fadeIn={false}
        className="img"
        fluid={image}
      />
      {background && <img src={background} alt="presentation" className="bg" />}
      <span className="title">{title}</span>
    </a>
  )
  return (
    <div
      className={cx([
        "work-card",
        title.replaceAll(" ", "-").toLowerCase(),
        className,
      ])}
    >
      <Img
        alt=""
        role="presentation"
        fadeIn={false}
        className="img"
        fluid={image}
      />
      {background && <img src={background} alt="presentation" className="bg" />}
      <h6 className="title">{title}</h6>
    </div>
  )
}
