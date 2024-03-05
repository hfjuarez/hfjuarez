import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

import containerStyle from './container.module.scss';

type ContainerProps = {
	as: 'article' | 'div' | 'main' | 'section';
	className?: string;
	children: ReactNode;
	ref?: React.RefObject<HTMLDivElement>; // Add a ref prop
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ as: Component, children, className, ...props }, ref) => {
		const combinedClassNames = classNames(containerStyle[Component], className);
		return (
			<Component className={combinedClassNames} {...props} ref={ref}>
				{children}
			</Component>
		);
	},
);

Container.displayName = 'Container';

export default Container;
