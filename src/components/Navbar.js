import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container">
          <a className="navbar-brand myfont px-3" href="#">
            <h2>APPARELS POINT</h2>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="input-group ">
              <input
                type="text"
                className="form-control montserrat mt-1"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary mt-1"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
            <a href="#" className="link-underline link-underline-opacity-0 montserrat"><i className="bi bi-person-circle"></i>Profile</a>
            <a href="#" className="btn btn-link link-underline link-underline-opacity-0 montserrat"><i className="bi bi-suit-heart-fill"></i>Wishlist</a>
            <a href="#" className="btn btn-link link-underline link-underline-opacity-0 montserrat"><i className="bi bi-bag-fill"></i>Cart</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
