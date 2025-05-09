import parser from 'html-react-parser';

import type { FundFactsProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Facts } from './ui/facts';

export const FundFacts = ({
	title,
	financialIndicators,
	fundDescription,
	fundOverview,
	portfolioMetrics,
}: FundFactsProps) => {
	if (
		!(
			financialIndicators &&
			fundDescription &&
			fundOverview &&
			portfolioMetrics
		)
	) {
		return null;
	}

	return (
		<Container className={css.root}>
			{title && <h3 className={css.title}>{parser(title)}</h3>}
			<div className={css.content}>
				{fundOverview && <Facts content={fundOverview} />}
				{portfolioMetrics && <Facts content={portfolioMetrics} />}
				{fundDescription && <Facts content={fundDescription} />}
				{financialIndicators && <Facts content={financialIndicators} />}
			</div>
		</Container>
	);
};
