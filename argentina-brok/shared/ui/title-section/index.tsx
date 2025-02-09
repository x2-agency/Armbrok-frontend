import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type TitleSectionProps = {
	data: {
		title: string;
		description: string;
	};
	className?: string;
};

export const TitleSection = ({ data, className }: TitleSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(data.title)}</h2>
			<p className={css.description}>{parser(data.description)}</p>
		</Container>
	);
};
