'use client';

import cx from 'clsx';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Modal } from '@/shared/ui/modal';
import { useHeaderLinks } from '@/widgets/app-layout/hooks/use-header-links';

import css from './index.module.css';
import { MenuBody } from './menu-body';
import { MenuHead } from './menu-head';

export const Menu = () => {
	const { isMenuOpen, toggleMenuOpen } = useLayoutContext();
	const links = useHeaderLinks();

	return (
		<Modal
			isModalOpen={isMenuOpen}
			toggleModalOpen={toggleMenuOpen}
			className={cx(css.root, { [css.open]: isMenuOpen })}
		>
			<MenuHead />
			<MenuBody links={links} />
		</Modal>
	);
};
