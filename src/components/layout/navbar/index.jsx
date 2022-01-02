import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, GitHub, Users, Code, Youtube } from "react-feather"

import { NavbarElement, NavbarList, NavbarLogo } from "./style"

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <NavbarLogo>
          <h3>
            <Link to="/">
              <span className="align-middle"> {siteTitle} </span>
            </Link>
          </h3>
        </NavbarLogo>
        <div className="main-navigation">
          <NavbarList>
            <li>
              <Link to="/" className="lined-link" activeClassName="active">
                {" "}
                <User /> <span> About </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/repositories"
                className="lined-link"
                activeClassName="active"
              >
                {" "}
                <GitHub /> <span> Github </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/works" className="lined-link" activeClassName="active">
                {" "}
                <Briefcase /> <span> Portfolio </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/channel/UCMsXEjXW1iH7wTAanqijH6w"
                className="lined-link"
                activeClassName="active"
                target="_blank"
              >
                {" "}
                <Youtube /> <span> YouTube </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="https://code.rodgetech.com/"
                className="lined-link"
                activeClassName="active"
                target="_blank"
              >
                {" "}
                <Code /> <span> Learn Code </span>{" "}
              </Link>
            </li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
