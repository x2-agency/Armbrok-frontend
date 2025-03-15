'use client';

import { useEffect, useState } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';

export const useToggleMenu = () => {
	const { isMenuOpen, menuRef, toggleMenuOpen } = useLayoutContext();
	const [isVisible, setIsVisible] = useState(false);

	const closeMenu = () => {
		toggleMenuOpen(false);
	};

	useEffect(() => {
		const currentRef = menuRef.current;
		if (!currentRef) return;

		if (isMenuOpen) {
			currentRef.showModal();
			currentRef.style.opacity = '0';
			document.body.style.overflow = 'hidden';

			requestAnimationFrame(() => {
				currentRef.style.opacity = '1';
				setIsVisible(true);
			});
		} else {
			document.body.style.overflow = '';
			setIsVisible(false);
			setTimeout(() => currentRef.close(), 300);
		}
	}, [isMenuOpen, menuRef]);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.tagName === 'A') {
				closeMenu();
			}
		};

		const currentRef = menuRef.current;
		if (currentRef) {
			currentRef.addEventListener('click', handleClick);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('click', handleClick);
			}
		};
	}, [menuRef, closeMenu]);

	return {
		isVisible,
		closeMenu,
	};
};
