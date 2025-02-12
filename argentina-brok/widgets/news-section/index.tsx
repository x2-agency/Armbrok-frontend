import parser from 'html-react-parser';

import type { NewsSection } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { NewsSlider } from './ui/news-slider';

export type NewsSectionProps = {
	dataNews: NewsSection;
};

export const NewsSectionHome = ({ dataNews }: NewsSectionProps) => {
	const { title, moreButton, news } = dataNews;

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(title)}</h2>
			<NewsSlider className={css.slider} newsSlider={news} />
			<Button variant="subtle" className={css.button} href={moreButton.link}>
				{moreButton.text}
			</Button>
		</Container>
	);
};
