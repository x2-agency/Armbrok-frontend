'use client';

import type { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { HOME_NEWS } from '@/entities/news-card/model/news.constants';
import { TitleSlugSection } from '@/shared/ui/title-slug-section';
import { FeedbackForm } from '@/widgets/feedback-form';
import { NewsPage } from '@/widgets/news-page';
import { Tabs } from '@/widgets/tabs';
import { Vacancy } from '@/widgets/vacancies-section/ui/vacancy';

import css from './index.module.css';
import {
	ARMBROK_MEDIA_EMAIL,
	ARMBROK_MEDIA_TITLE,
	ARMBROK_MEDIA_VACANCIES,
} from './model/armbrok-media.constants';

export type Cateroty = {
	title: string;
	slug: string;
};

export const ArmbrokMedia: NextPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const currentTag = searchParams?.get('category') ?? 'all';

	const tags: Array<Cateroty> = useMemo(
		() => [
			{ title: 'Articles', slug: 'articles' },
			{ title: 'Company news', slug: 'company news' },
			{ title: 'Investment ideas', slug: 'investment ideas' },
		],
		[]
	);

	const filteredNews = useMemo(() => {
		if (currentTag === 'all') {
			return HOME_NEWS.news;
		}

		// Фильтрация новостей по категории
		return HOME_NEWS.news.filter(
			news => news.category.toLowerCase() === currentTag.toLowerCase()
		);
	}, [currentTag]);
	// const tags: Array<Cateroty> = useMemo(
	// 	() => initialData?.pages[0]?.categories || [],
	// 	[initialData]
	// );

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			if (value && value !== 'all') {
				params.set(name, value);
			} else {
				params.delete(name);
			}
			return params.toString();
		},
		[searchParams]
	);

	const onChangeTab = useCallback(
		(value: string) => {
			router.push(pathname + '?' + createQueryString('category', value), {
				scroll: false,
			});
		},
		[router, pathname, createQueryString]
	);

	return (
		<section className={css.root}>
			<TitleSlugSection
				title={ARMBROK_MEDIA_TITLE.title}
				description={ARMBROK_MEDIA_TITLE.description}
			/>
			<Tabs
				className={css.tabs}
				onChangeTab={onChangeTab}
				currentTag={currentTag}
				tags={tags}
				isCasesExists
				initialTag="all"
			/>
			<NewsPage newsCard={filteredNews} isHasMore={currentTag === 'all'} />
			<Vacancy
				className={css.vacancy}
				icon={ARMBROK_MEDIA_VACANCIES.icon}
				name={ARMBROK_MEDIA_VACANCIES.title}
				description={ARMBROK_MEDIA_VACANCIES.description}
				link={ARMBROK_MEDIA_VACANCIES.description}
			/>
			<FeedbackForm title={ARMBROK_MEDIA_EMAIL.title} />
		</section>
	);
};
