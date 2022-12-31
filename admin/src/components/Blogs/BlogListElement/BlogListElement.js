import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./BlogListElement.module.scss";

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
    <div className={styles.blogListElementContainer}>
      <div className={styles.blogTextContainer}>
        <h2 className={styles.blogTitle} onClick={handleClick}>
          {blog.title}
        </h2>
        <p className={styles.blogPreview} onClick={handleClick}>
          {blog.preview}
        </p>
        <div className={styles.blogAttrContainer}>
          {blog.tags.map((tag, i) => (
            <span key={i} className={styles.blogTag}>
              {tag}
            </span>
          ))}
          <span className={styles.blogAttrSpacing}>•</span>
          <span className={styles.blogDate} onClick={handleClick}>
            {dateString}
          </span>
        </div>
      </div>
      <img
        className={styles.thumbnail}
        src={blog.thumbnail}
        alt="blog-thumbnail"
        onClick={handleClick}
      />
    </div>
  );
};

export default BlogListElement;
