import React from "react";
import styles from "./leftBar.module.css";
import Menu from "../atom/menu";
export default function App(props) {
  return (
    <div className={styles.sideContainer}>
      <div className={styles.insiderContainer}>
        <div className={styles.logoContainer}>
          <img
            src={require("../logo.png")}
            width="50"
            height="50"
            className={styles.imageLogo}
          />
          <p className={styles.logoName}>
            Write<span className={styles.logoSpan}>fy</span>
          </p>
        </div>
        {props.menu && <Menu menu />}
        {props.shelf && <Menu shelf />}
        {props.search && <Menu search />}

        <div className={styles.statisticContainer}>
          <div className={styles.boxContainer}>
            <p className={styles.awardText}>
              <img
                src={require("../assets/book_award.png")}
                width="50"
                height="50"
              />
              <br />
              <span style={{ color: "orange", fontWeight: "bold" }}>100</span>
              <br /> Books readed!
            </p>
          </div>
          <div className={styles.boxContainer}>
            <p className={styles.awardText}>
              <img
                src={require("../assets/write_award.png")}
                width="50"
                height="50"
              />
              <br />
              <span style={{ color: "orange", fontWeight: "bold" }}>3</span>
              <br /> Books Writed!
            </p>
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
      <div className={styles.lineDivider}></div>
    </div>
  );
}
