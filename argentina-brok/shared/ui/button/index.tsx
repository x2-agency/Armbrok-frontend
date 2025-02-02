import cx from 'clsx';

import css from './index.module.css';
import type { ButtonProps } from './types/button.types';

export const Button = ({
	href,
	className,
	variant = 'default',
	children,
	type = 'button',
	onClick,
}: ButtonProps) => {
	if (href) {
		return (
			<a className={cx(css.root, className, css[variant])} href={href}>
				{children}
			</a>
		);
	}

	return (
		<button
			className={cx(css.root, className, css[variant])}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
