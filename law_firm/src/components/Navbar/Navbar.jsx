import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
        <img src={'./src/assets/Vector.png'} alt=""></img>
        IGSTUDIO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Attorneys
            </a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#">
              Practice Areas
            </a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>          
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Contact Now
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
