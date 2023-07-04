import React from "react"
import s from "./styles.module.css"
import shortid from "shortid"

/**
 * @typedef {object} OurWorkProps props
 * @param {object} props
 * @param {object[]} props.works
 * @param {string} props.works.image
 * @param {string?} props.works.background
 * @param {string} props.works.title
 *
 * NOTE: the long one is the first one in the list.
 */
export function WorkGroup({ works }) {
  return (
    <ul>
      {works.map(({ image, background, title }) => (
        <li style={background && {}}>
          <img src={image} alt="title" />
          <h6>{title}</h6>
        </li>
      ))}
    </ul>
  )
}
