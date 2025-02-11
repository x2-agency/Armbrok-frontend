'use client';

import cx from 'clsx';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { useToggleMenu } from '@/widgets/app-layout/hooks/use-toggle-menu';
import { MENU_LINKS } from '@/widgets/app-layout/models/menu.constants';

import css from './index.module.css';
import { MenuBody } from './menu-body';
import { MenuHead } from './menu-head';

export const Menu = () => {
	const { menuRef } = useLayoutContext();
	const { isVisible } = useToggleMenu();

	return (
		<dialog className={cx(css.root, { [css.open]: isVisible })} ref={menuRef}>
			<MenuHead />
			<MenuBody links={MENU_LINKS} />
		</dialog>
	);
};
