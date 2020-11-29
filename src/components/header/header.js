import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleTheamEmmiter, theamDark }) => {
  const onToggleTheam = (toggleTheamEmmiter) => {
    toggleTheamEmmiter();
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-sm ${
          theamDark ? "navbar-dark bg-info" : "navbar-light bg-primary"
        }`}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav mr-auto`}>
            <li className="nav-item active">
              <Link className="nav-link font-weight-bold" exact="true" to="/">
                Weather
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link font-weight-bold"
                exact="true"
                to="/favorites"
              >
                Favorites
              </Link>
            </li>
        <button
          type="button"
          className={`${theamDark ? "btn btn-light" : "btn btn-secondary"}`}
          onClick={() => onToggleTheam(toggleTheamEmmiter)}
        >
          theam
        </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
