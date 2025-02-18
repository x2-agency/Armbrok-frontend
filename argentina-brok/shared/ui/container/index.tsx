import cx from 'clsx';
import type { ReactNode } from 'react';
import { createElement } from 'react';

import css from './index.module.css';

type ContainerProps = {
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
	style?: React.CSSProperties;
	padding?: 'p-32' | 'p-40' | 'hybrid' | 'default';
	category?: 'article' | 'section' | 'div';
};

export const Container = ({
	children,
	className = '',
	style,
	fullWidth = false,
	padding = 'default',
	category = 'section',
}: ContainerProps) => {
	const Element = category;

	return createElement(
		Element,
		{
			className: cx(className, css[padding], {
				[css.full]: fullWidth,
			}),
			style,
		},
		children
	);
};
