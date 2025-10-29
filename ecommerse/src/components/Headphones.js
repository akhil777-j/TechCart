import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ Import context

// 🎧 Import headphone images
import Boat from "../assets/Hero/baot.webp";
import Sony from "../assets/Hero/headphone.png";
import Trigger from "../assets/Hero/HeadphonesMain.png";
import Samsung from "../assets/Hero/Image1.png";
import Zebronics from "../assets/Hero/Zebronics.webp";
import Jbl from "../assets/Hero/Jbl.webp";

// 🎧 Headphones data (✅ price changed to number format)
const headphones = [
  { id: 1, name: "Sony WH-1000XM5", price: 29999, image: Boat },
  { id: 2, name: "Bose QuietComfort 45", price: 27999, image: Sony },
  { id: 3, name: "JBL Tune 720BT", price: 5499, image: Trigger },
  { id: 4, name: "boAt Rockerz 550", price: 2499, image: Samsung },
  { id: 5, name: "Zebronics Blaze", price: 1999, image: Zebronics },
  { id: 6, name: "JBL Bullets Wireless Z2", price: 1999, image: Jbl },
];

const Headphones = () => {
  const { addToCart } = useContext(CartContext); // ✅ Use context for cart

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-dark">
        🎧 Trending Headphones
      </h2>
      <div className="row">
        {headphones.map((headphone) => (
          <div key={headphone.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
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
                src={headphone.image}
                className="card-img-top p-3"
                alt={headphone.name}
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
                <h5 className="card-title fw-semibold">{headphone.name}</h5>
                <p className="card-text text-success fw-bold">
                  ₹{headphone.price.toLocaleString("en-IN")}
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-dark px-4"
                    onClick={() => addToCart(headphone)} // ✅ Functional Add to Cart
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

export default Headphones;
