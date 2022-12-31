import React from "react";

import { Blogs } from "../../components";

import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <Blogs />
    </div>
  );
};

export default Blog;
