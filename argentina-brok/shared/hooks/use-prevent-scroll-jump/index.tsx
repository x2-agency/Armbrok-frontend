'use client';

import { useEffect } from 'react';

export const usePreventScrollJump = (isModalOpen: boolean) => {
	useEffect(() => {
		if (isModalOpen) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;

			document.body.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.setProperty(
				'--scrollbar-width',
				`${scrollbarWidth}px`
			);
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.paddingRight = '';
			document.body.style.removeProperty('--scrollbar-width');
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.paddingRight = '';
			document.body.style.removeProperty('--scrollbar-width');
			document.body.style.overflow = '';
		};
	}, [isModalOpen]);
};
