import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { HelpfulInformationProps } from './types';
import { Accordion } from './ui/accordion';

export const HelpfulInformation = ({
	className,
	title,
	items,
}: HelpfulInformationProps) => {
	if (!items) {
		return null;
	}

	return (
		<Container category="section" className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.accordions}>
				{items.map((item, index) => (
					<li key={index}>
						<Accordion summary={item.summary} description={item.description} />
					</li>
				))}
			</ul>
		</Container>
	);
};
