import cx from 'clsx';

import BackSVG from '@/public/assets/icon/back.svg';

import css from './index.module.css';
import type { ButtonProps } from './types/button.types';

export const Button = ({
	href,
	className,
	variant = 'outline',
	children,
	type = 'button',
	onClick,
}: ButtonProps) => {
	if (href) {
		return (
			<a className={cx(css.root, className, css[variant])} href={href}>
				{variant === 'back' && <BackSVG className={css.icon} />}
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
			{variant === 'back' && <BackSVG className={css.icon} />}
			{children}
		</button>
	);
};
