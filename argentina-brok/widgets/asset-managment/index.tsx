/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const AssetManagment = ({
	title,
	description,
	buttonText,
	image,
	href,
}: {
	title: string;
	description: string;
	href: string;
	image: string;
	buttonText: string;
}) => {
	return (
		<Container category="section" padding="hybrid" className={css.root}>
			<div className={css.contnet}>
				<h2 className={css.title}>{parser(title)}</h2>
				<p className={css.description}>{parser(description)}</p>
				<Button
					className={css.button}
					category="big"
					href={href}
					variant="filled"
				>
					{parser(buttonText)}
				</Button>
			</div>
			<div className={css.imgWrap}>
				<img className={css.image} src={image} alt="banner picture" />
			</div>
		</Container>
	);
};
