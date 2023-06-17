import React, { ReactNode, CSSProperties } from 'react';
import containerStyle from "./container.module.scss";
import classNames from 'classnames';

type ContainerProps = {
  type?: 'basic';
  css?: CSSProperties;
  className?: string;
  children: ReactNode;
};

const Container = ({ type = 'basic', css, className, children }: ContainerProps) => {
  const combinedClassNames = classNames(containerStyle[type], className);
  return <div style={css} className={combinedClassNames}>{children}</div>;
};

export default Container;