'use client';

import cx from 'clsx';
import { type Dispatch, type SetStateAction } from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';
import type { Employee } from '@/shared/types/global.types';
import { Modal } from '@/shared/ui/modal';

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
	return (
		<Modal
			isModalOpen={isModalOpen}
			toggleModalOpen={toggleModalOpen}
			className={cx(css.modal, { [css.open]: isModalOpen })}
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
		</Modal>
	);
};
