import React, { ReactNode, CSSProperties } from 'react';
import headingStyle from "./heading.module.scss";
import classNames from 'classnames';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  css?: CSSProperties;
  className?: string;
  children: ReactNode;
};

const Heading = ({ as: Component, css, className, children }: HeadingProps) => {
  const combinedClassNames = classNames(headingStyle[Component], className);
  return <Component style={css} className={combinedClassNames}>{children}</Component>;
};

export default Heading;