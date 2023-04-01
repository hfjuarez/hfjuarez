import React, { Component } from "react";
import styles from "../../styles/Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <header className={styles.header}>
          <div className={styles.title}>
            <h2 className="op-5">Hello!</h2>
            <h1>I&apos;m Hernán.</h1>
            <h3 className="op-8">
              Full Stack
              <span className="txt-secondary">&nbsp;developer</span>
            </h3>
          </div>
          <img src="https://github.com/hfjuarez/hfjuarez/blob/main/public/images/dark-profile.png?raw=true" alt="me" />
        </header>
      </div>
    );
  }
}
