'use client';

import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

export const useSearch = (
	setNewsData: Dispatch<SetStateAction<Array<SearchDataItem> | undefined>>
) => {
	const [query, setQuery] = useState<string>('');

	const handleSearch = useCallback(
		async (event: FormEvent) => {
			event.preventDefault();

			if (!query.trim()) {
				return;
			}

			await fetchSearchQuery(query, setNewsData);
		},
		[query, setNewsData]
	);

	return {
		query,
		setQuery,
		handleSearch,
	};
};

const fetchSearchQuery = async (
	query: string,
	setNewsData: Dispatch<SetStateAction<Array<SearchDataItem> | undefined>>
) => {
	const url = buildSearchUrl(query);

	fetch(url).then(async response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		setNewsData(data.items);
	});
};

const buildSearchUrl = (query: string) => {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY;
	const searchEngineId = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_ID;
	const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_URL;

	if (!(apiKey && searchEngineId && apiUrl)) {
		throw new Error('API Key or Search Engine ID is missing.');
	}

	const encodedURI = encodeURIComponent(query);
	const keyString = `key=${apiKey}`;
	const cxString = `cx=${searchEngineId}`;
	const siteSearch = `siteSearch=${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN ?? ''}`;

	return `${apiUrl}?q=${encodedURI}&${keyString}&${cxString}&${siteSearch}`;
};
