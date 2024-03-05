import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
// Styles
import headingStyle from './heading.module.scss';

type HeadingProps = HTMLAttributes<HTMLElement> & {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
	children: ReactNode;
	ref: React.RefObject<HTMLHeadingElement>; // Add a ref prop
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ as: Component, className, children, ...props }, ref) => {
		const headingClasses = classNames(headingStyle[Component], className);
		return (
			<Component className={headingClasses} {...props} ref={ref}>
				{children}
			</Component>
		);
	},
);

Heading.displayName = 'Heading';

export default Heading;
