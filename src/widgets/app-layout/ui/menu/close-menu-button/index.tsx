'use client';

import ArrowSVG from '@/public/assets/icons/arrow.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';

import css from './index.module.css';

export const CloseMenuButton = () => {
	const { toggleMenuOpen } = useLayoutContext();

	const handleClose = () => {
		toggleMenuOpen(false);
	};

	return (
		<button className={css.root} onClick={handleClose}>
			<ArrowSVG className={css.icon} />
		</button>
	);
};
