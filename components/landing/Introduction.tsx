import React, { Component } from "react";
import styles from "../../styles/Introduction.module.css";

export default class Introduction extends Component {
  state = {};

  render() {
    return (
      <section className={`${styles["introduction"]} card-container`}>
        <h1>
          Ambitious developer
          <br />
          for <em>ambitious</em> companies.
        </h1>
      </section>
    );
  }
}
