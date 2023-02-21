import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default class index extends Component<{}> {
  contact() {
    window.location.href = "mailto:herfj4@gmail.com";
  }
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles["navbar-content"]}>
          <div className="navbar-title">
            <Link href="/">
              <h6 className="m-0">Hernán.</h6>
            </Link>
          </div>
          <div className={styles["navbar-options"]}>
            <button onClick={this.contact}>Contact</button>
          </div>
        </div>
      </div>
    );
  }
}
