/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#2d3436"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="/Home">NoQueue</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div style={{marginRight:"40px"}}><AddShoppingCartIcon color="primary" fontSize="large" /></div>
          

        </div>
      </nav>
    </>
  );
};

export default Navbar;
