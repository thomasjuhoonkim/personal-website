import React from "react";

import yes from "../assets/yes.png";
import loading from "../assets/loading.svg";
import "./Contact.scoped.scss";

const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    const handleLoad = () => setLoadedSrc(props.src);
    const image = new Image();
    image.addEventListener("load", handleLoad);
    image.src = props.src;
    return () => image.removeEventListener("load", handleLoad);
  }, [props.src]);

  return (
    <img
      className={
        loadedSrc === props.src ? props.className : props.className + " loading"
      }
      src={loadedSrc === props.src ? props.src : loading}
      alt={props.alt}
      title={props.title}
    />
  );
};

const Contact = () => {
  return (
    <div className="contact-container">
      <AsyncImage
        src={yes}
        alt="Le Train"
        title="choo choo"
        className="contact-image"
      />
      <h1>Get in touch</h1>
      <a href="mailto:thomasjuhoonkim@gmail.com">thomasjuhoonkim@gmail.com</a>
      <a href="mailto:t84kim@uwaterloo.ca">t84kim@uwaterloo.ca</a>
      <a href="tel:647-858-2456">647-858-2456</a>
    </div>
  );
};

export default Contact;
