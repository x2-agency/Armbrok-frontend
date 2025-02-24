import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { MobileAppSectionProps } from '@/view/brokerage/types/response';

import css from './index.module.css';
import { TopCards } from './ui/top-cards';

export type AppMobileSectionProps = {
	data: MobileAppSectionProps;
};

export const AppMobileSection = ({ data }: AppMobileSectionProps) => {
	return (
		<Container className={css.root}>
			<h2 className={css.title}>{data?.title}</h2>
			<p className={css.description}>{parser(data?.description ?? '')}</p>
			<TopCards cards={data.cards} />
		</Container>
	);
};
