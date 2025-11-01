import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartContext } from "../context/CartContext"; // ✅ Import context

const MenuLinks = [
  { id: 1, name: "Home", link: "/", icon: "fas fa-home" },
   { id: 2, name: "Services", link: "/services", icon: "fas fa-cogs" },
  { id: 3, name: "Deals", link: "/Deals", icon: "fas fa-fire" },
  { id: 4, name: "Categories", link: "#", icon: "fas fa-th-large" },
  { id: 5, name: "About Us", link: "/aboutus", icon: "fas fa-info-circle" },
];

const CategoryItems = [
  { name: "Mobiles", link: "/mobiles", icon: "fas fa-mobile-alt" },
  { name: "Laptops", link: "/laptops", icon: "fas fa-laptop" },
  { name: "Watches", link: "/watches", icon: "fas fa-clock" },
  { name: "Headphones", link: "/headphones", icon: "fas fa-headphones" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const {totalPrice, totalItems } = useContext(CartContext); // ✅ Use CartContext

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleCartClick = () => navigate("/cart"); // ✅ Navigate to Cart page

  return (
    <>
      {/* Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* 🔥 Your original styles remain unchanged */}
      <style jsx>{`
        .navbar-custom {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(220, 53, 69, 0.1);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(45deg, #dc3545, #e74c3c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-link-custom {
          color: #6c757d !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link-custom.active {
          color: #dc3545 !important;
        }

        .nav-link-custom:hover {
          color: #dc3545 !important;
          background-color: rgba(220, 53, 69, 0.1);
          transform: translateY(-2px);
        }

        .dropdown-menu-custom {
          border: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          padding: 0.5rem 0;
          margin-top: 0.5rem;
        }

        .dropdown-item-custom {
          padding: 0.75rem 1.5rem;
          color: #6c757d;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .dropdown-item-custom:hover {
          background: linear-gradient(45deg, #dc3545, #e74c3c);
          color: white !important;
          transform: translateX(5px);
        }

        .btn-login {
          border: 2px solid #dc3545;
          color: #dc3545;
          font-weight: 600;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          background-color: #dc3545;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
        }

        .btn-signup {
          background: linear-gradient(45deg, #dc3545, #e74c3c);
          border: none;
          color: white;
          font-weight: 600;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .btn-signup:hover {
          background: linear-gradient(45deg, #c82333, #dc3545);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
        }

        @media (max-width: 991px) {
          .navbar-nav {
            padding: 1rem 0;
          }

          .btn-group-mobile {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #dee2e6;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <i className="fas fa-shopping-bag me-2"></i>Techcart
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {MenuLinks.map((data, index) => {
                if (data.name === "Categories") {
                  return (
                    <li key={index} className="nav-item dropdown">
                      <Link
                        className="nav-link nav-link-custom dropdown-toggle"
                        to="#"
                        id="categoriesDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className={`${data.icon} me-1`}></i>
                        {data.name}
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-custom"
                        aria-labelledby="categoriesDropdown"
                      >
                        {CategoryItems.map((category, catIndex) => (
                          <li key={catIndex}>
                            <Link
                              className="dropdown-item dropdown-item-custom"
                              to={category.link}
                            >
                              <i className={`${category.icon} me-2`}></i>
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={index} className="nav-item">
                    <Link
                      to={data.link}
                      className={`nav-link nav-link-custom ${
                        location.pathname === data.link ? "active" : ""
                      }`}
                    >
                      <i className={`${data.icon} me-1`}></i>
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ✅ Buttons + Cart Icon */}
            <div className="d-flex align-items-center gap-3 btn-group-mobile">
              <div
                className="d-flex align-items-center cursor-pointer"
                onClick={handleCartClick}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-shopping-cart fa-lg text-dark position-relative">
                  {totalItems > 0 && (
                    <span
                      className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {totalItems}
                    </span>
                  )}
                </i>
                <span className="ms-2 fw-semibold text-danger">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <button className="btn btn-login" onClick={handleLogin}>
                <i className="fas fa-sign-in-alt me-1"></i>Login
              </button>
              <button className="btn btn-signup" onClick={handleSignup}>
                <i className="fas fa-user-plus me-1"></i>Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
