import cx from 'clsx';
import type { FC } from 'react';

import { Dot } from '@/shared/ui/preloader/ui/dot';

import css from './index.module.css';

export const Block: FC = () => {
	return (
		<div className={cx(css.block)}>
			<Dot position="first" />
			<Dot position="second" />
			<Dot position="third" />
		</div>
	);
};
