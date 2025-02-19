import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Vacancy } from './ui/vacancy';
import type { VacanciesSectionProps } from './vacancies.types';

export const VacanciesSection = ({
	title,
	description,
	vacancies,
	className,
}: VacanciesSectionProps) => {
	if (!vacancies || vacancies.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(title)}</h2>
			<p className={css.description}>{parser(description)}</p>
			<ul className={css.vacancies}>
				{vacancies.map((vacancy, index) => (
					<li key={index}>
						<Vacancy name={vacancy.name} link={vacancy.link} />
					</li>
				))}
			</ul>
		</Container>
	);
};
