import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="marquee">
      <Image name="mountains.png" />
    </div>
    <h1>
      Hi! I'm David. I'm a Front-end Developer, Designer, and full time nerd.
    </h1>
    <p>
      I'm a web developer who loves designing clean, friendly user interfaces.
      I'm currently living in the beautiful city of Edmonton, Alberta.
    </p>
    <p>
      Get in touch with me on
      <a href="https://twitter.com/DavidFBergeron"> Twitter</a> or hit me up by{" "}
      <a href="mailto: david.f.bergeron@gmail.com">e-mail.</a>
    </p>
  </Layout>
)

export default IndexPage
