import cx from 'clsx';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';

import css from './index.module.css';

type TabProps = {
	name: string;
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

export const Tab = ({ name, className, handleClick, ...props }: TabProps) => {
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const isRuLocale = pathname.startsWith('/ru');

	return (
		<button
			onClick={handleClick}
			className={cx(
				css.tab,
				className,
				{ [css.hyTab]: isHyLocale },
				{ [css.ruTab]: isRuLocale }
			)}
			{...props}
		>
			{name}
		</button>
	);
};
