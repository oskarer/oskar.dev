import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "front.png" }) {
        childImageSharp {
          fluid(maxWidth: 1577) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="hero-image"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Image
