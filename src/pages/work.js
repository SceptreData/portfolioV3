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
      <WorkItem
        title="Game City"
        imgName="cartoon-portrait-small.png"
        url="https://thegamecity.ca"
      />
    </section>

    <section className="work-personal">
      <h2>Personal Projects</h2>
      <WorkItem
        title="Game Creators Space"
        imgName="gcs-screen.png"
        url="https://gcs-nait.netlify.com"
        year="2017"
      />
      <WorkItem
        title="Starkiller"
        imgName="cartoon-portrait-small.png"
        url="https://github.com/SceptreData/starkiller"
        year="2017"
      />
    </section>
  </Layout>
)

export default SecondPage
