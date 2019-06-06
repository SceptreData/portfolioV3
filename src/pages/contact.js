import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      If you want to get in touch, please contact me through the email below. I
      would love to hear from you!
    </p>
    <p>
      <a href="mailto:david.f.bergeron@gmail.com">david.f.bergeron@gmail.com</a>
    </p>
  </Layout>
)

export default SecondPage
