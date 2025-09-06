import { useEffect, useRef, useCallback } from 'react';

import type { ModalProps } from '@/shared/ui/modal';

const ANIMATION_DURATION = 300;

export const useModal = ({
	isModalOpen,
	toggleModalOpen,
}: Omit<ModalProps, 'className' | 'children'>) => {
	const ref = useRef<HTMLDialogElement>(null);
	const timeoutRef = useRef<number>();

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	useEffect(() => {
		const modal = ref.current;
		if (!modal) return;

		if (isModalOpen) {
			modal.showModal();
			document.body.style.overflow = 'hidden';
		} else {
			timeoutRef.current = Number(
				setTimeout(() => {
					modal.close();
					document.body.style.overflow = '';
				}, ANIMATION_DURATION)
			);
		}
	}, [isModalOpen]);

	const handleBackdropClick = useCallback(
		(event: MouseEvent) => {
			if (event.target === ref.current) {
				toggleModalOpen(false);
			}
		},
		[toggleModalOpen]
	);

	const handleClose = useCallback(() => {
		toggleModalOpen(false);
		document.body.style.overflow = '';
	}, [toggleModalOpen]);

	useEffect(() => {
		const modal = ref.current;
		if (!modal) return;

		modal.addEventListener('click', handleBackdropClick);
		modal.addEventListener('close', handleClose);

		return () => {
			modal.removeEventListener('click', handleBackdropClick);
			modal.removeEventListener('close', handleClose);
		};
	}, [handleBackdropClick, handleClose]);

	return { ref };
};
