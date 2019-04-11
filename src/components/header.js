import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props) => (
  <header className="site-header">
   {props.children}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
