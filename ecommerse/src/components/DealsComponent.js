import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPercent, FaShoppingBag, FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Added navigation

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1607083206968-13611e3d76de?auto=format&fit=crop&w=1920&q=80"; // stylish shopping bg

const DealsComponent = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const deals = [
    {
      icon: <FaPercent size={45} color="#dc3545" />,
      title: "Mega Winter Sale",
      discount: "Up to 50% OFF",
      text: "Get huge discounts on top gadgets this winter season. Limited time offers only!",
      bg: "rgba(220,53,69,0.1)",
    },
    {
      icon: <FaShoppingBag size={45} color="#0d6efd" />,
      title: "Buy 1 Get 1 Free",
      discount: "BOGO Deals",
      text: "Double the joy! Buy one product and get another absolutely free on select items.",
      bg: "rgba(13,110,253,0.1)",
    },
    {
      icon: <FaGift size={45} color="#198754" />,
      title: "Festive Rewards",
      discount: "Earn Points & Gifts",
      text: "Shop during our festive week and earn double reward points and surprise gifts.",
      bg: "rgba(25,135,84,0.1)",
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
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-uppercase display-5">
          Hot <span className="text-danger">Deals</span> & Offers
        </h1>
        <p className="lead text-light mx-auto" style={{ maxWidth: "800px" }}>
          Save big on your favorite gadgets! Exclusive limited-time deals only
          on <strong>TechCart</strong>.
        </p>
      </div>

      {/* Deals Grid */}
      <div className="row g-4 justify-content-center">
        {deals.map(({ icon, title, discount, text, bg }, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <div
              className="card text-center border-0 shadow-lg text-light"
              style={{
                borderRadius: "20px",
                width: "100%",
                maxWidth: "300px",
                backgroundColor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(5px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(220,53,69,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 10px rgba(0,0,0,0.3)";
              }}
            >
              <div
                className="card-body py-4"
                style={{ backgroundColor: bg, borderRadius: "20px" }}
              >
                <div className="mb-3">{icon}</div>
                <h5 className="fw-bold text-uppercase">{title}</h5>
                <h6 className="text-danger fw-bold">{discount}</h6>
                <p className="small text-secondary mt-2">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5">
        <h4 className="fw-bold text-light text-uppercase mb-3">
          Hurry Up! Limited Time Offers
        </h4>
        <p
          className="text-secondary mx-auto"
          style={{ maxWidth: "750px", fontSize: "1.05rem" }}
        >
          Don’t miss out on the best prices of the year. Upgrade your tech
          today with unbeatable discounts.
        </p>
        <button
          className="btn btn-danger px-4 mt-3"
          onClick={() => navigate("/")}
        >
          Shop Deals Now
        </button>
      </div>
    </div>
  );
};

export default DealsComponent;
