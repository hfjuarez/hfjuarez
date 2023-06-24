import React, { ReactNode } from 'react';
import { useRouter } from "next/router";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import classNames from 'classnames';
// Styles
import linkStyle from "./link.module.scss";
import colorsStyles from "@/styles/colors.module.scss";
// Utils
import { UIColors } from 'utils/ui';

interface LinkProps extends NextLinkProps {
  href: string,
  type?: 'primary' | "secondary" | "navbar"
  activeClassName?: string;
  colorScheme?: UIColors;
  className?: string;
  target?: string,
  rel?: string
  children: ReactNode;
}


const Link = ({ type = "primary", activeClassName = "active", colorScheme = UIColors.PRIMARY, className, children, ...props }: LinkProps) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href;
  const linkClasses = classNames(linkStyle[type], colorsStyles[colorScheme], { [activeClassName]: isActive }, className);
  return !!props.rel && !!props.target ? <a className={linkClasses} {...props}>{children}</a> : <NextLink className={linkClasses} {...props}>{children}</NextLink>;
};

export default Link;