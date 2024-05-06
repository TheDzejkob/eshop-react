import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const Outback = () => {
  const { addToCart } = useCart();

  return (
    <div className="Outback">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RDI_default_frontwheelturned_left?$1950wa$" alt="Outback Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 Outback</h1>
            <h2>Base</h2>
            <p>Starting at</p>
            <h3>$28,895</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>32/26</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Standard EyeSight® Driver Assist Technology</li>
              <li>LED Steering Responsive Headlights</li>
              <li>SUBARU STARLINK® Multimedia with Apple CarPlay® and Android Auto™</li>
              <li>8.7 inches of ground clearance</li>
              <li>Raised roof rails with integrated cross bars and tie-down points</li>
              <li>LED fog lights</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Base Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 9 Outback Trims</button>
            <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outback;