import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ Import cart context

// ⌚ Import watch images
import CollecCore from "../assets/Hero/CollecCore.webp";
import Drift from "../assets/Hero/Drift.webp";
import Fastrack from "../assets/Hero/Fatstrack.webp";
import Fireboult from "../assets/Hero/fireboult.webp";
import GameSir from "../assets/Hero/GameSir.webp";
import Realme from "../assets/Hero/Image3.png";
import Noise from "../assets/Hero/Noise.webp";
import Pebble from "../assets/Hero/Pebble.webp";

// 🕒 Watch data array
const watches = [
  { id: 1, name: "Apple Watch Series 9", price: 45999, image: CollecCore },
  { id: 2, name: "Samsung Galaxy Watch 6", price: 32999, image: Drift },
  { id: 3, name: "Noise ColorFit Pro 5", price: 4999, image: Fastrack },
  { id: 4, name: "boAt Wave Edge", price: 2999, image: Fireboult },
  { id: 5, name: "Fastrack Revolt FS2", price: 5499, image: GameSir },
  { id: 6, name: "Fire-Boltt Ninja Call 2", price: 3499, image: Realme },
  { id: 7, name: "Amazfit GTR 4", price: 16999, image: Noise },
  { id: 8, name: "Realme Watch 3 Pro", price: 6499, image: Pebble },
];

const Watches = () => {
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart from context

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-dark">
        ⌚ Trending Smartwatches
      </h2>
      <div className="row">
        {watches.map((watch) => (
          <div key={watch.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div
              className="card border-0 shadow-sm h-100 text-center"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #eef1f5 100%)",
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={watch.image}
                className="card-img-top p-3"
                alt={watch.name}
                style={{
                  height: "230px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{watch.name}</h5>
                <p className="card-text text-success fw-bold">
                  ₹{watch.price.toLocaleString("en-IN")}
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-dark px-4"
                    onClick={() => addToCart(watch)} // ✅ Add to Cart working
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
