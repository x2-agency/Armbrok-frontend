'use client';

import cx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Modal } from '@/shared/ui/modal';

import css from './index.module.css';
import { MenuBody } from './menu-body';
import { MenuHead } from './menu-head';

export const Menu = () => {
	const { isMenuOpen, toggleMenuOpen } = useLayoutContext();
	const pathname = usePathname();

	useEffect(() => {
		toggleMenuOpen(false);
	}, [pathname, toggleMenuOpen]);

	return (
		<Modal
			isModalOpen={isMenuOpen}
			toggleModalOpen={toggleMenuOpen}
			className={cx(css.root, { [css.open]: isMenuOpen })}
		>
			<MenuHead />
			<MenuBody />
		</Modal>
	);
};
