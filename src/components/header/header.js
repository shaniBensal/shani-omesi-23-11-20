import React, { Component } from "react";

const header = () => (
  <div>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Weather <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default header;
