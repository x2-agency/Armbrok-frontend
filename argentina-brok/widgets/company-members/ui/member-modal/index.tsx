'use client';

import cx from 'clsx';
import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';
import type { MemberProps } from '@/widgets/company-members/company-members.types';

import css from './index.module.css';
import { ModalContent } from './modal-content';
import { ModalHeader } from './modal-header';

type MemberModalProps = MemberProps & {
	isModalOpen: boolean;
	toggleModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MemberModal = ({
	name,
	image,
	position,
	isModalOpen,
	content,
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
			<ModalHeader image={image} fullName={name} position={position} />
			{content &&
				content.map((value, index) => (
					<ModalContent
						className={css.content}
						key={index}
						title={value.title}
						content={value.content}
					/>
				))}
		</dialog>
	);
};
