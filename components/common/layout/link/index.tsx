import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';
// Styles
import linkStyle from './link.module.scss';

// Utils
import { UIColors } from 'utils/ui';

interface LinkProps extends NextLinkProps {
	href: string;
	type?: UIColors | 'text';
	activeClassName?: string;

	children: ReactNode;
	className?: string;
	target?: string;
	rel?: string;
}

const Link = ({
	type = UIColors.PRIMARY,
	activeClassName = 'active',

	className,
	children,
	...props
}: LinkProps) => {
	const { asPath } = useRouter();
	const isActive = asPath === props.href;
	const linkClasses = classNames(
		linkStyle[type],
		{ [activeClassName]: isActive },
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
