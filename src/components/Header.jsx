import React, { Fragment } from "react";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Menu users={props.users} />
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
