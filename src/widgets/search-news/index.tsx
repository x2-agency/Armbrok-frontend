'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Input } from '@/shared/ui/input';
import { SEARCH_FORM_NULL_DATA } from '@/widgets/app-layout/model/form.constants';

import css from './index.module.css';

const useDebounce = (callback: (query: string) => void, delay: number) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const debouncedFunction = useCallback(
		(query: string) => {
			if (timer.current) clearTimeout(timer.current);
			timer.current = setTimeout(() => callback(query), delay);
		},
		[callback, delay]
	);

	useEffect(() => {
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	return debouncedFunction;
};

type SearchInputProps = {
	onSearchChange: (query: string) => void;
};

export const SearchNews = ({ onSearchChange }: SearchInputProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const debouncedSearch = useDebounce(onSearchChange, 800);

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
