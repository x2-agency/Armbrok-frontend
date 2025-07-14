'use client';
import cx from 'clsx';

import BurgerButtonSVG from '@/public/assets/icons/header/burger_button.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';

import css from './index.module.css';

export const BurgerButton = ({ className }: { className?: string }) => {
	const { toggleMenuOpen, isMenuOpen } = useLayoutContext();

	return (
		<button
			className={cx(css.root, className)}
			onClick={() => toggleMenuOpen(!isMenuOpen)}
		>
			<BurgerButtonSVG className={css.burger} />
		</button>
	);
};
