import { useEffect, useRef, useState } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';

export const useAccountModal = () => {
	const { isAccountModalOpen, toggleAccountModalOpen, setHeaderPadding } =
		useLayoutContext();
	const modalRef = useRef<HTMLDialogElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const currentRef = modalRef.current;

		if (currentRef && isAccountModalOpen) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollbarWidth}px`;
			currentRef.showModal();
			setIsVisible(true);
			setHeaderPadding(scrollbarWidth);
		} else {
			setIsVisible(false);
			setTimeout(() => {
				if (currentRef) {
					currentRef.close();
				}
				document.body.style.overflow = 'auto';
				document.body.style.paddingRight = '';
				setHeaderPadding(0);
			}, 300);
		}
	}, [isAccountModalOpen, setHeaderPadding]);

	useEffect(() => {
		const currentRef = modalRef.current;

		const handleClose = () => {
			document.body.style.overflow = 'auto';
			toggleAccountModalOpen(false);
		};

		if (currentRef) {
			currentRef.addEventListener('close', handleClose);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('close', handleClose);
			}
		};
	}, [toggleAccountModalOpen]);

	useEffect(() => {
		const currentRef = modalRef.current;

		const handleBackdropClick = (event: MouseEvent) => {
			if (event.target === currentRef) {
				toggleAccountModalOpen(false);
			}
		};

		if (currentRef) {
			currentRef.addEventListener('click', handleBackdropClick);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('click', handleBackdropClick);
			}
		};
	}, [toggleAccountModalOpen]);

	return {
		isVisible,
		modalRef,
		isAccountModalOpen,
		toggleAccountModalOpen,
	};
};
