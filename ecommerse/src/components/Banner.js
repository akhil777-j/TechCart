import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className="d-flex justify-content-center align-items-center py-3">
      <div className="container">
        <div
          className="row text-white align-items-center shadow-lg overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${data.bgColor} 0%, #ff6b6b 100%)`,
            borderRadius: '25px',
            position: 'relative',
          }}
        >
          {/* Decorative Glow */}
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)',
              zIndex: 0,
            }}
          ></div>

          {/* Left Column */}
          <div className="col-md-4 p-5 position-relative" style={{ zIndex: 1 }}>
            <p className="fw-semibold text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
              {data.discount}
            </p>
            <h1 className="text-uppercase display-4 fw-bold mb-2">{data.title}</h1>
            <p className="small opacity-75">{data.date}</p>
          </div>

          {/* Center Image */}
          <div className="col-md-4 d-flex justify-content-center align-items-center position-relative" style={{ zIndex: 1 }}>
            <div
              className="rounded-circle position-absolute"
              style={{
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)',
                zIndex: 0,
              }}
            ></div>
            <img
              src={data.image}
              alt={data.title}
              className="img-fluid position-relative"
              style={{
                width: '380px',
                transform: 'scale(1)',
                transition: 'transform 0.5s ease',
                zIndex: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Right Column */}
          <div className="col-md-4 d-flex flex-column justify-content-center gap-3 p-5 position-relative" style={{ zIndex: 1 }}>
            <p className="fw-bold h5 text-light">{data.title2}</p>
            <h2 className="fw-bold display-5 text-white">{data.title3}</h2>
            <p className="small lh-base opacity-75">{data.title4}</p>
            <button
              className="btn btn-light text-danger rounded-pill px-5 py-3 fw-semibold shadow-sm"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc3545';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#dc3545';
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

