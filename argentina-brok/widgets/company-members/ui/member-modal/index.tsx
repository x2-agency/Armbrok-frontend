'use client';

import cx from 'clsx';
import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type SetStateAction,
} from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';
import type { Employee } from '@/shared/types/global.types';

import css from './index.module.css';
import { ModalContent } from './modal-content';
import { ModalHeader } from './modal-header';

type MemberModalProps = Employee & {
	isModalOpen: boolean;
	toggleModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MemberModal = ({
	avatar,
	fullName,
	qualification,
	career,
	position,
	isModalOpen,
	toggleModalOpen,
}: MemberModalProps) => {
	const ref = useRef<HTMLDialogElement | null>(null);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const modal = ref.current;
		let openTimeout: ReturnType<typeof setTimeout>;
		let closeTimeout: ReturnType<typeof setTimeout>;

		if (modal) {
			if (isModalOpen) {
				modal.showModal();
				document.body.style.overflow = 'hidden';

				openTimeout = setTimeout(() => {
					modal.classList.add(css.open);
					setIsAnimating(false);
				}, 10);
			} else {
				setIsAnimating(true);
				modal.classList.remove(css.open);

				closeTimeout = setTimeout(() => {
					modal.close();
					document.body.style.overflow = '';
					setIsAnimating(false);
				}, 300);
			}
		}

		return () => {
			if (openTimeout) clearTimeout(openTimeout);
			if (closeTimeout) clearTimeout(closeTimeout);
		};
	}, [isModalOpen]);

	useEffect(() => {
		const currentRef = ref.current;

		const handleBackdropClick = (event: MouseEvent) => {
			if (event.target === currentRef) {
				toggleModalOpen(false);
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
	}, [toggleModalOpen]);

	useEffect(() => {
		const modal = ref.current;

		const handleClose = () => {
			toggleModalOpen(false);
			document.body.style.overflow = '';
		};

		if (modal) {
			modal.addEventListener('close', handleClose);
		}

		return () => {
			if (modal) {
				modal.removeEventListener('close', handleClose);
			}
		};
	}, [toggleModalOpen]);

	return (
		<dialog
			className={cx(css.modal, {
				[css.closing]: isAnimating,
			})}
			ref={ref}
		>
			<button className={css.button} onClick={() => toggleModalOpen(false)}>
				<CrossSVG className={css.cross} />
			</button>
			<ModalHeader
				image={avatar?.url}
				fullName={fullName}
				position={position}
			/>
			<ModalContent className={css.content} content={qualification} />
			<ModalContent className={css.content} content={career} />
		</dialog>
	);
};
