import React, { ReactNode } from 'react';
import containerStyle from "./container.module.scss";
import classNames from 'classnames';

type ContainerProps = {
  as: 'section' | 'article' | 'main' | 'div';
  className?: string;
  children: ReactNode;
};

const Container = ({ as: Component, className, children, ...props }: ContainerProps) => {
  const combinedClassNames = classNames(containerStyle[Component], className);
  return <Component className={combinedClassNames} {...props}>{children}</Component>;
};

export default Container;