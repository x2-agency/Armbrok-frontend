'use state';

import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';

import { AccountForm } from './account-form';
import css from './index.module.css';

export const AccountModal = () => {
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
	}, [isAccountModalOpen, toggleAccountModalOpen]);

	return (
		<dialog
			className={cx(css.root, { [css.visible]: isVisible })}
			ref={modalRef}
		>
			<button
				className={css.close}
				onClick={() => toggleAccountModalOpen(false)}
			>
				<CrossSVG className={css.cross} />
			</button>
			<AccountForm />
		</dialog>
	);
};
