
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #ff4b2b, #ff416c)",
      }}
    >
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "420px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Create Account</h2>
          <p className="text-muted">Join us and start your journey</p>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold text-dark">
              Full Name
            </label>
            <input
              type="text"
              className="form-control rounded-pill px-3 py-2"
              id="name"
              placeholder="Enter your full name"
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold text-dark">
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill px-3 py-2"
              id="email"
              placeholder="Enter your email"
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold text-dark">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill px-3 py-2"
              id="password"
              placeholder="Create a password"
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold text-dark">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill px-3 py-2"
              id="confirmPassword"
              placeholder="Confirm your password"
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 rounded-pill py-2 fw-semibold shadow-sm"
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b02a37")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">
            Already have an account?{" "}
            <a href="#" className="fw-semibold text-danger text-decoration-none">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;


