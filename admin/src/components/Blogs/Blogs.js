import React, { useEffect, useState } from "react";
import Axios from "axios";

import BlogListElement from "./BlogListElement/BlogListElement";

import styles from "./Blogs.module.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const link = process.env.REACT_APP_API_ENDPOINT + "/blogs";
      const response = await Axios.get(link);
      setBlogs(response.data);
      const id = setTimeout(() => {
        setIsLoading(false);
        clearTimeout(id);
      }, 169);
    })();
  }, []);

  if (isLoading) return <span className={styles.temporaryLoader} />;

  return (
    <div className={styles.blogsListContainer}>
      {blogs.map((blog, i) => (
        <BlogListElement key={i} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
