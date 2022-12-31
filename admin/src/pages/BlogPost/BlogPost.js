import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const link = process.env.REACT_APP_API_ENDPOINT + `/blogs/${blogId}`;
      const response = await Axios.get(link);
      if (!response.data) return navigate("/404", { replace: true });
      setBlog(response.data);
      const id = setTimeout(() => {
        setIsLoading(false);
        clearTimeout(id);
      }, 169);
    })();
  }, [blogId, navigate]);

  if (!blog || isLoading) {
    return <span className="temporaryLoader" />;
  }

  return (
    <div className="blog-post-container">
      <div
        className="blog-post-back-container"
        onClick={() => window.history.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="blog-post-back-icon" />
        <span className="blog-post-back-text">Back to Blogs</span>
      </div>
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
        <p className="blog-post-date">
          {convertISODateToString(blog.createdDate)}
        </p>
      </div>
      <hr />
      <button onClick={scrollToTop}>Back to the Top</button>
    </div>
  );
};

export default BlogPost;
