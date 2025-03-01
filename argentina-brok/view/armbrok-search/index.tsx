'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { TitleSection } from '@/shared/ui/title-section';

import css from './index.module.css';
import type {
	ArmbrokSearchPageResponse,
	SearchDataItem,
} from './types/armbrok-search.types';
import { SearchForm } from './ui/search-form';
import { SearchedNews } from './ui/searched-news';

export const ArmbrokSearch: NextPage<ArmbrokSearchPageResponse> = ({
	title,
	description,
	inputPlaceholder,
	searchButtonText,
}) => {
	const [newsData, setNewsData] = useState<Array<SearchDataItem> | undefined>(
		undefined
	);

	useEffect(() => {
		console.log(newsData);
	}, [newsData]);

	return (
		<div className={css.root}>
			<TitleSection
				className={css.titleSection}
				title={title ?? ''}
				description={description}
			/>
			<SearchForm
				setNewsData={setNewsData}
				inputPlaceholder={inputPlaceholder}
				searchButtonText={searchButtonText}
			/>
			<SearchedNews news={newsData} />
		</div>
	);
};
