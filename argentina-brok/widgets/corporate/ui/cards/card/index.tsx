/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type CardType = {
	id: number;
	text: string;
	url: string;
};

export const Card = ({ id, text, url }: CardType) => {
	return (
		<Container key={id} category="article" padding="min" className={css.root}>
			<img className={css.icon} src={url} alt="{media?.alternativeText}" />
			<p className={css.description}>{text}</p>
			<Link href="#" className={css.link} />
		</Container>
	);
};
