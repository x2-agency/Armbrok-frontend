import cx from 'clsx';

import { Link } from '@/i18n/navigation';
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
	disabled,
	target = '_self',
	download,
}: ButtonProps) => {
	if (href) {
		return (
			<Link
				className={cx(css.root, className, css[variant], css[category])}
				href={href}
				download={download}
				target={target}
			>
				{variant === 'back' && <BackSVG className={css.icon} />}
				{children}
				{variant === 'next' && (
					<BackSVG
						className={css.icon}
						style={{ rotate: `${iconRotate}deg` }}
					/>
				)}
			</Link>
		);
	}

	if (download) {
		return (
			<Link
				className={cx(css.root, className, css[variant], css[category])}
				download={download}
				target={'_blank'}
				href={''}
			>
				{variant === 'back' && <BackSVG className={css.icon} />}
				{children}
				{variant === 'next' && (
					<BackSVG
						className={css.icon}
						style={{ rotate: `${iconRotate}deg` }}
					/>
				)}
			</Link>
		);
	}

	return (
		<button
			disabled={disabled}
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
