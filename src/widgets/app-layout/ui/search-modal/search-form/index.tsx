'use client';

import parser from 'html-react-parser';
import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useSearch } from '@/widgets/app-layout/hooks/use-search';
import { SEARCH_FORM_NULL_DATA } from '@/widgets/app-layout/model/search-form.constants';
import type { SearchDataItem } from '@/widgets/app-layout/types/armbrok-search.types';

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
	const { isSearchModalOpen, toggleSearchModalOpen } = useLayoutContext();
	const { query, setQuery, handleSearch } = useSearch(setNewsData);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!isSearchModalOpen) return;
		const timer = window.setTimeout(() => {
			inputRef.current?.focus();
		}, 50);
		return () => window.clearTimeout(timer);
	}, [isSearchModalOpen]);

	return (
		<form className={css.root} onSubmit={handleSearch}>
			<Input
				ref={inputRef}
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
			<button
				className={css.close}
				onClick={() => toggleSearchModalOpen(false)}
			>
				<CrossSVG className={css.cross} />
			</button>
		</form>
	);
};
