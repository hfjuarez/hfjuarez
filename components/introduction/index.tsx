import React, { Component } from "react";

// Components
import Container from "@/components/common/layout/container";
import Heading from "@/components/common/layout/heading";
import Text from "@/components/common/layout/text";
import Link from "@/components/common/layout/link";

// Styles
import introductionStyles from "./introduction.module.scss";
import opacityStyles from "@/styles/opacity.module.scss";
import colorsStyles from "@/styles/colors.module.scss";
// Utils
import { UIColors } from "utils/ui";

export default class Introduction extends Component {
  render() {
    return (
      <Container as="section" key="intro">
        <div className={introductionStyles.introduction}>
          <div className={introductionStyles.main}>
            <Heading as={"h1"}>
              Ambitious,
              <br />
              Compromise
              <br />
              & Proactive
              <br />
              <span className={colorsStyles.secondary}>developer.</span>
            </Heading>
          </div>
          <div className={introductionStyles["section-1"]}>
            <Heading as={"h6"} className={opacityStyles["op-8"]}>
              A bit about me
            </Heading>
            <Text className={opacityStyles["op-8"]}>
              I have experience developing with <b>NodeJS</b> and <b>Vue</b>,
              and have also gained proficiency in other popular frameworks like
              Ruby on Rails, React, and React Native.
            </Text>
            <Link href="/me" type={UIColors.SECONDARY}>About Me</Link>
          </div>
          <div className={introductionStyles["section-2"]}>
            <Heading as={"h6"} className={opacityStyles["op-8"]}>Biggest challenge you&apos;ve faced?</Heading>
            <Text className={opacityStyles["op-8"]}>
              Create the new LANDSale system to improve our community of 3
              millions users. Giving a profit of 750,000 USD in less than 1
              month.
            </Text>
            <Link href="/experience" type={UIColors.SECONDARY}>My Experience</Link>
          </div>
          <div className={introductionStyles.footer}>
            <ul>
              <li>
                <Link
                  href="https://github.com/hfjuarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary"
                >
                  <img src="https://hfjuarez.imgix.net/github-mark.svg" />
                  <Text>@hfjuarez</Text>
                </Link>
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
                  <Text>Linkedin</Text>
                </a>
              </li>
            </ul>
          </div>
        </div >
      </Container >
    );
  }
}
