import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Services() {
  const services = [
    { icon: "bi-truck", title: "FREE DELIVERY", text: "Consectetur adipi elit lorem ipsum dolor sit amet." },
    { icon: "bi-shield-check", title: "QUALITY GUARANTEE", text: "Dolor sit amet lorem ipsum consectetur adipi elit." },
    { icon: "bi-tags", title: "DAILY OFFERS", text: "Amet consectetur adipi elit lorem ipsum dolor sit." },
    { icon: "bi-lock", title: "100% SECURE PAYMENT", text: "Rem ipsum dolor sit amet, consectetur adipi elit." },
  ];

  return (
    <div className="container py-5">
      <div className="row text-center">
        {services.map((service, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100 p-4">
              <div className="mb-3">
                <i className={`bi ${service.icon} fs-1 text-primary`}></i>
              </div>
              <h5 className="text-uppercase text-secondary mb-2">{service.title}</h5>
              <p className="text-muted">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
