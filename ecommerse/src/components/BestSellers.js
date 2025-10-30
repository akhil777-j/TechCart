import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mac from "../assets/Hero/MacbookAirM2.jpeg";
import Iphone from "../assets/Hero/start.jpeg";
import Sony from "../assets/Hero/SonyWh.jpeg";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "MacBook Air M2",
      price: "₹1,24,999",
      image: Mac,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "₹1,39,999",
      image: Iphone,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: "₹32,999",
      image: Sony,
    },
  ];

  return (
    <div className="container py-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-danger text-uppercase">Best Sellers</h2>
        <p className="text-muted">
          Our most loved and top-rated tech products.
        </p>
      </div>

      {/* Product Cards */}
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 d-flex">
            <div
              className="card border-0 shadow-sm flex-fill text-center"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Image container */}
              <div
                style={{
                  height: "280px", // consistent height for all images
                  backgroundColor: "#f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "85%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Card body */}
              <div className="card-body">
                <h5 className="fw-semibold mb-2">{product.name}</h5>
                <h6 className="fw-bold text-danger">{product.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
