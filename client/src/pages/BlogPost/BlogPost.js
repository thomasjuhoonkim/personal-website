import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import { Markdown } from "../../components";

import cat from "../../assets/cat.png";
import "./BlogPost.scoped.scss";

const BlogPost = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    (async () => {
      const link = process.env.REACT_APP_API_ENDPOINT + `/blogs/${blogId}`;
      const response = await Axios.get(link);
      setBlog(response.data);
    })();
  }, [blogId]);

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{blog.title}</h1>
      <h3 className="blog-post-subtitle">{blog.subtitle}</h3>
      <img className="blog-post-thumbnail" src={cat} alt="blog thumbnail" />
      <div className="blog-post-markdown-container">
        <Markdown markdown={blog.markdown} />
      </div>
      <hr />
      <div className="blog-post-attr-container">
        <div className="blog-post-tag-container">
          {blog.tags?.map((tag, i) => (
            <span key={i} className="blog-post-tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="blog-post-date">{blog.date}</p>
      </div>
      <hr />
      <button onClick={scrollToTop}>Back to the Top</button>
    </div>
  );
};

export default BlogPost;
