import React from "react";
import styles from "../../styles/Stack.module.scss";

export default function Stack() {
  return (
    <section className="container">
      <div className={styles.stack}>
        <div className={styles["stack-title"]}>
          <h4>Technologies</h4>
          <h4 className="txt-secondary">Trusted by teammates.</h4>
        </div>
        <div className={styles["stack-content"]}>
          <div className={`card ${styles["stack-item"]}`}>
            <ul className={styles["stack-list"]}>
              <li>Vue</li>
              <li>React</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className={`card ${styles["stack-item"]}`}>
            <ul className={styles["stack-list"]}>
              <li>NodeJs</li>
              <li>Ruby on Rails</li>
              <li>Java</li>
            </ul>
          </div>
          <div className={`card ${styles["stack-item"]}`}>
            <ul className={styles["stack-list"]}>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
