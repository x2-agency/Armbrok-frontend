/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { AssetManagementCardProps } from '@/view/home/types/response';

import css from './index.module.css';

export type AssetManagmentProps = {
	data?: AssetManagementCardProps;
};

export const AssetManagment = ({ data }: AssetManagmentProps) => {
	const { title, description, mediaContent, button, link } = data ?? {};
	return (
		<Container className={css.root}>
			<article className={cx(css.wrap, 'hybrid')}>
				<div className={css.contnet}>
					<h2 className={css.title}>{parser(title ?? '')}</h2>
					{description && (
						<p className={css.description}>{parser(description ?? '')}</p>
					)}
					<Button
						className={css.button}
						category="big"
						href={button?.link}
						variant="filled"
					>
						{parser(button?.text ?? '')}
					</Button>
				</div>
				<div className={css.imgWrap}>
					{mediaContent?.url && (
						<img
							className={css.image}
							src={mediaContent?.url ?? ''}
							alt={mediaContent?.alternativeText ?? ''}
						/>
					)}
				</div>
			</article>
			<Link className={css.link} href={link ?? ''} />
		</Container>
	);
};
