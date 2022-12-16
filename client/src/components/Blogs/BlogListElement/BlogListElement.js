import React from "react";
import { useNavigate } from "react-router-dom";

import cat from "../../../assets/cat.png";
import "./BlogListElement.scoped.scss";

const BlogListElement = ({ blog }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(blog.route);
  return (
    <div className="blog-list-element-container">
      <div className="blog-text-container">
        <h2 className="blog-title" onClick={handleClick}>
          {blog.title}
        </h2>
        <p className="blog-preview" onClick={handleClick}>
          {blog.subtitle}
        </p>
        <div className="blog-attr-container">
          {blog.tags.map((tag, i) => (
            <span key={i} className="blog-tag">
              {tag}
            </span>
          ))}
          <span className="blog-attr-spacing">•</span>
          <span className="blog-date" onClick={handleClick}>
            {blog.date}
          </span>
        </div>
      </div>
      <img
        className="thumbnail"
        src={cat}
        alt="blog-thumbnail"
        onClick={handleClick}
      />
    </div>
  );
};

export default BlogListElement;
