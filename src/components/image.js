import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1500) {
                #  Enable this when building for optimized images
                ...GatsbyImageSharpFluid_withWebp
                # ...GatsbyImageSharpFluid_withWebp_tracedSVG
                # ...GatsbyImageSharpFluid_tracedSVG
                # ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (name && name.includes("/")) {
        const path = name.split("/")
        name = path[path.length - 1]
      }
      const img = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === name
      )

      if (!img) {
        return null
      }
      return <Img fluid={img.node.fluid} />
    }}
  />
)

export default Image
