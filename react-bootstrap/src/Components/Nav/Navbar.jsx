import React from "react";
import "./nav.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container-fluid ">
          <a className="navbar-brand px-2" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link  " href="#">
                  Cabs
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link  " href="#">
                  Ferries
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link  " href="#">
                  Package
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link  " href="#">
                  Activity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
