import React, { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';
// Styles
import textStyle from './text.module.scss';

type TextProps = HTMLAttributes<HTMLElement> & {
	as?: 'b' | 'em' | 'i' | 'p';
	className?: string;
	children: ReactNode;
};

const Text = ({
	as: Component = 'p',
	className,
	children,
	...props
}: TextProps) => {
	const textClasses = classNames(textStyle[Component], className);
	return (
		<Component className={textClasses} {...props}>
			{children}
		</Component>
	);
};

export default Text;
