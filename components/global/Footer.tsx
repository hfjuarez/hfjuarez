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
          <p className="txt-200">
            Made with <span style={{ color: "var(--red)" }}>&hearts;</span> in
            Uruguay &#127482;&#127486;
          </p>
          <ul className={styles.links}>
            <li>
              <a
                href="https://www.linkedin.com/in/hfjuarez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:herfj4@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
