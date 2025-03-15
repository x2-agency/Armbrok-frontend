import { useEffect, useRef, useState } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';

export const useAccountModal = () => {
	const { isAccountModalOpen, toggleAccountModalOpen } = useLayoutContext();
	const modalRef = useRef<HTMLDialogElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const currentRef = modalRef.current;

		if (currentRef && isAccountModalOpen) {
			currentRef.showModal();
			document.body.style.overflow = 'hidden';
			setIsVisible(true);
		} else {
			setIsVisible(false);
			setTimeout(() => {
				if (currentRef) {
					currentRef.close();
				}
				document.body.style.overflow = 'auto';
			}, 300);
		}
	}, [isAccountModalOpen]);

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
