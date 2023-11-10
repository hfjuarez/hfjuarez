import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
// Styles
import headingStyle from './heading.module.scss';
import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

type HeadingProps = HTMLAttributes<HTMLElement> & {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	colorScheme?: UIColors;
	className?: string;
	children: ReactNode;
	ref: React.RefObject<HTMLHeadingElement>; // Add a ref prop
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	(
		{
			as: Component,
			colorScheme = UIColors.PRIMARY,
			className,
			children,
			...props
		},
		ref,
	) => {
		const headingClasses = classNames(
			headingStyle[Component],
			colorsStyles[colorScheme],
			className,
		);
		return (
			<Component className={headingClasses} {...props} ref={ref}>
				{children}
			</Component>
		);
	},
);

Heading.displayName = 'Heading';

export default Heading;
