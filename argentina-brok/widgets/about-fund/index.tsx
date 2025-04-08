import parser from 'html-react-parser';

import type { AboutFundProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { AboutFundItem } from './ui/about-fund-item';

export const AboutFund = ({
	title,
	leftInfoBlock,
	rightInfoBlock,
}: AboutFundProps) => {
	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<div className={css.content}>
				{leftInfoBlock && <AboutFundItem {...leftInfoBlock} />}
				{rightInfoBlock && <AboutFundItem {...rightInfoBlock} />}
			</div>
		</Container>
	);
};
