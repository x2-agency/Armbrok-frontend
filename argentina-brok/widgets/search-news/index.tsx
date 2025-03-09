'use client';

import { useCallback, useState } from 'react';

import { Input } from '@/shared/ui/input';
import { SEARCH_FORM_NULL_DATA } from '@/view/armbrok-search/models/form.constants';

import css from './index.module.css';

const debounce = (func: (query: string) => void, delay: number) => {
	let timer: NodeJS.Timeout;
	return (query: string) => {
		clearTimeout(timer);
		timer = setTimeout(() => func(query), delay);
	};
};

type SearchInputProps = {
	onSearchChange: (query: string) => void;
};

export const SearchNews = ({ onSearchChange }: SearchInputProps) => {
	const [searchQuery, setSearchQuery] = useState('');

	const debouncedSearch = useCallback(
		debounce((query: string) => {
			onSearchChange(query);
		}, 300),
		[onSearchChange]
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);
		debouncedSearch(value);
	};

	return (
		<Input
			className={css.searchInput}
			placeholder={SEARCH_FORM_NULL_DATA.placeholder}
			leftIcon={SEARCH_FORM_NULL_DATA.icon}
			type="text"
			value={searchQuery}
			onChange={handleSearchChange}
		/>
	);
};
