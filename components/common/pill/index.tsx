import React, { ReactNode } from 'react';
import classNames from 'classnames';
// Utils
import { UIColors } from 'utils/ui';
// Styles
import pillStyle from './pill.module.scss';

type PillProps = {
	colorScheme?: UIColors;
	outline?: boolean;
	className?: string;
	children: ReactNode;
};

const Pill = ({
	colorScheme = UIColors.PRIMARY,
	outline = true,
	className,
	children,
	...props
}: PillProps) => {
	const variant = outline ? 'outline' : 'filled';
	const pillClasses = classNames(
		pillStyle[variant],
		pillStyle[colorScheme],
		className,
	);
	return (
		<p className={pillClasses} {...props}>
			{children}
		</p>
	);
};

export default Pill;
