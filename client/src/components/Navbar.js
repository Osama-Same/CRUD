import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mt-2 mt-lg-0 text-info" to={"/"}>
          CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "white" }} to={"/"}>
                Get User
              </Link>
            </li>
          </ul>
          <div className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search Name EN...."
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
