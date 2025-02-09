/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { PlacementItemProps } from '@/widgets/placements-section/placements.types';

import css from './index.module.css';

export const PlacementHead = ({
	icon,
	time,
	title,
}: PlacementItemProps['head']) => {
	return (
		<header className={css.header}>
			<img src={icon} alt="icon" className={css.icon} />
			<div className={css.titleBlock}>
				<h2 className={css.title}>{parser(title)}</h2>
				<p className={css.time}>{parser(time)}</p>
			</div>
		</header>
	);
};
