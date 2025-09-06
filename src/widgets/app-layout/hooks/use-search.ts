'use client';

import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import type { SearchDataItem } from '@/widgets/app-layout/types/armbrok-search.types';

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
	const siteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

	if (!(apiKey && searchEngineId && apiUrl && siteDomain)) {
		throw new Error('One or more required environment variables are missing');
	}

	const encodedURI = encodeURIComponent(query);
	const keyString = `key=${apiKey}`;
	const cxString = `cx=${searchEngineId}`;
	const siteSearch = `siteSearch=${siteDomain}`;

	return `${apiUrl}?q=${encodedURI}&${keyString}&${cxString}&${siteSearch}`;
};
