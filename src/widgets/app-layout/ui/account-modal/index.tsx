'use state';

import cx from 'clsx';

import CrossSVG from '@/public/assets/icons/cross.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Modal } from '@/shared/ui/modal';

import { AccountForm } from './account-form';
import css from './index.module.css';

export const AccountModal = () => {
	const { isAccountModalOpen, toggleAccountModalOpen } = useLayoutContext();

	return (
		<Modal
			isModalOpen={isAccountModalOpen}
			toggleModalOpen={toggleAccountModalOpen}
			className={cx(css.root, { [css.visible]: isAccountModalOpen })}
		>
			<button
				className={css.close}
				onClick={() => toggleAccountModalOpen(false)}
			>
				<CrossSVG className={css.cross} />
			</button>
			<AccountForm isModalOpen={isAccountModalOpen} />
		</Modal>
	);
};
