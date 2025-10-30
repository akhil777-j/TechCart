import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaUndoAlt,
  FaLock,
  FaTags,
  FaGift,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ added this line
import "bootstrap/dist/css/bootstrap.min.css";

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1581090464674-81d58e9d1df3?auto=format&fit=crop&w=1920&q=80"; // clean tech bg

const ServicesComponent = () => {
  const navigate = useNavigate(); // ✅ added this line

  const services = [
    {
      icon: <FaShippingFast size={45} color="#0d6efd" />,
      title: "Fast Delivery",
      text: "We ensure your favorite gadgets reach your doorstep in record time with reliable shipping partners.",
    },
    {
      icon: <FaHeadset size={45} color="#28a745" />,
      title: "24/7 Support",
      text: "Our customer support team is available around the clock to assist you with any queries or issues.",
    },
    {
      icon: <FaUndoAlt size={45} color="#ffc107" />,
      title: "Easy Returns",
      text: "Changed your mind? Enjoy hassle-free returns and exchanges within a simple, transparent policy.",
    },
    {
      icon: <FaLock size={45} color="#dc3545" />,
      title: "Secure Payments",
      text: "Shop confidently with encrypted transactions and trusted payment gateways for your safety.",
    },
    {
      icon: <FaTags size={45} color="#6610f2" />,
      title: "Exclusive Deals",
      text: "Get access to seasonal sales, combo offers, and member discounts that save you more every time.",
    },
    {
      icon: <FaGift size={45} color="#fd7e14" />,
      title: "Reward Points",
      text: "Earn points on every purchase and redeem them for exciting discounts and special gifts.",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "5% 8%",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-uppercase display-5">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: "800px" }}>
            E-Shop goes beyond selling — we’re here to make your shopping
            experience fast, secure, and rewarding.
          </p>
        </div>

        {/* Service Cards */}
        <div className="row g-4 justify-content-center">
          {services.map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div
                className="card text-center text-white bg-dark border-0 shadow-lg"
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: "300px",
                  padding: "25px 20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(13,110,253,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 10px rgba(0,0,0,0.3)";
                }}
              >
                <div className="card-body">
                  <div className="mb-3">{icon}</div>
                  <h5 className="fw-bold text-uppercase mb-2">{title}</h5>
                  <p className="small text-secondary">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h4 className="fw-bold text-light text-uppercase mb-3">
            Experience Shopping Made Simple
          </h4>
          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "750px", fontSize: "1.05rem" }}
          >
            From quick delivery to secure checkout — every service at E-Shop is
            designed to make your online shopping smoother, faster, and more
            enjoyable.
          </p>
          <button
            className="btn btn-primary px-4 mt-3"
            onClick={() => navigate("/")} // ✅ navigates to home page
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
