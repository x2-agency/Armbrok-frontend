'use state';

import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { useAccountModal } from '@/widgets/app-layout/hooks/use-account-modal';

import { AccountForm } from './account-form';
import css from './index.module.css';

export const AccountModal = () => {
	const { modalRef, isVisible, toggleAccountModalOpen } = useAccountModal();

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
