import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import heightStyle from './height.module.scss';

type HeightProps = HTMLAttributes<HTMLElement> & {
	as: 'article' | 'div' | 'main' | 'section';
	children: ReactNode;
	className?: string;
	id?: string;
	ref?: React.RefObject<HTMLDivElement>; // Add a ref prop
};

const HeightWrapper = forwardRef<HTMLDivElement, HeightProps>(
	({ as: Component, children, className, ...props }, ref) => {
		const combinedClassNames = classNames(heightStyle.wrapper, className);
		return (
			<Component className={combinedClassNames} {...props} ref={ref}>
				{children}
			</Component>
		);
	},
);

HeightWrapper.displayName = 'HeightWrapper';

export default HeightWrapper;
