import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Profiles from "./Profiles";
const Menu = (props) => {
  return (
    <Fragment>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lifecycle">
            Life Cycle
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            {props.profile.username}
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Profiles(Menu);
