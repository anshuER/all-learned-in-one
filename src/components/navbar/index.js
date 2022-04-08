import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const CartPriceSeletecor = useSelector((state) => state.cart.cartItems);
 // console.log("nav=", CartPriceSeletecor);
  const totalItem = CartPriceSeletecor.reduce(
    (ini, curr) => ini + curr.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BASICS
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link" href="#">
                  shop
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/to-do-list" className="nav-link" href="#">
                  to-do-list
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/fetching" className="nav-link" href="#">
                  fetching
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span
          style={{
            color: "white",
            paddingTop: "10px",
            paddingRight: "20px",
            fontSize: "24px",
          }}
          className="fas"
        >
          <span onClick={() => navigate("/cart")}>&#xf07a;</span>
          <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
            {totalItem}
          </span>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
