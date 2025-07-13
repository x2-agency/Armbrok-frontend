import cx from 'clsx';
import type { PropsWithChildren } from 'react';

import css from './index.module.css';

type HeroContainer = {
	className?: string;
} & PropsWithChildren;

export const HeroContainer = ({ children, className }: HeroContainer) => {
	return <section className={cx(css.root, className)}>{children}</section>;
};
