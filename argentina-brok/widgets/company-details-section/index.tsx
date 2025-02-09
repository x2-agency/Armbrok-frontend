import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import type { CompanyDetailsSectionProps } from './company-details.types';
import css from './index.module.css';
import { Detail } from './ui/detail';
export const CompanyDetailsSection = ({
	title,
	details,
}: CompanyDetailsSectionProps) => {
	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.list}>
				{details.map((detail, index) => (
					<li className={css.detail} key={index}>
						<Detail {...detail} />
					</li>
				))}
			</ul>
		</Container>
	);
};
