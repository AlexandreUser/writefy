import React from "react";
import Menu from "../component/leftBar.js";
import styles from "./mainContainer.module.css";
function SmallBook(props) {
  return (
    <>
      {" "}
      <div style={{ display: "flex", marginTop: "10px" }}>
        <img src={props.image} className={styles.smallBook} />
        <div style={{ display: "block" }}>
          <p className={styles.smallBookTitle}>{props.title}</p>
          <p className={styles.achievementBook}>
            {" "}
            You've completed{" "}
            <span className={styles.percent}>{props.percent}%</span> of this
            book
          </p>
          <button className={styles.buttonRead}>Read more</button>
        </div>
      </div>
      <div className={styles.horizontalDivider}></div>
    </>
  );
}
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
            <p className={styles.titleForImage}>Book Title</p>

            <div className={styles.boxBehind}></div>
            <img
              src={require("../assets/exampleImage.jpg")}
              width="25"
              height="25"
              className={styles.userLogoAbsolute}
            />
            <p className={styles.authorForImage}>@ John doe</p>

            <img
              src={require("../assets/book_example_2.jpg")}
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
      <div className={styles.lineDivider}></div>

      <div className={styles.sectionTwoContainer}>
        <p style={{ color: "#545454" }} className={styles.mainTitle}>
          Continue{" "}
          <span style={{ fontWeight: "bold" }}>
            Read<span style={{ color: "orange" }}>ing </span>...
          </span>
        </p>
        <div>
          <SmallBook
            title="The Arrivals"
            percent={54}
            image={require("../assets/example_3.jpeg")}
          />
          <SmallBook
            title="Story Book"
            percent={43}
            image={require("../assets/example_4.jpeg")}
          />
          <SmallBook
            title="Your book title"
            percent={78}
            image={require("../assets/example_5.jpeg")}
          />
        </div>
      </div>
    </div>
  );
}
