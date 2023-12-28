import React, { ReactNode } from 'react';
import classNames from 'classnames';

import containerStyle from './container.module.scss';

type ContainerProps = {
	as: 'article' | 'div' | 'main' | 'section';
	className?: string;
	children: ReactNode;
};

const Container = ({
	as: Component,
	className,
	children,
	...props
}: ContainerProps) => {
	const combinedClassNames = classNames(containerStyle[Component], className);
	return (
		<Component className={combinedClassNames} {...props}>
			{children}
		</Component>
	);
};

export default Container;
