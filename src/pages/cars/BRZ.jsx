import React from 'react';
import "../../App.css"
import { useCart } from '../../modules/CartContext';

const BRZ = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 8,
      name: '2024 BRZ',
      price: 30195,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'Performence',
    });
  };

  return (
    <div className="BRZ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 image-column">
            <img src="https://s7d1.scene7.com/is/image/scom/RZR_default_frontwheelturned_left?$1950wa$" alt="BRZ Premium Image" />
          </div>
          <div className="col-md-6 info-column">
            <h1>The 2024 BRZ</h1>
            <h2>Premium</h2>
            <p>Starting at</p>
            <h3>$30,195</h3>
            <p>MSRP1</p>
            <p>MPG up to</p>
            <h3>27/20</h3>
            <p>(Hwy/City)2</p>
            <ul>
              <li>Track-tested suspension and Torsen® limited-slip differential</li>
              <li>228-hp 2.4-liter SUBARU BOXER® engine</li>
              <li>SUBARU STARLINK® Multimedia with standard Apple CarPlay® and Android Auto™ integration</li>
              <li>EyeSight® Driver Assist Technology</li>
              <li>Keyless Access with Push-Button Start</li>
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>View All Premium Features</button>
            <button type="button" className="btn btn-lg btn-primary" disabled>Compare the 3 BRZ Trims</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BRZ;