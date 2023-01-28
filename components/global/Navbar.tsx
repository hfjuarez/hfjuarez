import React, { Component, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { showElement } from "../../utils/conditionalRendering";

type State = {
  showTitle: boolean;
};

export default class index extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showTitle: false,
    };
    this.handleShowTitle = this.handleShowTitle.bind(this);
  }
  handleShowTitle() {
    this.setState({ showTitle: window.pageYOffset > screen.availHeight * 0.8 });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleShowTitle);
  }
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles["navbar-content"]}>
          <div className="navbar-title">
            <h6 className="m-0" style={showElement(this.state.showTitle)}>
              Hernán.
            </h6>
          </div>
          <div className={styles["navbar-options"]}>
            <button>Contact</button>
          </div>
        </div>
      </div>
    );
  }
}
