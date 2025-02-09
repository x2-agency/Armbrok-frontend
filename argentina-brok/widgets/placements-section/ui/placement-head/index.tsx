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
			<img src={icon} alt="icon" />
			<div className={css.titleBlock}>
				<h2>{parser(title)}</h2>
				<p>{parser(time)}</p>
			</div>
		</header>
	);
};
