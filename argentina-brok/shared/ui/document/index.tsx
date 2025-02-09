/* eslint-disable @next/next/no-img-element */
'use client';
import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export type DocumentProps = {
	icon: string;
	name: string;
	type: string;
	size: string;
	direction?: 'row' | 'column';
};

export const Document = ({
	icon,
	name,
	type,
	size,
	direction = 'row',
}: DocumentProps) => {
	return (
		<article className={cx(css.root, css[direction])}>
			<div className={css.leftPart}>
				<img src={icon} alt={name} className={css.icon} />
				<header className={css.header}>
					<h3 className={css.name}>{parser(name)}</h3>
					<div className={css.info}>
						<p className={css.type}>{parser(type)}</p>
						<div className={css.circle} />
						<p className={css.size}>{parser(size)}</p>
					</div>
				</header>
			</div>
			<Button href="#" variant="next" iconRotate={270} className={css.button}>
				Download
			</Button>
		</article>
	);
};
