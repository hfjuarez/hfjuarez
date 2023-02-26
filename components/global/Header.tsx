import React, { Component } from "react";
import styles from "../../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.title}>
          <h2 className="txt-100">Hello!</h2>
          <h1>I&apos;m Hernán.</h1>
          <h3 className="txt-300 op-8">Full Stack developer</h3>
        </div>
        <img src="https://hfjuarez.imgix.net/dark-profile.png" alt="me" />
      </header>
    );
  }
}
