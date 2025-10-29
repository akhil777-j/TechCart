import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import Image1 from "../assets/Hero/Image1.png";
import Image2 from "../assets/Hero/LaptopMain.png";
import Image3 from "../assets/Hero/Image3.png";

const HeroData = [
  { id: 1, img: Image1, subtitle: "Beats Solo", title: "Wireless", title2: "Headphones" },
  { id: 2, img: Image2, subtitle: "Beats Solo", title: "Wireless", title2: "Laptops" },
  { id: 3, img: Image3, subtitle: "Beats Solo", title: "Branded", title2: "SmartWatches" },
];

const Hero = () => {
  useEffect(() => {
    const heroCarouselEl = document.getElementById("heroCarousel");
    new Carousel(heroCarouselEl, {
      interval: 4000,
      ride: "carousel",
      pause: false,
    });
  }, []);

  return (
    <div className="container-fluid px-0 my-5">
      <div id="heroCarousel" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {HeroData.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #ffe6e6 100%)",
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem 0",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6 text-center text-md-start">
                    <h5 className="text-uppercase text-secondary fw-semibold mb-3">
                      {slide.subtitle}
                    </h5>
                    <h1
                      className="display-3 fw-bold"
                      style={{
                        letterSpacing: "1px",
                        color: "#212529",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      {slide.title}
                    </h1>
                    <h1
                      className="display-3 fw-bold"
                      style={{
                        color: "#dc3545",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      {slide.title2}
                    </h1>
                    <button
                      className="btn btn-danger mt-4 px-5 py-3 rounded-pill shadow"
                      style={{
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Shop Now
                    </button>
                  </div>

                  <div className="col-12 col-md-6 text-center mt-5 mt-md-0 position-relative">
                    <div
                      className="position-absolute top-50 start-50 translate-middle rounded-circle"
                      style={{
                        width: "400px",
                        height: "400px",
                        background:
                          "radial-gradient(circle at center, rgba(255, 0, 0, 0.1), transparent 70%)",
                        zIndex: 0,
                      }}
                    ></div>
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="img-fluid position-relative"
                      style={{
                        maxHeight: "450px",
                        zIndex: 1,
                        transform: "scale(1)",
                        transition: "transform 0.6s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;