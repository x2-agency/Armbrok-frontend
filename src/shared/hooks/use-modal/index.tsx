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

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				toggleModalOpen(false);
			}
		},
		[toggleModalOpen]
	);

	useEffect(() => {
		const modal = ref.current;
		if (!modal) return;

		if (isModalOpen) {
			modal.show();
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleKeyDown);
		} else {
			timeoutRef.current = Number(
				setTimeout(() => {
					modal.close();
					document.body.style.overflow = '';
				}, ANIMATION_DURATION)
			);
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isModalOpen, handleKeyDown]);

	const handleBackdropClick = useCallback(() => {
		toggleModalOpen(false);
	}, [toggleModalOpen]);

	return { ref, handleBackdropClick, handleKeyDown };
};
