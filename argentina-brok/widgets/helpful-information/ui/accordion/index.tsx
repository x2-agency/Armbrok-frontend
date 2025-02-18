import cx from 'clsx';
import parser from 'html-react-parser';

import AccordionArrowSVG from '@/public/assets/icons/accordion-arrow.svg';
import type { AccordionProps } from '@/widgets/helpful-information/types';

import css from './index.module.css';

export const Accordion = ({ summary, description }: AccordionProps) => {
	return (
		<article className={cx(css.root, 'p-30')}>
			<details className={css.details}>
				<summary className={css.summary}>
					<h4 className={css.title}>{parser(summary)}</h4>
					<AccordionArrowSVG className={css.icon} />
				</summary>
			</details>
			<div className={css.accordionContent} role="definition">
				<div className={css.accordionContentBody}>
					<div className={css.accordionInnerContent}>{parser(description)}</div>
				</div>
			</div>
		</article>
	);
};
