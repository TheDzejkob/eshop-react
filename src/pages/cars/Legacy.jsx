import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const Legacy = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 7,
      name: "2024 Legacy",
      price: 24895,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'Cars',
    });
  };


  return (
    <div className="Legacy">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RAG_default_frontwheelturned_left?$1950wa$" alt="Legacy Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 Legacy</h1>
            <h2>Base</h2>
            <p>Starting at</p>
            <h3>$24,895</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>35/27</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Standard EyeSight® Driver Assist Technology</li>
              <li>SUBARU STARLINK® Multimedia with Apple CarPlay® and Android Auto™ integration</li>
              <li>LED Steering Responsive Headlights</li>
              <li>Active Torque Vectoring</li>
              <li>17-inch machine-finish alloy wheels</li>
              <li>Rear-Vision Camera</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Base Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 5 Legacy Trims</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;