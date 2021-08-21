import React from "react";
import Footer from "../footer";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.mainContainer}>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
