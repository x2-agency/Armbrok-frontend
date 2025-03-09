'use client';

import parser from 'html-react-parser';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
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
	const [query, setQuery] = useState<string>('');

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault();

		const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY ?? '';
		const searchEngineId =
			process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_ID ?? '';

		if (!apiKey || !searchEngineId) {
			console.error('API Key or Search Engine ID is missing.');
			return;
		}

		const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${searchEngineId}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setNewsData(data.items);
		} catch (error) {
			console.error('Error fetching search results:', error);
		}
	};

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
