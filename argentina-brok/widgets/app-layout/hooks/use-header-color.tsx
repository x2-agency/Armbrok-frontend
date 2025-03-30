import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useScrollObserver } from '@/shared/hooks/use-scroll-observer';
import { EXCLUDED_URLS } from '@/widgets/app-layout/model/header.constants';

export const useHeaderColor = () => {
	const formattedUrl = usePathname().split('/')[2];
	const isExcluded = EXCLUDED_URLS.includes(formattedUrl);

	useEffect(() => {
		const htmlElement = document.documentElement;

		htmlElement.setAttribute('data-header-top-color', 'white');

		if (isExcluded) {
			htmlElement.setAttribute('data-header-top-color', 'dark');
		}
	}, [isExcluded]);

	useScrollObserver(isScrolled => {
		const htmlElement = document.documentElement;

		if (isExcluded) {
			return;
		}

		if (isScrolled) {
			htmlElement.setAttribute('data-header-top-color', 'dark');
		} else {
			htmlElement.setAttribute('data-header-top-color', 'white');
		}
	});
};
