import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* 🛒 Brand Info */}
          <div className="col-12 col-md-4">
            <h3 className="fw-bold text-uppercase mb-3">eShop</h3>
            <p className="small text-light">
              Discover the latest and greatest in <strong>electronics</strong> —
              from powerful laptops and smartphones to stylish smartwatches and
              crystal-clear headphones. Stay connected with innovation.
            </p>
          </div>

          {/* 🕹️ Shop Categories */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Categories</h6>
            <ul className="list-unstyled footer-links">
              <li><i className="bi bi-phone me-2"></i>Mobiles</li>
              <li><i className="bi bi-laptop me-2"></i>Laptops</li>
              <li><i className="bi bi-headphones me-2"></i>Headphones</li>
              <li><i className="bi bi-watch me-2"></i>Watches</li>
            </ul>
          </div>

          {/* 📞 Support Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* ✉️ Newsletter */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Subscribe</h6>
            <p className="small text-light">
              Join our newsletter to receive exclusive deals and updates.
            </p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2 rounded-pill"
              />
              <button type="submit" className="btn btn-danger rounded-pill">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* 🌐 Social Icons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 small">
            © {new Date().getFullYear()} <strong>eShop</strong> — All Rights Reserved.
          </p>
          <div className="footer-social">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
