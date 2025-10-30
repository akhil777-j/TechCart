import React, { useState } from "react";

// 🖼 Import product images
import laptop1 from "../assets/Hero/Hp15.webp";
import laptop2 from "../assets/Hero/Drift.webp";
import watch1 from "../assets/Hero/pococ71.webp";
import watch2 from "../assets/Hero/Zebronics.webp";
import headphone1 from "../assets/Hero/Ai+PULSE.webp";
import headphone2 from "../assets/Hero/baot.webp";
import laptop3 from "../assets/Hero/appleMacbook.webp";
import watch3 from "../assets/Hero/fireboult.webp";

const OurProducts = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    { id: 1, name: "HP 15s Ryzen 5", image: laptop1 },
    { id: 2, name: "Drift SmartWatch", image: laptop2 },
    { id: 3, name: "Poco C71", image: watch1 },
    { id: 4, name: "Zebronics", image: watch2 },
    { id: 5, name: "AI Plus", image: headphone1 },
    { id: 6, name: "boAt Rockerz Bluetooth Headphones", image: headphone2 },
    { id: 7, name: "Apple MacBook Air M2", image: laptop3 },
    { id: 8, name: "Fire-Boltt Smartwatch", image: watch3 },
  ];

  const styles = {
    container: {
      padding: "4rem 0",
      fontFamily: '"Poppins", sans-serif',
    },
    title: {
      textAlign: "center",
      fontWeight: "700",
      marginBottom: "3rem",
      color: "#222",
    },
    card: (isHovered) => ({
      border: "none",
      borderRadius: "12px",
      textAlign: "center",
      height: "100%",
      cursor: "pointer",
      boxShadow: isHovered
        ? "0 10px 25px rgba(0, 0, 0, 0.15)"
        : "0 4px 15px rgba(0, 0, 0, 0.08)",
      transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: "#fff",
    }),
    image: (isHovered) => ({
      height: "180px",
      objectFit: "contain",
      borderRadius: "10px",
      padding: "16px",
      transition: "transform 0.4s ease",
      transform: isHovered ? "scale(1.08)" : "scale(1)",
    }),
    cardTitle: (isHovered) => ({
      fontWeight: "600",
      fontSize: "0.95rem",
      color: isHovered ? "#007bff" : "#333", // blue on hover
      transition: "color 0.3s ease",
    }),
  };

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.title}>Our Products</h2>

      <div className="row g-4">
        {products.map((item) => {
          const isHovered = hoveredCard === item.id;
          return (
            <div className="col-6 col-md-3" key={item.id}>
              <div
                style={styles.card(isHovered)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.image(isHovered)}
                  className="img-fluid"
                />
                <div className="card-body">
                  <h6 style={styles.cardTitle(isHovered)}>{item.name}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
