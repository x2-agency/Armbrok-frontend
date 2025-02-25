import type { NextPage } from 'next';

import css from './index.module.css';
import type { ArmbrokSearchPageResponse } from './types/armbrok-search.types';
import { SearchForm } from './ui/search-form';

import { TitleSection } from '@/shared/ui/title-section';

export const ArmbrokSearch: NextPage<ArmbrokSearchPageResponse> = ({
	title,
	description,
	inputPlaceholder,
	searchButtonText,
}) => {
	return (
		<div className={css.root}>
			<TitleSection
				className={css.titleSection}
				title={title ?? ''}
				description={description}
			/>
			<SearchForm
				inputPlaceholder={inputPlaceholder}
				searchButtonText={searchButtonText}
			/>
		</div>
	);
};
