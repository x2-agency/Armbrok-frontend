import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useScrollObserver } from '@/shared/hooks/use-scroll-observer';
import { EXCLUDED_URLS } from '@/widgets/app-layout/model/header.constants';

export const setHeaderColorAttribute = (color: 'dark' | 'white') => {
	document.documentElement.setAttribute('data-header-top-color', color);
};

export const useHeaderColor = () => {
	const formattedUrl = usePathname().split('/')[2];
	const isExcluded = EXCLUDED_URLS.includes(formattedUrl);

	useEffect(() => {
		setHeaderColorAttribute('white');
		if (isExcluded) setHeaderColorAttribute('dark');
	}, [isExcluded]);

	useScrollObserver(isScrolled => {
		if (isExcluded) return;
		setHeaderColorAttribute(isScrolled ? 'dark' : 'white');
	});
};
