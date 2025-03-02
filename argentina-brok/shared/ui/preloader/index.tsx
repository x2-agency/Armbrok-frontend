import cx from 'clsx';

import css from './index.module.css';
import { Block } from './ui/block';

export const Preloader = ({
	className,
	isDark,
}: {
	className?: string;
	isDark?: boolean;
}) => {
	return (
		<div
			className={cx(css.Preloader, className, isDark ? css.dark : css.white)}
		>
			<Block />
		</div>
	);
};
