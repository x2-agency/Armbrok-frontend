import cx from 'clsx';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { useModal } from '@/shared/hooks/use-modal';

import css from './index.module.css';

export type ModalProps = {
	className?: string;
	children?: ReactNode;
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
