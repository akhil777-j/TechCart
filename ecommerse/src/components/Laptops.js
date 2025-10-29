import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ Import Context

// ✅ Import your 10 laptop images
import Acer from "../assets/Hero/AcerAspurre.webp";
import Apple from "../assets/Hero/appleMacbook.webp";
import Asus from "../assets/Hero/Asusvivo.webp";
import Intel from "../assets/Hero/ChuWiIntel.webp";
import Dell from "../assets/Hero/Dellinspiron.webp";
import Hp from "../assets/Hero/Hp15.webp";
import Infinix from "../assets/Hero/InfinixGt.webp";
import Lenovo from "../assets/Hero/LaptopMain.png";
import PrimeBook from "../assets/Hero/PrimeBook.webp";
import Samsung from "../assets/Hero/SamsungGalaxyb4.webp";

// 🧩 Laptop data
const laptops = [
  { id: 1, name: "Apple MacBook Pro M3", price: 189999, image: Apple },
  { id: 2, name: "Dell Inspiron 16", price: 82999, image: Dell },
  { id: 3, name: "HP 15s Ryzen 5", price: 64999, image: Hp },
  { id: 4, name: "ASUS VivoBook Ultra 15", price: 69999, image: Asus },
  { id: 5, name: "Lenovo IdeaPad Slim 5", price: 74999, image: Lenovo },
  { id: 6, name: "Acer Aspire 7", price: 59999, image: Acer },
  { id: 7, name: "Samsung Galaxy Book 4", price: 92999, image: Samsung },
  { id: 8, name: "Infinix INBook X3", price: 49999, image: Infinix },
  { id: 9, name: "PrimeBook 4G", price: 24999, image: PrimeBook },
  { id: 10, name: "CHUWI IntelBook X", price: 39999, image: Intel },
];

const Laptops = () => {
  const { addToCart } = useContext(CartContext); // ✅ Get addToCart function

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-dark">💻 Latest Laptops</h2>
      <div className="row">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div
              className="card border-0 shadow h-100 text-center"
              style={{
                background: "linear-gradient(145deg, #f3f6fa, #ffffff, #f1f4f8)",
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
                src={laptop.image}
                className="card-img-top p-3"
                alt={laptop.name}
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
                <h5 className="card-title fw-semibold">{laptop.name}</h5>
                <p className="card-text text-success fw-bold">
                  ₹{laptop.price.toLocaleString("en-IN")}
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-dark px-4"
                    onClick={() => addToCart(laptop)} // ✅ Add item to cart
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

export default Laptops;
