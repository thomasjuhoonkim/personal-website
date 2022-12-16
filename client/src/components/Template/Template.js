import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import "./Template.scoped.scss";

const Template = (props) => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Template;
