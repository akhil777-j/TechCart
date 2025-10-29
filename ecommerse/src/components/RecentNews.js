import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './RecentNews.css'

const blogs = [
  {
    id: 1,
    date: "Jan 20, 2024",
    author: "Dilshad",
    title: "How to choose perfect smartwatch",
    description:
      "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
  },
  {
    id: 2,
    date: "Jan 20, 2024",
    author: "Satya",
    title: "How to choose perfect gadget",
    description:
      "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
  },
  {
    id: 3,
    date: "Jan 20, 2024",
    author: "Sabir",
    title: "How to choose perfect VR headset",
    description:
      "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
  },
];

const RecentNews = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h6 className="text-danger text-uppercase fw-semibold">Recent News</h6>
        <h2 className="fw-bold">Explore Our Blogs</h2>
      </div>

      <div className="row g-4">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <div className="card border-0 shadow-sm h-100 blog-card">
              <div className="card-body">
                <p className="text-muted small mb-2">
                  {blog.date} &nbsp;|&nbsp; by <span className="fw-semibold">{blog.author}</span>
                </p>
                <h5 className="fw-bold mb-2">{blog.title}</h5>
                <p className="text-muted small mb-3">{blog.description}</p>
                <a href="#" className="text-danger fw-semibold text-decoration-none">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
