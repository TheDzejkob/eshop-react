import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const Solterra = () => {
  const { addToCart } = useCart();

  return (
    <div className="Solterra">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/REJ_default_frontwheelturned_left?$1950wa$" alt="Solterra Premium Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 Solterra</h1>
            <h2>Premium</h2>
            <p>Starting at</p>
            <h3>$44,995</h3>
            <p>MSRP1</p>
            <p>MPGe up to</p>
            <h3>94/114</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>StarDrive® all-electric drivetrain with 72.8 kWh battery capacity</li>
              <li>Symmetrical All-Wheel Drive</li>
              <li>8.3 inches of ground clearance</li>
              <li>X-MODE® with Downhill Assist Control</li>
              <li>EyeSight® Driver Assist Technologies</li>
              <li>Blind-Spot Monitor</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Premium Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 3 Solterra Trims</button>
            <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solterra;