import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, GitHub, Users, Code } from "react-feather"

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
                to="/learnCode"
                className="lined-link"
                activeClassName="active"
              >
                {" "}
                <Code /> <span> Learn Code </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="https://belizecodingclub.org/"
                className="lined-link"
                activeClassName="active"
                target="_blank"
              >
                {" "}
                <Users /> <span> Coding Club </span>{" "}
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
