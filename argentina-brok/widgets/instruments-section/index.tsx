import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Instrument, type InstrumentType } from './ui/instrument';
export type InstrumentsSectionProps = {
	title: string;
	description?: string;
	instruments: Array<InstrumentType>;
};

export const InstrumentsSection = ({
	title,
	instruments,
}: InstrumentsSectionProps) => {
	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(title)}</h2>
			<ul className={css.wrap}>
				{instruments.map(item => (
					<li key={item.id} className={css.cards}>
						<Instrument title={item.title} description={item.description} />
					</li>
				))}
			</ul>
		</Container>
	);
};
