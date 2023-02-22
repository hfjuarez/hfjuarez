import React, { Component } from "react";
import styles from "../../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>Hello!</h2>
          <h1>I&apos;m Hernán.</h1>
          <h3 className="op-8">Full Stack developer</h3>
        </div>
        <div className={styles["profile-img"]}>
          <picture>
            {/* <source
              srcSet="https://hfjuarez.imgix.net/white-profile.png"
              media="(prefers-color-scheme: dark)"
            /> */}
            <img src="https://hfjuarez.imgix.net/dark-profile.png" alt="me" />
          </picture>
        </div>
      </header>
    );
  }
}
