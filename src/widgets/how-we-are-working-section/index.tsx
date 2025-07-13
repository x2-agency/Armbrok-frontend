import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { HowWeAreWorkingProps } from '@/view/funds/types/response';

import css from './index.module.css';

export type HowWeAreWorkingSectionProps = {
	data?: HowWeAreWorkingProps;
	oneCard?: boolean;
	className?: string;
};

export const HowWeAreWorkingSection = ({
	data,
	oneCard = false,
	className,
}: HowWeAreWorkingSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(data?.title ?? '')}</h2>
			<div
				className={cx(
					css.content,
					{ ['p-32']: oneCard },
					{ [css.oneCard]: oneCard }
				)}
			>
				{oneCard
					? data?.items?.map((card, index) => (
							<article key={index} className={cx(css.description)}>
								{parser(card?.content ?? '')}
							</article>
						))
					: data?.factoids?.map((card, index) => (
							<article key={index} className={cx(css.wrap, 'p-32')}>
								{card?.title && (
									<h5 className={css.header}>{parser(card?.title ?? '')}</h5>
								)}
								<p className={css.description}>
									{parser(card?.description ?? '')}
								</p>
							</article>
						))}
			</div>
		</Container>
	);
};
