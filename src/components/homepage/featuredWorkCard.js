import React from "react"
import cx from "classnames"
import Img from "gatsby-image"
import "./styles/styles.css"

const WorkCard = ({ image, title }) => {
  return (
    <a
      href="/ourwork"
      className={cx([
        "featured-work-card",
        title.replaceAll(" ", "-").toLowerCase(),
      ])}
    >
      <div>
        <Img
          alt=""
          role="presentation"
          fadeIn={false}
          className="img"
          fluid={image}
        />
        <span className="title">{title}</span>
      </div>
    </a>
  )
}

export default WorkCard
