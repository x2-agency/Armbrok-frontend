import parser from 'html-react-parser';

import type { CompanyDetailProps } from '@/widgets/company-details-section/company-details.types';

import css from './index.module.css';

export const Detail = ({ title, description }: CompanyDetailProps) => {
	return (
		<>
			<p className={css.text}>{parser(title)}</p>
			<span className={css.dotted} />
			{description && <p className={css.description}>{parser(description)}</p>}
		</>
	);
};
