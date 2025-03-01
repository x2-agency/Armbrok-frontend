/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { CompaniesSectionProps } from '@/view/home/types/response';

import css from './index.module.css';

type CompaniesGroupProps = {
	data?: CompaniesSectionProps;
	className?: string;
};

export const CompaniesGroup = ({ data, className }: CompaniesGroupProps) => {
	const { title, companies = [] } = data ?? {};
	if (!companies || companies.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.companies}>
				{companies.map((value, index) => (
					<li key={index} className={css.company}>
						<img
							src={value.url}
							alt={value.alternativeText}
							className={css.companyIcon}
							draggable={false}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
