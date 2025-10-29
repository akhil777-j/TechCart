import React from "react";
import { FaLaptop, FaMobileAlt, FaHeadphonesAlt } from "react-icons/fa";
import { MdWatch } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1740&q=80"; // modern tech bg

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6% 8%",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        }}
      ></div>

      {/* Content Wrapper */}
      <div
        className="container text-center text-md-start"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="fw-bold display-5 text-uppercase mb-3">
              About <span className="text-danger">E-Shop</span>
            </h1>
            <p className="lead text-light">
              Your trusted destination for premium electronics and gadgets.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Welcome to <strong>E-Shop</strong> — where innovation meets
              convenience. From cutting-edge{" "}
              <strong>smartphones</strong> and high-performance{" "}
              <strong>laptops</strong> to trendy{" "}
              <strong>smartwatches</strong> and powerful{" "}
              <strong>headphones</strong>, we bring the world’s best gadgets
              right to your fingertips.
              <br />
              <br />
              We believe in delivering <em>quality, affordability</em>, and{" "}
              <em>customer satisfaction</em> with every product. Our goal? To
              make your tech shopping experience fast, simple, and exciting!
            </p>
          </div>

          {/* Feature Cards Section */}
          <div className="col-lg-6">
            <div className="row text-center">
              {[
                {
                  icon: <FaLaptop size={40} color="#007bff" />,
                  title: "Laptops",
                  text: "Top brands with the latest processors.",
                },
                {
                  icon: <FaMobileAlt size={40} color="#28a745" />,
                  title: "Mobiles",
                  text: "Smartphones for every budget and lifestyle.",
                },
                {
                  icon: <MdWatch size={40} color="#ffc107" />,
                  title: "Smartwatches",
                  text: "Stay connected, fit, and stylish anytime.",
                },
                {
                  icon: <FaHeadphonesAlt size={40} color="#dc3545" />,
                  title: "Headphones",
                  text: "Crystal-clear sound and comfort combined.",
                },
              ].map(({ icon, title, text }, index) => (
                <div
                  key={index}
                  className="col-6 mb-4 d-flex justify-content-center"
                  style={{
                    animation: "fadeInUp 0.6s ease forwards",
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                >
                  <div
                    className="card text-dark text-center shadow-sm"
                    style={{
                      width: "100%",
                      maxWidth: "220px",
                      borderRadius: "15px",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 5px 10px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="card-body py-4">
                      <div className="mb-3">{icon}</div>
                      <h6 className="fw-bold">{title}</h6>
                      <p className="text-muted small">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
