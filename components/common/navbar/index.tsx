import React, { useState, useEffect } from "react";
// import Link from "next/link";
import classNames from "classnames";
// Components
import Link from "@/components/common/layout/link";
import Button from "@/components/common/button";
import Heading from "@/components/common/layout/heading";
// Styles
import navbarStyles from "./navbar.module.scss";
// Utils
import { UIColors } from "utils/ui";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarClasses = classNames(navbarStyles.navbar, isScrolled && navbarStyles["navbar-border"])
  const showCenteredTextClasses = classNames(navbarStyles["centered-content"], isScrolled && navbarStyles["show-text"])
  const contact = () => {
    window.location.href = "mailto:herfj4@gmail.com";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClasses}>
      <div className={navbarStyles["navbar-content"]}>
        <Button colorScheme={UIColors.PRIMARY} onClick={contact}>
          LET&apos;S TALK
        </Button>
        <div className={showCenteredTextClasses}>
          <Link href="/works" type="navbar">
            Hernán
          </Link>
        </div>
        <Button colorScheme={UIColors.PRIMARY} marquee={true} onClick={contact}>
          WHAT I HAVE BEEN UP TO
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
