/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import Link from 'next/link';

import type { Instruments } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const Card = ({ title, media }: Instruments) => {
	return (
		<Container category="article" padding="min" className={css.root}>
			{media?.url && (
				<img
					className={css.icon}
					src={media?.url}
					alt="{media?.alternativeText}"
				/>
			)}
			{title && <p className={css.description}>{parser(title)}</p>}
			<Link href="#" className={css.link} />
		</Container>
	);
};
