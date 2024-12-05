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
      <div class="featured-work-card-image-container">
        <Img
          alt=""
          role="presentation"
          fadeIn={false}
          className="img"
          fluid={image}
        />
      </div>
      <span className="title">{title}</span>
    </a>
  )
}

export default WorkCard
