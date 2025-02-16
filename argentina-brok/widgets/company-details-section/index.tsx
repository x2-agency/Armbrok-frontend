import parser from 'html-react-parser';

import type { CompanyDetailsSection as CompanyDetailsSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Detail } from './ui/detail';

export const CompanyDetailsSection = ({
	title,
	factoids,
}: CompanyDetailsSectionProps) => {
	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			{factoids && (
				<ul className={css.list}>
					{factoids.map((detail, index) => (
						<li className={css.detail} key={index}>
							<Detail title={detail.title} description={detail.description} />
						</li>
					))}
				</ul>
			)}
		</Container>
	);
};
