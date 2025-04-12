'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import type { PropsWithChildren } from 'react';

import ArrowSVG from '@/public/assets/icons/arrow-without-stick-2.svg';

import css from './index.module.css';

type HideButtonProps = PropsWithChildren & {
	className?: string;
	opened?: boolean;
	onClick?: () => void;
};

export const HideButton = ({
	className,
	onClick,
	children,
	opened,
}: HideButtonProps) => {
	return (
		<button
			className={cx(css.root, className, { [css.opened]: opened })}
			onClick={onClick}
		>
			{parser(children as string)}
			<ArrowSVG className={css.arrow} />
		</button>
	);
};
