import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();

  // ✅ Disable scroll only when this component is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // ✅ Restore original overflow when navigating away
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // ✅ Handle form submission (redirect to Login page)
  const handleSignup = (e) => {
    e.preventDefault();
    // You can add localStorage or API signup here if needed
    navigate("/login"); // 🔁 Redirect to Login page
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #ff4b2b, #ff416c)",
        position: "relative",
        overflow: "hidden", // keeps background contained
      }}
    >
      {/* Floating background effects */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.15)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>

      {/* Signup Card */}
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "420px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 1,
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Create Account</h2>
          <p className="text-muted">Join us and start your journey</p>
        </div>

        <form onSubmit={handleSignup}>
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
            <label
              htmlFor="password"
              className="form-label fw-semibold text-dark"
            >
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
            <label
              htmlFor="confirmPassword"
              className="form-label fw-semibold text-dark"
            >
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#b02a37")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#dc3545")
            }
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="btn btn-link fw-semibold text-danger text-decoration-none p-0"
            >
              Login
            </button>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
