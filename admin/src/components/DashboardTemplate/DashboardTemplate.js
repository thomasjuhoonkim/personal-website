import React from "react";
import { Outlet, Link } from "react-router-dom";
import SplitPane from "react-split-pane";

import DarkModeButton from "../../components/DarkModeButton/DarkModeButton";

import "./SplitPane.scss";
import styles from "./DashboardTemplate.module.scss";

const DashboardTemplate = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SplitPane split="vertical" minSize={150} maxSize={300} defaultSize={200}>
        <div className={styles.menuContainer}>
          <div className={styles.darkModeButton}>
            <DarkModeButton />
          </div>
          <div className={styles.linksContainer}>
            <Link className={styles.link} to="/dashboard">
              Dashboard
            </Link>
            <hr
              style={{
                width: "100%",
                border: "1.5px solid var(--menu-font-color)",
                borderRadius: 10,
                transition: "border 0.5s ease",
              }}
            />
            <Link className={styles.link} to="/home">
              Home
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
            <Link className={styles.link} to="/experience">
              Experience
            </Link>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
            <Link className={styles.link} to="/portfolio">
              Portfolio
            </Link>
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </SplitPane>
    </div>
  );
};

export default DashboardTemplate;
