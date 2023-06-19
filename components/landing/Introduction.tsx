import React, { Component } from "react";
import Link from "next/link";
import styles from "@/styles/Introduction.module.scss";

export default class Introduction extends Component {
  render() {
    return (
      <section id="intro" className="bg-primary-section">
        <div className="container">
          <div className={`card-container ${styles.introduction}`}>
            <div className={styles.header}>
              <h5>Hernán. </h5>
            </div>
            <div className={styles.main}>
              <h1>
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
                I have experience developing with <b>NodeJS</b> and <b>Vue</b>,
                and have also gained proficiency in other popular frameworks
                like Ruby on Rails, React, and React Native.
              </p>
              <Link href="/me">About Me</Link>
            </div>
            <div className={styles["section-2"]}>
              <h6>Biggest challenge you&apos;ve faced?</h6>
              <p>
                Create the new LANDSale system to improve our community of 3
                millions users. Giving a profit of 750,000 USD in less than 1
                month.
              </p>
              <Link href="/experience">My Experience</Link>
            </div>
            <div className={styles.footer}>
              <ul>
                <li>
                  <a
                    href="https://github.com/hfjuarez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="https://hfjuarez.imgix.net/github-mark.svg" />
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
          </div>
        </div>
      </section>
    );
  }
}
