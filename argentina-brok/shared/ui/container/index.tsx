import cx from 'clsx';
import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import css from './index.module.css';

type ContainerProps = {
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
	id?: string;
	style?: React.CSSProperties;
	padding?: 'min' | 'max' | 'hybrid' | 'default';
	category?: 'article' | 'section' | 'div';
};

export const Container = forwardRef<
	HTMLElement | HTMLDivElement,
	ContainerProps
>(
	(
		{
			children,
			className = '',
			id = '',
			style,
			fullWidth = false,
			padding = 'default',
			category = 'section',
		},
		ref
	) => {
		if (category === 'article') {
			return (
				<article
					id={id}
					className={cx(className, css[padding], {
						[css.full]: fullWidth,
					})}
					ref={ref as Ref<HTMLElement>}
					style={style}
				>
					{children}
				</article>
			);
		} else if (category === 'div') {
			return (
				<div
					id={id}
					className={cx(className, css[padding], {
						[css.full]: fullWidth,
					})}
					ref={ref as Ref<HTMLDivElement>}
					style={style}
				>
					{children}
				</div>
			);
		} else {
			return (
				<section
					id={id}
					className={cx(css.root, className, css[padding], {
						[css.full]: fullWidth,
					})}
					ref={ref}
					style={style}
				>
					{children}
				</section>
			);
		}
	}
);
