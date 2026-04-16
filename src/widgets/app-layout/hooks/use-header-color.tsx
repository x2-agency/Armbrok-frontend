import { useEffect } from 'react';

export const setHeaderColorAttribute = (color: 'dark' | 'white') => {
	document.documentElement.setAttribute('data-header-top-color', color);
};

export const useHeaderColor = () => {
	useEffect(() => {
		setHeaderColorAttribute('dark');
	}, []);
};
