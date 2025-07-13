'use client';

import parser from 'html-react-parser';
import type { Dispatch, SetStateAction } from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useSearch } from '@/view/armbrok-search/hooks/use-search';
import { SEARCH_FORM_NULL_DATA } from '@/view/armbrok-search/models/form.constants';
import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

import css from './index.module.css';

export type SearchFormProps = {
	inputPlaceholder?: string;
	searchButtonText?: string;
	setNewsData: Dispatch<SetStateAction<Array<SearchDataItem> | undefined>>;
};

export const SearchForm = ({
	inputPlaceholder,
	setNewsData,
	searchButtonText,
}: SearchFormProps) => {
	const { query, setQuery, handleSearch } = useSearch(setNewsData);

	return (
		<form className={css.root} onSubmit={handleSearch}>
			<Input
				className={css.input}
				placeholder={inputPlaceholder ?? SEARCH_FORM_NULL_DATA.placeholder}
				type="text"
				leftIcon={SEARCH_FORM_NULL_DATA.icon}
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<Button variant="filled" className={css.button} type="submit">
				{parser(searchButtonText ?? SEARCH_FORM_NULL_DATA.buttonText)}
			</Button>
		</form>
	);
};
