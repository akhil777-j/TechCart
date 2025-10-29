import React from 'react';

// 🖼 Import images from your local folder
import laptop1 from "../assets/Hero/Hp15.webp";
import laptop2 from "../assets/Hero/Drift.webp";
import watch1 from "../assets/Hero/pococ71.webp";
import watch2 from "../assets/Hero/Zebronics.webp";
import headphone1 from "../assets/Hero/Ai+PULSE.webp";
import headphone2 from "../assets/Hero/baot.webp";
import laptop3 from "../assets/Hero/appleMacbook.webp";
import watch3 from "../assets/Hero/fireboult.webp";

import './OurProducts.css';

const OurProducts = () => {
  const products = [
    { id: 1, name: 'HP 15s Ryzen 5 ', image: laptop1 },
    { id: 2, name: 'Drift SmartWatch', image: laptop2 },
    { id: 3, name: 'Poco C71 ', image: watch1 },
    { id: 4, name: 'Zebronics', image: watch2 },
    { id: 5, name: 'AI Plus', image: headphone1 },
    { id: 6, name: 'boAt Rockerz Bluetooth Headphones', image: headphone2 },
    { id: 7, name: 'Apple MacBook Air M2', image: laptop3 },
    { id: 8, name: 'Fire-Boltt Smartwatch', image: watch3 },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Our Products</h2>

      <div className="row g-4">
        {products.map((item) => (
          <div className="col-6 col-md-3" key={item.id}>
            <div className="card border-0 shadow-sm h-100 text-center">
              <img
                src={item.image}
                className="card-img-top img-fluid p-3"
                alt={item.name}
                style={{ height: '180px', objectFit: 'contain', borderRadius: '10px' }}
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold">{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
