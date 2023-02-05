import React, { Component } from "react";
import Link from 'next/link'
import styles from "../../styles/Portfolio.module.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section className={`${styles.portfolio} divider`}>
        <div className={styles.selected}>
          <h5 className="poppins txt-300">The Sandbox</h5>
          <hr />
          <p className="lato txt-md txt-300">
            The Sandbox is a user-generated, virtual-gaming world where players
            can build, own and monetize their gaming experience.
          </p>
        </div>
        <div className={styles["portfolio-1"]}>
          <h6 className="poppins txt-300">Cualit</h6>
          <hr />
          <p className="lato txt-300">
            The Sandbox is a user-generated, virtual-gaming world where players
            can build, own and monetize their gaming experience.
          </p>
        </div>
        <div className={styles["portfolio-2"]}>
            <Link href="/works">
            <h5>More about my</h5>
            <h1 style={{fontSize: "7rem", lineHeight: "7.5rem"}}>Work</h1>
            {/* <h2>Experience</h2> */}
            </Link>
        </div>
      </section>
    );
  }
}
