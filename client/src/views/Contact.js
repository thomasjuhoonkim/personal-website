import React from "react";

import yes from "../assets/yes.png";
import "./Contact.scoped.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={yes} alt="Le Train" title="choo choo" />
      <h1>get in touch</h1>
      <a href="mailto:thomasjuhoonkim@gmail.com">thomasjuhoonkim@gmail.com</a>
      <a href="mailto:t84kim@uwaterloo.ca">t84kim@uwaterloo.ca</a>
      <a href="tel:647-858-2456">647-858-2456</a>
    </div>
  );
};

export default Contact;
