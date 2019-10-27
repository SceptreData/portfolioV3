import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkItem from "../components/WorkItem"

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Work and Projects</h1>
    <section className="work-professional">
      <h2>Companies I've worked with</h2>
      <div className="work-items">
        <WorkItem
          title="Revolver"
          imgName="rv-logo.png"
          url="https://revolver-dev.netlify.com"
          year="2019"
        />
        <WorkItem
          title="Game City"
          imgName="gc-logo.png"
          url="https://thegamecity.ca"
          year="2018"
        />
      </div>
    </section>

    <section className="work-personal">
      <h2>Personal Projects</h2>
      <div className="work-items">
        <WorkItem
          title="NAIT Game Creators Space"
          imgName="gcs-screen.png"
          url="https://gcs-nait.netlify.com"
          year="2018"
        />
        <WorkItem
          title="Starkiller"
          imgName="starkiller-thumb.JPG"
          url="https://github.com/SceptreData/starkiller"
          year="2017"
        />
      </div>
    </section>
  </Layout>
)

export default SecondPage
