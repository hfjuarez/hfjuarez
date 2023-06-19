import React, { ReactNode } from 'react';
import containerStyle from "./container.module.scss";
import classNames from 'classnames';

type ContainerProps = {
  as: 'section' | 'article' | 'div';
  type?: 'basic';
  className?: string;
  children: ReactNode;
};

const Container = ({ as: Component, type = 'basic', className, children, ...props }: ContainerProps) => {
  const combinedClassNames = classNames(containerStyle[type], className);
  return <Component className={combinedClassNames} {...props}>{children}</Component>;
};

export default Container;