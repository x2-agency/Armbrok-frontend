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
		<Container className={css.root}>
			<title className={css.title}>{parser(title)}</title>
			<p className={css.description}>{parser(description)}</p>
			<Button href={href} variant="filled">
				{parser(buttonText)}
			</Button>
			<img className={css.image} src={image} alt="banner picture" />
		</Container>
	);
};
