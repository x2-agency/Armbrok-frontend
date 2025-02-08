import cx from 'clsx';

import BackSVG from '@/public/assets/back.svg';

import css from './index.module.css';
import type { ButtonProps } from './types/button.types';

export const Button = ({
	href,
	className,
	variant = 'outline',
	children,
	type = 'button',
	category = 'default',
	onClick,
	iconRotate,
}: ButtonProps) => {
	if (href) {
		return (
			<a
				className={cx(css.root, className, css[variant], css[category])}
				href={href}
			>
				{variant === 'back' && <BackSVG className={css.icon} />}
				{children}
				{variant === 'next' && (
					<BackSVG
						className={css.icon}
						style={{ rotate: `${iconRotate}deg` }}
					/>
				)}
			</a>
		);
	}

	return (
		<button
			className={cx(css.root, className, css[variant], css[category])}
			type={type}
			onClick={onClick}
		>
			{variant === 'back' && <BackSVG className={css.icon} />}
			{children}
			{variant === 'next' && (
				<BackSVG className={css.icon} style={{ rotate: `${iconRotate}deg` }} />
			)}
		</button>
	);
};
