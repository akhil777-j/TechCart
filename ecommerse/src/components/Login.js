import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)", // elegant dark purple gradient
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 99, 132, 0.5)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(54, 162, 235, 0.4)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      ></div>

      {/* Login Card */}
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "400px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          zIndex: 1,
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Welcome Back</h2>
          <p className="text-muted">Login to your account</p>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill px-3 py-2"
              id="email"
              placeholder="Enter your email"
              style={{ border: "1px solid #ddd" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill px-3 py-2"
              id="password"
              placeholder="Enter your password"
              style={{ border: "1px solid #ddd" }}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />
              <label className="form-check-label small" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="text-danger small text-decoration-none">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-danger w-100 rounded-pill py-2 fw-semibold shadow-sm"
            style={{
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c82333")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#dc3545")
            }
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">
            Don’t have an account?{" "}
            <a href="#" className="text-danger fw-semibold text-decoration-none">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
