import React from "react"
import "../pages/styles.scss"

const TimelineEntry = ({ image, time, title, text }) => (
  <div className="columns">
    <div className="column is-4 is-offset-1">
      <figure class="image is-4by3">
        <img src={image} />
      </figure>
    </div>
    <div className="column is-1 is-paddingless timeline"></div>
    <div className="column is-5">
      <h2 className="subtitle is-5">{time}</h2>
      <h1 className="title is-5">{title}</h1>
      <p>{text}</p>
    </div>
  </div>
)

export default TimelineEntry
