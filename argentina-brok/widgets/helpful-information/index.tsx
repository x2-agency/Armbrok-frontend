import cx from 'clsx';
import parser from 'html-react-parser';

import type { AccordionSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Accordion } from './ui/accordion';

export type HelpfulInformationProps = {
	accordionSection?: AccordionSectionProps;
	className?: string;
};

export const HelpfulInformation = ({
	className,
	accordionSection,
}: HelpfulInformationProps) => {
	const { accordions, title } = accordionSection ?? {};
	if (!accordions) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.accordions}>
				{accordions.map((item, index) => (
					<li key={index}>
						<Accordion summary={item.summary} description={item.description} />
					</li>
				))}
			</ul>
		</Container>
	);
};
