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
	return (
		<Container category="section" className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(title)}</h2>
			<ul className={css.accordions}>
				{items.map((item, index) => (
					<li key={index}>
						<Accordion
							title={item.title}
							description={item.description}
							articles={item.articles}
							underDescription={item.underDescription}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
