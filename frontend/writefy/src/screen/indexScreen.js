import React from "react";
import Menu from "../component/leftBar.js";
import styles from "./mainContainer.module.css";
export default function App(props) {
  return (
    <div style={{ display: "flex" }}>
      <Menu menu />
      <div className={styles.mainContainer}>
        <p style={{ color: "#545454" }} className={styles.mainTitle}>
          Welcome to{" "}
          <span style={{ fontWeight: "bold" }}>
            Write<span style={{ color: "orange" }}>fy </span>
          </span>
        </p>
        <p style={{ color: "#545454" }} className={styles.description}>
          * Let your mind fly away and write about the most marvelous stories in
          the world.
        </p>
        <p style={{ color: "#545454", fontSize: "16px" }}>
          <span style={{ fontWeight: "bold" }}>Popular</span> this week
        </p>
        <div className={styles.sectionContainer}>
          <img
            src={require("../assets/book_example_1.jpg")}
            className={styles.boxContainer}
          />
          <img
            src={require("../assets/book_example_2.jpg")}
            className={styles.boxContainer}
          />
        </div>
      </div>
    </div>
  );
}
