import React, { Component } from "react"
import Image from "./image"

const WorkItem = ({ title, imgName, year, url, description }) => {
  return (
    <section>
      <a href={url ? url : ""}>
        <Image name={imgName} />
      </a>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {year && <time>{year}</time>}
    </section>
  )
}

export default WorkItem
