/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type GuaranteesSectionProps = {
	items: Array<{
		icon: string;
		title: string;
	}>;
	className?: string;
};

export const GuaranteesSection = ({
	items,
	className,
}: GuaranteesSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{items.map((value, index) => (
				<article className={css.article} key={index}>
					<img src={value.icon} alt="icon" className={css.icon} />
					<h3 className={css.title}>{parser(value.title)}</h3>
				</article>
			))}
		</Container>
	);
};
