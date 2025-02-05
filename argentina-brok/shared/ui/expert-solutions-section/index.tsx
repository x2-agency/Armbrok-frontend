/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

type ExpertSolutionSectionProps = {
	className?: string;
	items: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
};

export const ExpertSolutionSection = ({
	className,
	items,
}: ExpertSolutionSectionProps) => {
	return (
		<section className={cx(css.root, className)}>
			{items.map((item, key) => (
				<article key={key}>
					<img src={item.icon} alt="icon" className={css.icon} />
					<h4 className={css.title}>{parser(item.title)}</h4>
					<p className={css.description}>{parser(item.description)}</p>
				</article>
			))}
		</section>
	);
};
