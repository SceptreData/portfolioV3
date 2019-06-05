import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="logo">
      <Link to="/">
        <Image name="cartoon-portrait-small.png" />
      </Link>
    </div>

    <nav className="site-nav">
      <ul className="list-view">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
