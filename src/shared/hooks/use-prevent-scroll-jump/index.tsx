'use client';

import { useEffect } from 'react';

export const usePreventScrollJump = (isModalOpen: boolean) => {
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.paddingRight = '';
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.paddingRight = '';
			document.body.style.removeProperty('--scrollbar-width');
			document.body.style.overflow = '';
		};
	}, [isModalOpen]);
};
