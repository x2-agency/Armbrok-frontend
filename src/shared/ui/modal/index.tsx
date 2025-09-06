import cx from 'clsx';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import { useModal } from '@/shared/hooks/use-modal';
import type { PropsWithClassname } from '@/shared/types/global.types';

import css from './index.module.css';

export type ModalProps = PropsWithClassname &
	PropsWithChildren & {
		isModalOpen: boolean;
		toggleModalOpen: Dispatch<SetStateAction<boolean>>;
	};

export const Modal = ({
	className,
	children,
	isModalOpen,
	toggleModalOpen,
}: ModalProps) => {
	const { ref } = useModal({ isModalOpen, toggleModalOpen });

	return (
		<dialog
			ref={ref}
			className={cx(css.root, className, { [css.open]: isModalOpen })}
		>
			{children}
		</dialog>
	);
};
