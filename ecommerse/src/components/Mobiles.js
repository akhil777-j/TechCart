import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AiPlus from "../assets/Hero/Ai+PULSE.webp";
import IQ from "../assets/Hero/iQooZ10.webp";
import moto from "../assets/Hero/moto.webp";
import Nothing from "../assets/Hero/nothingphone3a.webp";
import oppo from "../assets/Hero/oppok13.webp";
import poco from "../assets/Hero/pococ71.webp";
import Realmep3 from "../assets/Hero/realmep3.webp";
import Redmi from "../assets/Hero/Redmi.webp";
import RedmiS5 from "../assets/Hero/redmiS5.webp";
import Samsungs25 from "../assets/Hero/samsunggs25.webp";
import Vivot4 from "../assets/Hero/vivot4.webp";

const mobiles = [
  { id: 1, name: "iPhone 15 Pro", price: 129999, image: AiPlus },
  { id: 2, name: "Samsung Galaxy S24", price: 109999, image: IQ },
  { id: 3, name: "OnePlus 12", price: 64999, image: moto },
  { id: 4, name: "Google Pixel 8", price: 75999, image: Nothing },
  { id: 5, name: "Xiaomi 14 Pro", price: 54999, image: oppo },
  { id: 6, name: "Realme GT 6", price: 42999, image: poco },
  { id: 7, name: "Realme P3 Pro", price: 39999, image: Realmep3 },
  { id: 8, name: "Redmi Note 13 Pro", price: 29999, image: Redmi },
  { id: 9, name: "Redmi S5 Ultra", price: 27499, image: RedmiS5 },
  { id: 10, name: "Samsung Galaxy S25 Ultra", price: 139999, image: Samsungs25 },
  { id: 11, name: "Vivo T4 5G", price: 33999, image: Vivot4 },
  { id: 12, name: "Nothing Phone 3A", price: 49999, image: Nothing },
];

const Mobiles = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">📱 Trending Mobiles</h2>
      <div className="row">
        {mobiles.map((mobile) => (
          <div key={mobile.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div
              className="card border-0 shadow-sm h-100 text-center"
              style={{
                background: "linear-gradient(135deg, #f9f9f9 0%, #f1f3f6 100%)",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={mobile.image}
                className="card-img-top p-3"
                alt={mobile.name}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{mobile.name}</h5>
                <p className="card-text text-success fw-bold">
                  ₹{mobile.price.toLocaleString("en-IN")}
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-dark px-4"
                    onClick={() => addToCart(mobile)}
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

export default Mobiles;
