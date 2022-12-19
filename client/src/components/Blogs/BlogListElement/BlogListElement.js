import React from "react";
import { useNavigate } from "react-router-dom";

import "./BlogListElement.scoped.scss";

const convertISODateToString = (ISODate) => {
  const date = new Date(ISODate).toString();
  const dateArray = date.split(" ").slice(1, 4);
  const dateString = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;
  return dateString;
};

const BlogListElement = ({ blog }) => {
  const dateString = convertISODateToString(blog.createdDate);

  const navigate = useNavigate();
  const handleClick = () => navigate("./" + blog.blogId);
  return (
    <div className="blog-list-element-container">
      <div className="blog-text-container">
        <h2 className="blog-title" onClick={handleClick}>
          {blog.title}
        </h2>
        <p className="blog-preview" onClick={handleClick}>
          {blog.preview}
        </p>
        <div className="blog-attr-container">
          {blog.tags.map((tag, i) => (
            <span key={i} className="blog-tag">
              {tag}
            </span>
          ))}
          <span className="blog-attr-spacing">•</span>
          <span className="blog-date" onClick={handleClick}>
            {dateString}
          </span>
        </div>
      </div>
      <img
        className="thumbnail"
        src={blog.thumbnail}
        alt="blog-thumbnail"
        onClick={handleClick}
      />
    </div>
  );
};

export default BlogListElement;
