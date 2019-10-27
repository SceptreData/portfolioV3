import React, { Component } from "react"
import Image from "./image"

const WorkItem = ({ title, imgName, year, url, description }) => {
  return (
    <section class="work-item">
      <a href={url ? url : ""}>
        <Image name={imgName} />
      </a>
      {description && <p>{description}</p>}
      {year && <time>{year}</time>}
    </section>
  )
}

export default WorkItem
