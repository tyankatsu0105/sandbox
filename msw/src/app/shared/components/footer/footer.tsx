import * as React from "react";
import styles from "./footer.module.scss";

export const Footer = () => (
  <footer className={styles["footer"]}>
    <p className={styles["copyright-contaner"]}>
      <small>&copy; 2021 tyankatsu</small>
    </p>
  </footer>
);
