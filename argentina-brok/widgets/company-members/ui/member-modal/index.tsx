'use client';

import cx from 'clsx';
import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

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

	useEffect(() => {
		const currentRef = ref.current;

		if (currentRef && isModalOpen) {
			currentRef.showModal();
			document.body.style.overflow = 'hidden';
		} else {
			currentRef?.close();
			document.body.style.overflow = '';
		}
	}, [ref, isModalOpen]);

	return (
		<dialog className={cx(css.modal, { [css.open]: isModalOpen })} ref={ref}>
			<button className={css.button} onClick={() => toggleModalOpen(false)}>
				<CrossSVG className={css.cross} />
			</button>
			<ModalHeader
				image={avatar?.url}
				fullName={fullName}
				position={position}
			/>
			<ModalContent
				className={css.content}
				title={'Qualifications summary'}
				content={qualification}
			/>
			<ModalContent className={css.content} title={'Career'} content={career} />
		</dialog>
	);
};
