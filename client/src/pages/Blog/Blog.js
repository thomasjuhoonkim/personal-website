import React from "react";

import { Blogs } from "../../components";

import "./Blog.scoped.scss";

const Blog = () => {
  // add when there are more blogs
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <Blogs />
      {/* <button onClick={scrollToTop}>Back to the Top</button> */}
    </div>
  );
};

export default Blog;
