'use client';

import BurgerButtonSVG from '@/public/assets/icons/header/burger_button.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';

import css from './index.module.css';

export const BurgerButton = () => {
	const { toggleMenuOpen, isMenuOpen } = useLayoutContext();

	return (
		<button className={css.root} onClick={() => toggleMenuOpen(!isMenuOpen)}>
			<BurgerButtonSVG className={css.burger} />
		</button>
	);
};
