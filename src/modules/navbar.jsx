
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
  const { cartItems } = useCart();

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <Link to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Subaru_logo.svg/1024px-Subaru_logo.svg.png"
            width="200"
            height="30"
            className="d-inline-block align-top"
            alt="Subaru"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/store" className="nav-link">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/retailers" className="nav-link">
                Retailers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;