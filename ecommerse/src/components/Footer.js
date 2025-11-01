import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #1c1f26 0%, #111318 100%)",
      color: "#e0e0e0",
      letterSpacing: "0.3px",
      fontFamily: '"Poppins", sans-serif',
      paddingTop: "3rem",
      paddingBottom: "1.5rem",
    },
    heading: { color: "#fff" },
    paragraph: { color: "#cfcfcf", fontSize: "0.9rem" },
    linkItem: (isHovered) => ({
      marginBottom: "8px",
      color: isHovered ? "#ff4757" : "#cfcfcf",
      cursor: "pointer",
      transition: "all 0.3s ease",
      transform: isHovered ? "translateX(5px)" : "translateX(0)",
    }),
    emailInput: {
      backgroundColor: "#22252b",
      border: "none",
      color: "#fff",
      padding: "10px 15px",
      borderRadius: "50px",
      flex: 1,
    },
    subscribeBtn: {
      backgroundColor: "#ff4757",
      border: "none",
      color: "#fff",
      borderRadius: "50px",
      padding: "10px 20px",
      transition: "background-color 0.3s, transform 0.3s",
      cursor: "pointer",
    },
    subscribeBtnHover: {
      backgroundColor: "#ff6b81",
      transform: "scale(1.05)",
    },
    socialIcon: (isHovered) => ({
      color: isHovered ? "#ff4757" : "#ffffff",
      marginLeft: "12px",
      fontSize: "20px",
      transition: "color 0.3s, transform 0.3s",
      transform: isHovered ? "scale(1.2)" : "scale(1)",
    }),
    hr: {
      opacity: 0.3,
      borderColor: "rgba(255, 255, 255, 0.2)",
      margin: "2rem 0",
    },
  };

  const socialIcons = [
    { name: "facebook", icon: "bi-facebook" },
    { name: "twitter", icon: "bi-twitter" },
    { name: "instagram", icon: "bi-instagram" },
    { name: "linkedin", icon: "bi-linkedin" },
  ];

  const categories = [
    { label: "Mobiles", icon: "bi-phone" },
    { label: "Laptops", icon: "bi-laptop" },
    { label: "Headphones", icon: "bi-headphones" },
    { label: "Watches", icon: "bi-watch" },
  ];

  const supportLinks = ["About Us", "Contact", "FAQs", "Privacy Policy"];

  return (
    <footer className="footer text-white pt-5 pb-3 mt-5" style={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          {/* 🛒 Brand Info */}
          <div className="col-12 col-md-4">
            <h3 style={styles.heading} className="fw-bold text-uppercase mb-3">
              techcart
            </h3>
            <p style={styles.paragraph}>
              Discover the latest and greatest in <strong>electronics</strong> —
              from powerful laptops and smartphones to stylish smartwatches and
              crystal-clear headphones. Stay connected with innovation.
            </p>
          </div>

          {/* 🕹️ Categories */}
          <div className="col-6 col-md-2">
            <h6 style={styles.heading} className="fw-bold text-uppercase mb-3">
              Categories
            </h6>
            <ul className="list-unstyled">
              {categories.map((item, i) => (
                <li
                  key={i}
                  style={styles.linkItem(hoveredLink === i)}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 Support Links */}
          <div className="col-6 col-md-2">
            <h6 style={styles.heading} className="fw-bold text-uppercase mb-3">
              Support
            </h6>
            <ul className="list-unstyled">
              {supportLinks.map((text, i) => (
                <li
                  key={i + 10}
                  style={styles.linkItem(hoveredLink === i + 10)}
                  onMouseEnter={() => setHoveredLink(i + 10)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ✉️ Newsletter */}
          <div className="col-12 col-md-4">
            <h6 style={styles.heading} className="fw-bold text-uppercase mb-3">
              Subscribe
            </h6>
            <p style={styles.paragraph}>
              Join our newsletter to receive exclusive deals and updates.
            </p>
            <form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                style={styles.emailInput}
              />
              <button
                type="submit"
                style={styles.subscribeBtn}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.subscribeBtnHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.subscribeBtn)
                }
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr style={styles.hr} />

        {/* 🌐 Social Icons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 small">
            © {new Date().getFullYear()} <strong>eShop</strong> — All Rights
            Reserved.
          </p>
          <div className="footer-social">
            {socialIcons.map((s, i) => (
              <button
                key={s.name}
                aria-label={s.name}
                style={{
                  ...styles.socialIcon(hoveredIcon === i),
                  background: "transparent",
                  border: "none",
                  padding: 0,
                }}
                onMouseEnter={() => setHoveredIcon(i)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <i className={`bi ${s.icon}`}></i>
              </button>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
