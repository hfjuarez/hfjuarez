import React, { Component } from "react";
import styles from "../../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="title">
          <h2 className="m-0">Hello!</h2>
          <h1 className="m-0">I&apos;m Hernán.</h1>
          <h3 className="m-0 op-8">Full Stack developer</h3>
        </div>
        <div className={styles['profile-img']}>
          <picture>
            <source
              srcSet="./white-profile.PNG"
              media="(prefers-color-scheme: dark)"
            />
            <img src="./dark-profile.PNG" alt="me" />
          </picture>
        </div>
      </header>
    );
  }
}
