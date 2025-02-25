import cx from 'clsx';
import parser from 'html-react-parser';

import type { ArticleData } from '@/shared/types/article';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { NewsSlider } from './ui/news-slider';

export type NewsSectionProps = {
	dataNews: ArticleData;
	title: string;
	description?: string;
	moreButton?: {
		text?: string;
		link?: string;
	};
	className?: string;
};

export const NewsSectionHome = ({
	dataNews,
	title,
	description,
	moreButton,
	className,
}: NewsSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(title ?? '')}</h2>
			{description && <p className={css.description}>{parser(description)}</p>}
			<NewsSlider className={css.slider} newsSlider={dataNews.data} />
			<Button variant="subtle" className={css.button} href={moreButton?.link}>
				{moreButton?.text}
			</Button>
		</Container>
	);
};
