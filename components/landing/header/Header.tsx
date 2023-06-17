import React, { Component } from "react";
import styles from "./Header.module.scss";
import opacityStyles from "@styles/opacity.module.scss";
import colorsStyles from "@styles/colors.module.scss";
import Heading from "@components/layout/heading/heading.tsx";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <header className={styles.header}>
          <div className={styles.name}>
            <Heading as="h2" className={opacityStyles["op-5"]}>Hello!</Heading>
            <Heading as="h1">I&apos;m Hernán.</Heading>
            <Heading as="h3" className={opacityStyles["op-8"]}>
              Full Stack
              <span className={colorsStyles.secondary}>&nbsp;developer</span>
            </Heading>
          </div>
          <div className={styles["profile-image"]}>
            <img
              src="https://github.com/hfjuarez/hfjuarez/blob/main/public/images/dark-profile.png?raw=true"
              alt="me"
            />
          </div>
        </header>
      </div>
    );
  }
}
