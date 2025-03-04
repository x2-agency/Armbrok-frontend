import cx from 'clsx';

import css from './index.module.css';
import { Block } from './ui/block';

export const Preloader = ({ className }: { className?: string }) => {
	return (
		<div className={cx(css.Preloader, className)}>
			<Block />
		</div>
	);
};
