import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useScrollObserver } from '@/shared/hooks/use-scroll-observer';
import { INCLUDED_URLS } from '@/widgets/app-layout/model/header.constants';

export const setHeaderColorAttribute = (color: 'dark' | 'white') => {
	document.documentElement.setAttribute('data-header-top-color', color);
};

export const useHeaderColor = () => {
	const formattedUrl = usePathname().split('/')[2];
	const isIncluded = INCLUDED_URLS.includes(formattedUrl);

	useEffect(() => {
		setHeaderColorAttribute(isIncluded ? 'white' : 'dark');
	}, [isIncluded]);

	useScrollObserver(isScrolled => {
		if (!isIncluded) return;
		setHeaderColorAttribute(isScrolled ? 'dark' : 'white');
	});
};
