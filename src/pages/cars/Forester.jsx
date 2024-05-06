import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const Forester = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 2,
      name: "2024 Forester",
      price: 27095,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'SUV',
    });
  };
  
  return (
    <div className="Forester">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RFH_default_frontwheelturned_left?$1950wa$" alt="Forester Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 Forester</h1>
            <h2>Base</h2>
            <p>Starting at</p>
            <h3>$27,095</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>33/26</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Standard EyeSight® Driver Assist Technology</li>
              <li>SUBARU STARLINK® Multimedia with Apple CarPlay® and Android Auto™ integration</li>
              <li>LED Steering Responsive Headlights</li>
              <li>8.7 inches of ground clearance</li>
              <li>74.2 cubic feet of cargo volume</li>
              <li>Rear Seat Reminder System</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Base Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 6 Forester Trims</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forester;