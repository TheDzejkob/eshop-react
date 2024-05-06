import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';




const Ascent = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 4,
      name: '2024 Ascent',
      price: 34395,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'SUV',
    });
  };

  return (
    <div className="Ascent">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RCH_default_frontwheelturned_left?$1950wa$" alt="Ascent Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 Ascent</h1>
            <h2>Base 8-Passenger</h2>
            <p>Starting at</p>
            <h3>$34,395</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>26/20</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Symmetrical All-Wheel Drive with X-MODE®</li>
              <li>Three rows of flexible seating for 8 passengers</li>
              <li>Standard EyeSight® Driver Assist Technology</li>
              <li>SUBARU STARLINK® Multimedia with Apple CarPlay® and Android Auto™</li>
              <li>Raised roof rails</li>
              <li>18-inch alloy wheels</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Base 8-Passenger Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 8 Ascent Trims</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ascent;