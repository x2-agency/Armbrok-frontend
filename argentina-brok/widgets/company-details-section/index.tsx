import parser from 'html-react-parser';

import type { CompanyDetailsSection as CompanyDetailsSectionProps } from '@/shared/types/global.types';

import css from './index.module.css';
import { Detail } from './ui/detail';

export const CompanyDetailsSection = ({
	title,
	items,
}: CompanyDetailsSectionProps) => {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<section className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.list}>
				{items.map((detail, index) => (
					<li className={css.detail} key={index}>
						<Detail
							title={detail.title ?? ''}
							description={detail.description}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};
