import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import type { NewsProps } from '@/view/home/types/response';

import css from './index.module.css';
import NewsSlider from './ui/news-slider';

export type NewsSectionProps = {
	data?: NewsProps;
	className?: string;
};

export const NewsSectionHome = ({ data, className }: NewsSectionProps) => {
	const { title, description, moreButton, news } = data ?? {};
	return (
		<section className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(title ?? '')}</h2>
			{description && <p className={css.description}>{parser(description)}</p>}
			<NewsSlider className={css.slider} newsSlider={news ?? []} />
			{moreButton?.text && (
				<Button
					variant="next"
					iconRotate={180}
					className={css.button}
					href={moreButton?.link}
				>
					{moreButton?.text}
				</Button>
			)}
		</section>
	);
};
