'use client';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export type DocumentProps = {
	icon: string;
	name: string;
	type: string;
	size: string;
};

export const Document = ({ icon, name, type, size }: DocumentProps) => {
	return (
		<article className={css.root}>
			<div className={css.leftPart}>
				<img src={icon} alt={name} className={css.icon} />
				<header className={css.header}>
					<h3>{name}</h3>
					<div className={css.info}>
						<p>{type}</p>
						<div className={css.circle} />
						<p>{size}</p>
					</div>
				</header>
			</div>
			<Button href="#" variant="next" iconRotate={270} className={css.button}>
				Download
			</Button>
		</article>
	);
};
