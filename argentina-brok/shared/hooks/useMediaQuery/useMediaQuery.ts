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
		// Инициализация с начальным значением
		// (для избежания гидратации и SSR проблем)
		return getMatches(query);
	});

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		// Обновляем состояние при монтировании
		const handleChange = () => {
			setMatches(matchMedia.matches);
		};

		// Добавляем слушатель
		matchMedia.addEventListener('change', handleChange);

		// Очищаем слушатель при размонтировании
		return () => {
			matchMedia.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
}

export default useMediaQuery;
