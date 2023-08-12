import React, { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';
// Styles
import textStyle from './text.module.scss';
import { UIColors } from 'utils/ui';

type TextProps = HTMLAttributes<HTMLElement> & {
	as?: 'b' | 'em' | 'i' | 'p';
	colorScheme?: UIColors;
	className?: string;
	children: ReactNode;
};

const Text = ({
	as: Component = 'p',
	colorScheme = UIColors.PRIMARY,
	className,
	children,
	...props
}: TextProps) => {
	const textClasses = classNames(
		textStyle[Component],
		textStyle[colorScheme],
		className,
	);
	return (
		<Component className={textClasses} {...props}>
			{children}
		</Component>
	);
};

export default Text;
