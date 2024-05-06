import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const Impreza = () => {
  const { addToCart } = useCart();

  return (
    <div className="Impreza">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RLG_default_frontwheelturned_left?$1950wa$" alt="Impreza Base Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 Impreza</h1>
            <h2>Base</h2>
            <p>Starting at</p>
            <h3>$22,995</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>34/27</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Symmetrical All-Wheel Drive</li>
              <li>Standard EyeSight® Driver Assist Technology</li>
              <li>SUBARU STARLINK® Multimedia with Apple CarPlay® and Android Auto™ integration</li>
              <li>Dual-zone automatic climate control</li>
              <li>LED Steering Responsive Headlights</li>
              <li>Roof crossbar mounting points</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Base Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 3 Impreza Trims</button>
            <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impreza;