import React, { Component } from "react";
import styles from "../../styles/Stack.module.css";

export default class Stack extends Component {
  state = {};

  render() {
    return (
      <div className={`${styles["stack"]} divider`}>
        <div className={`${styles["stack-content"]}`}>
          <div className={styles["fe"]}>
            <h4 className="m-0">Vue</h4>
            <h4 className="m-0 op-8">React</h4>
            <h4 className="m-0 op-8">React Native</h4>
          </div>
          <div className={styles["be"]}>
            <h4 className="m-0">NodeJS</h4>
            <h4 className="m-0 op-8">Ruby on Rails</h4>
            <h4 className="m-0 op-8">Java</h4>
          </div>
          <div className="ss">
            <h4 className="m-0">AWS</h4>
            <h4 className="m-0 op-8">SQL</h4>
            <h4 className="m-0 op-8">MongoDB</h4>
          </div>
        </div>
        <div className={`${styles["stack-full"]} op-5 mt-5`}>
            <h6 className="m-0">NextJS</h6>
            <h6 className="m-0">NuxtJS</h6>
            <h6 className="m-0">SCSS</h6>
            <h6 className="m-0">Swagger</h6>
            <h6 className="m-0">E2E</h6>
            <h6 className="m-0">Unit test</h6>
            <h6 className="m-0">Mongoose</h6>
            <h6 className="m-0">Sequelize</h6>
            <h6 className="m-0">Docker</h6>
            <h6 className="m-0">Datadog</h6>
            <h6 className="m-0">OneSignal</h6>
        </div>
      </div>
    );
  }
}
