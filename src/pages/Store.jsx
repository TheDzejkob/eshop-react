import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Store() {

  const vehicles = [
    {
      id: 1,
      name: '2024 Crosstrek',
      price: 25195,
      image: 'https://s7d1.scene7.com/is/image/scom/CTK_default_nav-6?$400w$',
      vehicleType: 'SUV'
    },
    {
      id: 2,
      name: '2024 Forester',
      price: 27095,
      image: 'https://s7d1.scene7.com/is/image/scom/FOR_default_nav-5?$400w$',
      vehicleType: 'SUV'
    },
    {
      id: 3,
      name: '2024 Outback',
      price: 28895,
      image: 'https://s7d1.scene7.com/is/image/scom/OBK_default_nav-5?$400w$',
      vehicleType: 'SUV'
    },
    {
      id: 4,
      name: '2024 Ascent',
      price: 34395,
      image: 'https://s7d1.scene7.com/is/image/scom/ASC_default_nav-5?$400w$',
      vehicleType: 'SUV'
    },
    {
      id: 5,
      name: '2024 Solterra',
      price: 44950,
      image: 'https://s7d1.scene7.com/is/image/scom/SOL_default_nav-2?$400w$',
      vehicleType: 'SUV'
    },
    {
      id: 6,
      name: '2024 Impreza',
      price: 22995,
      image: 'https://s7d1.scene7.com/is/image/scom/IMP_default_nav-5?$550w$',
      vehicleType: 'Car'
    },
    {
      id: 7,
      name: '2024 Legacy',
      price: 24895,
      image: 'https://s7d1.scene7.com/is/image/scom/LEG_default_nav-5?$550w$',
      vehicleType: 'Car'
    },
    {
      id: 8,
      name: '2024 BRZ',
      price: 22995,
      image: 'https://s7d1.scene7.com/is/image/scom/BRZ_default_nav-4?$550w$',
      vehicleType: 'Performance'
    },
    {
      id: 9,
      name: '2024 WRX',
      price: 24895,
      image: 'https://s7d1.scene7.com/is/image/scom/WRX_default_nav-6?$550w$',
      vehicleType: 'Performance'
    }
  ];

  const [filterBy, setFilterBy] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);

  const handleFilterSelect = (filter) => {
    setFilterBy(filter);
    setMaxPrice(null);
    setVehicleType(null);
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    if (filterBy === 'Price' && maxPrice) {
      return vehicle.price <= maxPrice;
    }
    if (filterBy === 'Vehicle type' && vehicleType) {
      return vehicle.vehicleType === vehicleType;
    }
    return true; 
  });

  const renderVehicleSection = (title, vehicles) => {
    return (
      <div>
        <h4 className="store-nadpis">{title}</h4>
        <div className="container">
          <div className="row">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="col-md-6 mb-3">
                <div className="card">
                  <img className="card-img-top" src={vehicle.image} alt="Vehicle" />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text"><span className="text-muted">Starting at </span>${vehicle.price}</p>
                    <Link to={`/vehicle/${vehicle.id}`} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="Store">
      <div className="text-left dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter by
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={() => handleFilterSelect('Price')}>Price</a>
          <a className="dropdown-item" href="#" onClick={() => handleFilterSelect('Vehicle type')}>Vehicle type</a>
          <a className="dropdown-item" href="#" onClick={() => handleFilterSelect(null)}>Clear Filter</a>
        </div>
      </div>

      {filterBy === 'Price' && (
        <div className="my-3">
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice || ''}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)}
          />
        </div>
      )}

      {filterBy === 'Vehicle type' && (
        <div className="my-3">
          <select
            value={vehicleType || ''}
            onChange={(e) => setVehicleType(e.target.value || null)}
          >
            <option value="">Select vehicle type</option>
            <option value="SUV">SUV</option>
            <option value="Car">Car</option>
            <option value="Performance">Performance</option>
          </select>
        </div>
      )}

      {filterBy ? (
        renderVehicleSection('Filtered Vehicles', filteredVehicles)
      ) : (
        <div>
          {renderVehicleSection('SUVs', filteredVehicles.filter(vehicle => vehicle.vehicleType === 'SUV'))}
        {renderVehicleSection('Cars', filteredVehicles.filter(vehicle => vehicle.vehicleType === 'Car'))}
        {renderVehicleSection('Performance', filteredVehicles.filter(vehicle => vehicle.vehicleType === 'Performance'))}
      </div>
      )}
    </div>
  );
}

export default Store;