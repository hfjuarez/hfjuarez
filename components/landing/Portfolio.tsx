import React, { Component } from "react";
import Card from "../elements/Card";
import styles from "../../styles/Portfolio.module.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section className={`${styles.portfolio}`}>
        <Card
          className={`card-container ${styles["card-work"]} ${styles["sandbox"]}`}
        >
          <>
            <h4>The Sandbox</h4>
            <hr />
            <p className="txt-md txt-300">
              The Sandbox is a user-generated, virtual-gaming world where
              players can build, own and monetize their gaming experience.
            </p>
            <h6 className="mt-2 txt-md">What have I done?</h6>
            <hr />
            <p className="txt-md txt-300">
              Development and implementation of new LAND Sale system that impact
              directly in revenue of the company, creating more equity to be
              part of the metaverse and generate more value!
            </p>
          </>
        </Card>
        <Card
          className={`card-container ${styles["card-work"]} ${styles["cualit"]}`}
        >
          <>
            <h4>
              Cualit
              <hr />
            </h4>
            <p className="txt-md txt-300">
              Analysis and design, development, and maintenance of websites,
              servers, and mobile applications for several clients.
            </p>
          </>
        </Card>
      </section>
    );
  }
}
