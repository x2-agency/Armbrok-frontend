import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const AssetManagment = ({
	title,
	description,
	buttonText,
	// image,
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
			<div className={css.contnet}>
				<h2 className={css.title}>{parser(title)}</h2>
				<p className={css.description}>{parser(description)}</p>
				<Button category="big" href={href} variant="filled">
					{parser(buttonText)}
				</Button>
			</div>
			{/* <img className={css.image} src={image} alt="banner picture" /> */}
		</Container>
	);
};
