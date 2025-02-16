import cx from 'clsx';
import type { MouseEvent } from 'react';

import css from './index.module.css';

type TabProps = {
	title: string;
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

export const Tab = ({ title, className, handleClick, ...props }: TabProps) => {
	return (
		<button onClick={handleClick} className={cx(css.tab, className)} {...props}>
			{title}
		</button>
	);
};
