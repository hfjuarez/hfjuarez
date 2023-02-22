import React from "react";
import Card from "../elements/Card";
import styles from "../../styles/Stack.module.css";

export default function Stack() {
  return (
    <section className={`${styles["stack"]}`}>
      <h6 className="mb-2">Technologies </h6>
      <div className={`${styles["stack-content"]}`}>
        <Card className={styles["fe"]}>
          <>
            <h4>Vue</h4>
            <h4>React</h4>
            <h4>React Native</h4>
          </>
        </Card>
        <Card className={styles["be"]}>
          <>
            <h4>NodeJS</h4>
            <h4>Ruby on Rails</h4>
            <h4>Java</h4>
          </>
        </Card>
        <Card className={styles["be"]}>
          <>
            <h4>AWS</h4>
            <h4>SQL</h4>
            <h4>MongoDB</h4>
          </>
        </Card>
      </div>
    </section>
  );
}
