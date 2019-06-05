import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! I'm David. I do Front-end Development and Design.</h1>
    <p>
      I'm a web developer who loves making cool stuff. I currently live in the
      beautiful city of Edmonton, Alberta.
    </p>
    <p>
      Get in touch with me on{" "}
      <a href="https://twitter.com/DavidFBergeron">Twitter</a> or hit me up by{" "}
      <a href="mailto: david.f.bergeron@gmail.com">e-mail.</a>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
