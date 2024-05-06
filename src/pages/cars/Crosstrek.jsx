import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const Crosstrek = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: '2024 Crosstrek',
      price: 25195,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'SUV',
    });
  };

  return (
    <div className="Crosstrek">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RRD_default_frontwheelturned_left?$1950wa$" alt="Crosstrek Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>All-New 2024 Crosstrek</h1>
            <h2>Base</h2>
            <p>Starting at</p>
            <h3>$25,195</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>34/27</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Symmetrical All-Wheel Drive</li>
              <li>Standard EyeSight® Driver Assist Technology</li>
              <li>8.7 inches of ground clearance</li>
              <li>STARLINK Multimedia with Apple CarPlay® and Android Auto™ integration</li>
              <li>17-inch dark gray-finish alloy wheels</li>
              <li>Dual-zone automatic climate control</li>
            </ul>
            <button type="button" class="btn btn-lg btn-primary" disabled>View All Base Features</button>
            <button type="button" class="btn btn-lg btn-primary" disabled>Compare the 5 Crosstrek Trims</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crosstrek;