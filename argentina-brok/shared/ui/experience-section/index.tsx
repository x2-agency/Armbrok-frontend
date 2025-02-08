import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type ExperienceSectionProps = {
	className?: string;
	experience: Array<{
		title: string;
		description: string;
	}>;
};


export const ExperienceSection = ({
	className,
	experience,
}: ExperienceSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{experience.map((value, index) => (
				<article className={css.experience} key={index}>
					<h2 className={css.title}>{parser(value.title)}</h2>
					<p className={css.description}>{parser(value.description)}</p>
				</article>
			))}
		</Container>
	);
};
