import React, { Component } from "react";
import classNames from 'classnames';
// Components
import Heading from "@/components/layout/heading";
import Container from "@/components/layout/container";
// Styles
import styles from "./Header.module.scss";
import colorsStyles from "@/styles/colors.module.scss";
import opacityStyles from "@/styles/opacity.module.scss";
export default class Header extends Component {
  render() {
    const combinedClassNames = classNames(colorsStyles.secondary, opacityStyles["op-8"]);
    return (
      <Container>
        <header className={styles.header}>
          <div className={styles.introduction}>
            <Heading as="h2">Hey!</Heading>
            <Heading as="h1">I&apos;m Hernán.</Heading>
            <Heading as="h3" className={colorsStyles.secondary}>
              <span>Full Stack</span>
              <span className={opacityStyles["op-8"]}>&nbsp;developer</span>
            </Heading>
          </div>
          <div className={styles["profile-image"]}>
            <img
              src="https://github.com/hfjuarez/hfjuarez/blob/main/public/images/dark-profile.png?raw=true"
              alt="me"
            />
          </div>
        </header>
      </Container>
    );
  }
}
