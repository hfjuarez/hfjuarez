import React, { Component } from "react";
import classNames from "classnames";
// Components
import Container from "@/components/common/layout/container";
import Heading from "@/components/common/layout/heading";
import Text from "@/components/common/layout/text";
import Pill from "@/components/common/pill";
// Utils
import { UIColors } from 'utils/ui';
// Styles
import opacityStyles from "@/styles/opacity.module.scss";
import colorsStyles from "@/styles/colors.module.scss";
import heroStyles from "./hero.module.scss";

const Header = () => {
  const combinedClassNames = classNames(
    colorsStyles.secondary,
    opacityStyles["op-8"]
  );
  return (
    <Container as="div" className={heroStyles["reduce-height"]}>
      <header className={heroStyles.header} aria-label="Hey! I'm Hernán">
        <div className={heroStyles.introduction}>
          <Text className={heroStyles.hey}>Hey!</Text>
          <Heading as="h1">I&apos;m Hernán.</Heading>
          <Heading as="h2">
            <span>Full Stack</span>
            <span className={combinedClassNames}>&nbsp;developer</span>
          </Heading>
          <div className={heroStyles.pills}>
            <Pill colorScheme={UIColors.SECONDARY}>VueJS</Pill>
            <Pill colorScheme={UIColors.SECONDARY}>ReactJS</Pill>
            <Pill colorScheme={UIColors.SECONDARY}>NodeJS</Pill>
          </div>
        </div>
        <div className={heroStyles["profile-image"]}>
          <img
            src="https://github.com/hfjuarez/hfjuarez/blob/main/public/images/dark-profile.png?raw=true"
            alt="me"
          />
        </div>
      </header>
    </Container>
  );
};

export default Header;
