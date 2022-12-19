import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import { Markdown } from "../../components";

import "./BlogPost.scoped.scss";

const convertISODateToString = (ISODate) => {
  const date = new Date(ISODate).toString();
  const dateArray = date.split(" ").slice(1, 4);
  const dateString = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;
  return dateString;
};

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

  if (!blog) {
    return (
      <div className="blog-post-contianer">
        <h1 style={{ margin: "30vh 0", textAlign: "center" }}>
          Nothing to see here.
        </h1>
      </div>
    );
  }

  const dateString = convertISODateToString(blog.createdDate);

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{blog.title}</h1>
      <h3 className="blog-post-subtitle">{blog.subtitle}</h3>
      <img
        className="blog-post-thumbnail"
        src={blog.thumbnail}
        alt="blog thumbnail"
      />
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
        <p className="blog-post-date">{dateString}</p>
      </div>
      <hr />
      <button onClick={scrollToTop}>Back to the Top</button>
    </div>
  );
};

export default BlogPost;
