import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 style={{ textAlign: "center" }}>About Me, and what I'm good at</h1>

    <div className="skills">
      <section className="core">
        <h2>Core</h2>
        <ul>
          <li>HTML5 / CSS3</li>
          <li>ES6 Javascript</li>
          <li>Mobile Design</li>
          <li>Node.js</li>
          <li>Lua</li>
          <li>Python</li>
          <li>C</li>
        </ul>
      </section>

      <section className="libraries">
        <h2>Libraries</h2>
        <ul>
          <li>React.js</li>
          <li>Gatsby.js</li>
          <li>Bootstrap</li>
          <li>Wordpress</li>
          <li>Gulp</li>
          <li>GraphQL</li>
          <li>Love2D</li>
        </ul>
      </section>
    </div>

    <div className="self-indulgent-drivel">
      <p>
        I'm David Bergeron, a web developer from Edmonton, Alberta. When I'm not
        fiddling with web technologies you can find me playing racquet sports,
        or paying way too much for cat food. Come find me on{" "}
        <a href="https://twitter.com/DavidFBergeron">Twitter!</a>
      </p>
      <p>
        It's cliche to mention, but I'm passionate about development and design.
        Someday I would like to open my own business. The tools of my dark trade
        are Javascript, CSS and HTML5. These days you can usually find me
        building sites with the amazing{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby.js.</a>
      </p>
    </div>
  </Layout>
)

export default SecondPage
