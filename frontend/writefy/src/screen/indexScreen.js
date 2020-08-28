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
          <div style={{ marginLeft: "5px" }}>
            <p className={styles.titleForImage}>Vanished into the woods</p>

            <div className={styles.boxBehind}></div>
            <img
              src={require("../assets/exampleImage.jpg")}
              width="25"
              height="25"
              className={styles.userLogoAbsolute}
            />
            <p className={styles.authorForImage}>@ John doe</p>

            <img
              src={require("../assets/book_example_1.jpg")}
              className={styles.boxContainer}
            />
          </div>

          <div style={{ marginLeft: "5px" }}>
            <p className={styles.titleForImage}>Vanished into the woods</p>

            <div className={styles.boxBehind}></div>
            <img
              src={require("../assets/exampleImage.jpg")}
              width="25"
              height="25"
              className={styles.userLogoAbsolute}
            />
            <p className={styles.authorForImage}>@ John doe</p>

            <img
              src={require("../assets/book_example_1.jpg")}
              className={styles.boxContainer}
            />
          </div>
        </div>
        <div className={styles.authorsOfTheWeek}>
          <p style={{ color: "#545454", fontSize: "16px" }}>
            <span style={{ fontWeight: "bold" }}>Authors</span> of the week
          </p>
          <div className={styles.topSection}>
            <div className={styles.userContainer}>
              <img
                src={require("../assets/exampleImage.jpg")}
                width="50"
                height="50"
                className={styles.userLogo}
              />
              <div>
                <p className={styles.username}>@John Doe</p>
                <p className={styles.level}>Level 15</p>
              </div>
            </div>
            <div className={styles.userContainer}>
              <img
                src={require("../assets/exampleImage.jpg")}
                width="50"
                height="50"
                className={styles.userLogo}
              />
              <div>
                <p className={styles.username}>@John Doe</p>
                <p className={styles.level}>Level 15</p>
              </div>
            </div>
          </div>

          <div className={styles.topSection}>
            <div className={styles.userContainer}>
              <img
                src={require("../assets/exampleImage.jpg")}
                width="50"
                height="50"
                className={styles.userLogo}
              />
              <div>
                <p className={styles.username}>@John Doe</p>
                <p className={styles.level}>Level 15</p>
              </div>
            </div>
            <div className={styles.userContainer}>
              <img
                src={require("../assets/exampleImage.jpg")}
                width="50"
                height="50"
                className={styles.userLogo}
              />
              <div>
                <p className={styles.username}>@John Doe</p>
                <p className={styles.level}>Level 15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
