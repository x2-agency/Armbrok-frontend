'use client';

import { useEffect } from 'react';

export const useScrollObserver = (callback: (isScrolled: boolean) => void) => {
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			callback(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [callback]);
};
