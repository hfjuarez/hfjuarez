import React, { Component, useState } from "react";
import styles from "../../styles/Footer.module.css";
export default class index extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p className="moda txt-300 txt-center m-0">
            Made by
            <span className="moda txt-md txt-600">&nbsp;Hernán</span>
          </p>

          <ul className={styles.links}>
            <li>
              <a
                className="moda op-5"
                href="https://www.linkedin.com/in/hfjuarez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a className="moda op-5" href="mailto:herfj4@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
