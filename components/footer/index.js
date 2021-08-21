import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      made with <span className={styles.heart}>&#10084;</span> by
      <a target="_blank" rel="noreferrer" href="https://github.com/ardanclassic">
        ardanclassic
      </a>
    </div>
  );
};

export default Footer;
