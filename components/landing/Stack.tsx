import React from "react";
import Card from "../elements/Card";
import styles from "../../styles/Stack.module.css";

export default function Stack() {
  return (
    <section className={`${styles["stack"]}`}>
      <h6 className="mb-2">Technologies </h6>
      <div className={`${styles["stack-content"]}`}>
        <Card className={styles["fe"]}>
          <ul className={styles["stack-list"]}>
            <li>Vue</li>
            <li>React</li>
            <li>React Native</li>
          </ul>
        </Card>
        <Card className={styles["be"]}>
          <ul className={styles["stack-list"]}>
            <li>NodeJs</li>
            <li>Ruby on Rails</li>
            <li>Java</li>
          </ul>
        </Card>
        <Card className={styles["ss"]}>
          <ul className={styles["stack-list"]}>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
