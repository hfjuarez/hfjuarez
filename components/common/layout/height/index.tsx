import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import heightStyle from './height.module.scss';

type HeightProps = HTMLAttributes<HTMLElement> & {
	children: ReactNode;
	className?: string;
	id?: string;
	ref?: React.RefObject<HTMLDivElement>; // Add a ref prop
};

const HeightWrapper = forwardRef<HTMLDivElement, HeightProps>(
	({ children, className, ...props }, ref) => {
		const combinedClassNames = classNames(heightStyle.wrapper, className);
		return (
			<div className={combinedClassNames} {...props} ref={ref}>
				{children}
			</div>
		);
	},
);

HeightWrapper.displayName = 'HeightWrapper';

export default HeightWrapper;
