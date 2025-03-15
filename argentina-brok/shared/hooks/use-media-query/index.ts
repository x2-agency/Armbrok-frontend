'use client';
import { useEffect, useState } from 'react';

/**
 * Hook for working with media queries.
 * @param query - Media query (e.g., '(max-width: 767px)').
 * @param defaultMatches - Initial value for `matches` (default is `false`).
 * @returns Returns `true` if the media query matches, and `false` otherwise.
 */
function useMediaQuery(
	query: string,
	defaultMatches: boolean = false
): boolean {
	const [matches, setMatches] = useState<boolean>(defaultMatches);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const matchMedia = window.matchMedia(query);

			const handleChange = () => {
				setMatches(matchMedia.matches);
			};

			handleChange();

			matchMedia.addEventListener('change', handleChange);

			return () => {
				matchMedia.removeEventListener('change', handleChange);
			};
		}
	}, [query]);

	return matches;
}

export default useMediaQuery;
