'use client';

import cx from 'clsx';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { useHeaderLinks } from '@/widgets/app-layout/hooks/use-header-links';
import { useToggleMenu } from '@/widgets/app-layout/hooks/use-toggle-menu';

import css from './index.module.css';
import { MenuBody } from './menu-body';
import { MenuHead } from './menu-head';

export const Menu = () => {
	const { menuRef } = useLayoutContext();
	const { isVisible, closeMenu } = useToggleMenu();
	const links = useHeaderLinks();

	return (
		<dialog className={cx(css.root, { [css.open]: isVisible })} ref={menuRef}>
			<MenuHead />
			<MenuBody links={links} closeMenu={closeMenu} />
		</dialog>
	);
};
