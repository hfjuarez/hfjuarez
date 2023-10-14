import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';
// Styles
import linkStyle from './link.module.scss';
import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

interface LinkProps extends NextLinkProps {
	href: string;
	type?: UIColors | 'text';
	activeClassName?: string;
	colorScheme?: UIColors;
	children: ReactNode;
	className?: string;
	outlined?: boolean;
	target?: string;
	rel?: string;
}

const Link = ({
	type = UIColors.PRIMARY,
	activeClassName = 'active',
	colorScheme = UIColors.PRIMARY,
	className,
	children,
	outlined = false,
	...props
}: LinkProps) => {
	const { asPath } = useRouter();
	const isActive = asPath === props.href;
	const linkClasses = classNames(
		linkStyle[type],
		colorsStyles[colorScheme],
		{ [activeClassName]: isActive },
		outlined && linkStyle.outlined,
		className,
	);
	return !!props.rel && !!props.target ? (
		<a className={linkClasses} {...props}>
			{children}
		</a>
	) : (
		<NextLink className={linkClasses} {...props}>
			{children}
		</NextLink>
	);
};

export default Link;
