import cx from 'clsx';
import type { MouseEvent } from 'react';

import css from './index.module.css';

type TabProps = {
	name: string;
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

export const Tab = ({ name, className, handleClick, ...props }: TabProps) => {
	return (
		<button onClick={handleClick} className={cx(css.tab, className)} {...props}>
			{name}
		</button>
	);
};
