import React, { Component } from "react";
import Link from "next/link";
// Components 
import Button from "@/components/common/button";
import Heading from "@/components/common/layout/heading";
// Styles
import styles from "./navbar.module.scss";
// Utils
import { UIColors } from "utils/ui";

export default class index extends Component<{}> {
  contact() {
    window.location.href = "mailto:herfj4@gmail.com";
  }
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles["navbar-content"]}>
          <Button colorScheme={UIColors.PRIMARY} onClick={this.contact}>LET&apos;S TALK</Button>
          <div className="navbar-title">
            <Link href="/">
              <Heading as="h6" colorScheme={UIColors.SECONDARY}>Hernán.</Heading>
            </Link>
          </div>
          <Button colorScheme={UIColors.PRIMARY} marquee={true} onClick={this.contact}>WHAT I HAVE BEEN UP TO</Button>
        </div>
      </nav>
    );
  }
}
