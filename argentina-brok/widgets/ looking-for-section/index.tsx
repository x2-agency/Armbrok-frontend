import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type LookingForSectionProps = {
	title: string;
	description: string;
};

export const LookingForSection = ({
	title,
	description,
}: LookingForSectionProps) => {
	return (
		<Container className={css.root}>
			<h1 className={css.title}>{title}</h1>
			<p className={css.description}>{parser(description)}</p>
		</Container>
	);
};
