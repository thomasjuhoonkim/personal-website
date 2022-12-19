import React, { useEffect, useState } from "react";
import Axios from "axios";

import BlogListElement from "./BlogListElement/BlogListElement";

import "./Blogs.scoped.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const link = process.env.REACT_APP_API_ENDPOINT + "/blogs";
      const response = await Axios.get(link);
      setBlogs(response.data);
    })();
  }, []);

  return (
    <div className="blogs-list-container">
      {blogs.length !== 0 ? (
        blogs.map((blog, i) => <BlogListElement key={i} blog={blog} />)
      ) : (
        <h1 className="blogs-loading">Nothing to see here.</h1>
      )}
    </div>
  );
};

export default Blogs;
