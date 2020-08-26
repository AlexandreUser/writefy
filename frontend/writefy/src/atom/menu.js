import React from "react";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";
export default (props) => {
  return (
    <div className={styles.menuContainer}>
      <div>
        <Link to="/">
          <div className={styles.menuRow}>
            {props.menu && <div className={styles.activeBall}></div>}

            <img
              src={require("../assets/home.png")}
              width="20"
              height="20"
              className={styles.menuIcon}
            />
            <p>Home</p>
          </div>
        </Link>

        <div className={styles.horizontalDivider}></div>
      </div>
      <div>
        <Link to="/search">
          <div className={styles.menuRow}>
            {props.search && <div className={styles.activeBall}></div>}
            <img
              src={require("../assets/search.jpg")}
              width="20"
              height="20"
              className={styles.menuIcon}
            />
            <p>Search</p>
          </div>
        </Link>
        <div className={styles.horizontalDivider}></div>
      </div>
      <div>
        <Link to="/my-shelf">
          <div className={styles.menuRow}>
            {props.shelf && <div className={styles.activeBall}></div>}

            <img
              src={require("../assets/bookshelf.png")}
              width="20"
              height="20"
              className={styles.menuIcon}
            />
            <p>My Bookshelf</p>
          </div>
        </Link>

        <div className={styles.horizontalDivider}></div>
      </div>
    </div>
  );
};
