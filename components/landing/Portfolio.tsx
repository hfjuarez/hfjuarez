import React, { Component } from "react";
import Link from "next/link";
import styles from "../../styles/Portfolio.module.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section className={`${styles.portfolio} divider`}>
        <div className={styles.selected}>
          <h4>The Sandbox</h4>
          <hr />
          <p className="lato txt-md txt-300">
            The Sandbox is a user-generated, virtual-gaming world where players
            can build, own and monetize their gaming experience.
          </p>
          <h6 className="mt-2 txt-md">What have I done?</h6>
          <hr/>
          <p className="lato txt-md txt-300">
            Development and implementation of new LAND Sale system that impact
            directly in revenue of the company, creating more equity to be part
            of the metaverse and generate more value!
          </p>
        </div>
        <div className={styles["portfolio-1"]}>
          <h5>
            Cualit
            <hr />
          </h5>
          <p className="lato txt-md txt-300">
            Analysis and design, development, and maintenance of websites,
            servers, and mobile applications for several clients.
          </p>
        </div>
        <div className={styles["portfolio-2"]}>
          <Link href="/works">
            <h5>More about my</h5>
            <h1 style={{ fontSize: "7rem", lineHeight: "7.5rem" }}>Work</h1>
          </Link>
        </div>
      </section>
    );
  }
}
