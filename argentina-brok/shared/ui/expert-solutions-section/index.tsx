/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

type ExpertSolutionSectionProps = {
	className?: string;
	title?: string;
	items: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
};

export const ExpertSolutionSection = ({
	className,
	title,
	items,
}: ExpertSolutionSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.sectionTitle}>{parser(title)}</h2>}
			<div className={css.cards}>
				{items.map((item, key) => (
					<article key={key} className={css.card}>
						<img src={item.icon} alt="icon" className={css.icon} />
						<h4 className={css.title}>{parser(item.title)}</h4>
						<p className={css.description}>{parser(item.description)}</p>
					</article>
				))}
			</div>
		</Container>
	);
};
