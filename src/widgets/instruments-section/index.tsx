import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { InstrumentsProps } from '@/view/brokerage/types/response';

import css from './index.module.css';
import { Instrument } from './ui/instrument';

export type InstrumentsSectionProps = {
	instrumentsSection?: InstrumentsProps;
};

export const InstrumentsSection = ({
	instrumentsSection,
}: InstrumentsSectionProps) => {
	const { title, instruments = [] } = instrumentsSection ?? {};

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(title ?? '')}</h2>
			<ul className={css.wrap}>
				{instruments.map((item, index) => (
					<li key={index} className={css.cards}>
						<Instrument
							title={item.title ?? ''}
							description={item.description ?? ''}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
