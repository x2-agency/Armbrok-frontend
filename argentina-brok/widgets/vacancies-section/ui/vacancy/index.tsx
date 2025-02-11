import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { VacancyProps } from '@/widgets/vacancies-section/vacancies.types';

import css from './index.module.css';

export const Vacancy = ({ name, link }: VacancyProps) => {
	return (
		<Container category="article" padding="min" className={css.root}>
			<h4 className={css.name}>{parser(name)}</h4>
			<Button
				variant="next"
				iconRotate={180}
				href={link}
				className={css.button}
			>
				Read more
			</Button>
		</Container>
	);
};
