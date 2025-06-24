import parser from 'html-react-parser';

import type { FundFactsActualProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Facts } from './ui/facts';

export const FundFacts = ({
	title,
	financialIndicators,
	fundDetails,
	keyEntities,
	highlights,
	investmentTerms,
	keyFigures,
}: FundFactsActualProps) => {
	return (
		<Container className={css.root}>
			{title && <h3 className={css.title}>{parser(title)}</h3>}
			<div className={css.net}>
				<div className={css.rightPart}>
					{highlights && <Facts {...highlights} />}
					{fundDetails && <Facts {...fundDetails} />}
					{investmentTerms && <Facts {...investmentTerms} />}
				</div>
				<div className={css.leftPart}>
					{keyEntities && <Facts {...keyEntities} />}
					{keyFigures && <Facts {...keyFigures} />}
					{financialIndicators && <Facts {...financialIndicators} />}
				</div>
			</div>
		</Container>
	);
};
