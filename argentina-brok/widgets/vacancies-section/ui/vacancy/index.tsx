/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { VacancyProps } from '@/widgets/vacancies-section/vacancies.types';

import css from './index.module.css';

export const Vacancy = ({
	name,
	link,
	description,
	icon,
	className,
}: VacancyProps) => {
	return (
		<Container
			category="article"
			padding="min"
			className={cx(css.root, className)}
		>
			<div className={css.content}>
				{icon && (
					<div className={css.iconWrap}>
						<img className={css.icon} src={icon} alt="icon" />
					</div>
				)}
				<div className={css.wrap}>
					{name && <h4 className={css.name}>{parser(name)}</h4>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</div>
			</div>
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
