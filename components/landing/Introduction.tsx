import React, { Component } from "react";
import Link from "next/link";
import styles from "../../styles/Introduction.module.scss";

export default class Introduction extends Component {
  state = {};
  calculateAge() {
    var diff_ms = Date.now() - new Date(2000, 6, 4).getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  render() {
    return (
      <section className={`card-container ${styles["introduction"]}`}>
        <div className={styles.header}></div>
        <div className={styles.main}>
          <h1 className="txt-300">
            Ambitious,
            <br />
            Compromise
            <br />
            & Proactive
            <br />
            <span className="txt-secondary">developer.</span>
          </h1>
        </div>
        <div className={styles["section-1"]}>
          <h6>A bit about me</h6>
          <p>
            I have experience developing with <b>NodeJS</b> and <b>Vue</b>, and
            have also gained proficiency in other popular frameworks like Ruby
            on Rails, React, and React Native.
          </p>
          <Link href="/me">
            <div className="plus-icon"/>
            About me
          </Link>
        </div>
        <div className={styles["section-2"]}>
          <h6>Biggest challenge you&apos;ve faced?</h6>
          <p>
            Create the new LANDSale system to improve our community of 3
            millions users.
          </p>
          <p>Giving a profit of 750,000 USD in less than 1 month.</p>
          <Link href="/experience"> 
            <div className="plus-icon"/>
            My experience
          </Link>
        </div>
        <div className={styles.footer}>
          <ul>
            <li>
              <a
                href="https://github.com/hfjuarez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hfjuarez.imgix.net/github-mark.svg"
                  alt="Github logo"
                />
                <p>@hfjuarez</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hfjuarez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
                  alt="Github logo"
                />
                <p>Linkedin</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
