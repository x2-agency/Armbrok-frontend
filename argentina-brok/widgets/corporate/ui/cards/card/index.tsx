/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import { Container } from '@/shared/ui/container';
import type { CardType } from '@/widgets/corporate/model/corporate';

import css from './index.module.css';

export const Card = ({ icon, description, href }: CardType) => {
	return (
		<Container category="article" padding="min" className={css.root}>
			<img className={css.icon} src={icon ?? ''} alt="icon docs" />
			<p className={css.description}>{description}</p>
			<Link href={href} className={css.link} />
		</Container>
	);
};
