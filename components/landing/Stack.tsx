import React, { Component } from "react";
import styles from "../../styles/Stack.module.css";

export default class Stack extends Component {
  state = {};

  render() {
    return (
      <section className={`${styles["stack"]} divider`}>
        <div className={`${styles["stack-content"]}`}>
          <div className={styles["fe"]}>
            <h4>Vue</h4>
            <h4>React</h4>
            <h4>React Native</h4>
          </div>
          <div className={styles["be"]}>
            <h4>NodeJS</h4>
            <h4>Ruby on Rails</h4>
            <h4>Java</h4>
          </div>
          <div className="ss">
            <h4>AWS</h4>
            <h4>SQL</h4>
            <h4>MongoDB</h4>
          </div>
        </div>
        <div className={`${styles["stack-full"]} op-8 mt-5`}>
            <h6>NextJS</h6>
            <h6>NuxtJS</h6>
            <h6>SCSS</h6>
            <h6>Swagger</h6>
            <h6>E2E</h6>
            <h6>Unit test</h6>
            <h6>Mongoose</h6>
            <h6>Sequelize</h6>
            <h6>Docker</h6>
            <h6>Datadog</h6>
            <h6>OneSignal</h6>
        </div>
      </section>
    );
  }
}
