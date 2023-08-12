import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
// Styles
import buttonStyle from './button.module.scss';
import { UIColors } from 'utils/ui';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	colorScheme?: UIColors;
	size?: 'large' | 'medium' | 'small';
	className?: string;
	type?: 'button' | 'reset' | 'submit';
	marquee?: boolean;
	children: ReactNode;
};

const Button = ({
	colorScheme = UIColors.PRIMARY,
	size = 'medium',
	className,
	type = 'button',
	marquee = false,
	children,
	...props
}: ButtonProps) => {
	const marqueeClass = marquee && buttonStyle['btn-marquee'];
	const buttonClasses = classNames(
		buttonStyle[colorScheme],
		buttonStyle[size],
		marqueeClass,
		className,
	);

	return (
		<button type={type} className={buttonClasses} {...props}>
			{marquee ? (
				<div className={buttonStyle['txt-marquee']}>
					<div>
						<span>{children}&nbsp;&nbsp;-&nbsp;&nbsp;</span>
						<span>{children}&nbsp;&nbsp;-&nbsp;&nbsp;</span>
					</div>
				</div>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
