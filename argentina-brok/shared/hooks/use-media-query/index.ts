'use client';
import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
	const getMatches = (query: string): boolean => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches;
		}
		return false;
	};

	const [matches, setMatches] = useState<boolean>(() => {
		// Initialize with an initial value
		// (to avoid hydration and SSR issues)
		return getMatches(query);
	});

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		// Update state on mount
		const handleChange = () => {
			setMatches(matchMedia.matches);
		};

		// Add event listener
		matchMedia.addEventListener('change', handleChange);

		// Очищаем слушатель при размонтировании
		return () => {
			matchMedia.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
}

export default useMediaQuery;
