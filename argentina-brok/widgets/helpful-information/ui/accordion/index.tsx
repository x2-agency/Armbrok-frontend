import parser from 'html-react-parser';

import AccordionArrowSVG from '@/public/assets/icons/accordion-arrow.svg';
import { Container } from '@/shared/ui/container';
import type { AccordionProps } from '@/widgets/helpful-information/types';

import css from './index.module.css';

export const Accordion = ({
	title,
	description,
	articles,
	underDescription,
}: AccordionProps) => {
	return (
		<Container padding="min" category="article" className={css.root}>
			<details className={css.details}>
				<summary className={css.summary}>
					<h4 className={css.title}>{parser(title)}</h4>
					<AccordionArrowSVG className={css.icon} />
				</summary>
			</details>
			<div className={css.accordionContent} role="definition">
				<div className={css.accordionContentBody}>
					<p className={css.description}>{parser(description)}</p>
					<ul className={css.list}>
						{articles.map((article, index) => (
							<li className={css.article} key={index}>
								{parser(article)}
							</li>
						))}
					</ul>
					<p className={css.under}>{parser(underDescription)}</p>
				</div>
			</div>
		</Container>
	);
};
