/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { AssetManagementCardProps } from '@/view/home/types/response';

export type AssetManagmentProps = {
	data: AssetManagementCardProps;
};

import css from './index.module.css';
export const AssetManagment = ({ data }: AssetManagmentProps) => {
	const { title, description, mediaContent, button } = data;
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
						href={button.link}
						variant="filled"
					>
						{parser(button.text)}
					</Button>
				</div>
				<div className={css.imgWrap}>
					<img
						className={css.image}
						src={mediaContent.url}
						alt={mediaContent.alternativeText}
					/>
				</div>
			</article>
		</Container>
	);
};
