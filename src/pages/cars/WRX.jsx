import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const WRX = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 9,
      name: "2024 WRX",
      price: 32735,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'Performence',
    });
  };

  return (
    <div className="WRX">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RUH_default_frontwheelturned_left?$1950wa$" alt="WRX Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 WRX</h1>
            <h2>Base</h2>
            <p>Starting at</p>
            <h3>$32,735</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>26/19</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Symmetrical All-Wheel Drive</li>
              <li>271-hp 2.4-liter turbocharged SUBARU BOXER® engine</li>
              <li>6-speed manual transmission</li>
              <li>SUBARU STARLINK® 11.6-inch Multimedia Plus</li>
              <li>Vehicle Dynamics Control with Active Torque Vectoring</li>
              <li>EyeSight® Driver Assist Technology</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Base Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 5 WRX Trims</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WRX;