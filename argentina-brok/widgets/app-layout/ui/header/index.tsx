'use client';

import useMediaQuery from '@/shared/hooks/useMediaQuery/useMediaQuery';
import BurgerButton from '../../../../public/assets/icon/header/burger_button.svg';
import css from './index.module.css';
import {
	HOME_LINK,
	LOGO_HEADER,
	NAVIGATION_LINKS,
} from './model/header.constants';
import { LanguageSelection } from './ui/language-selection';
import { LogIn } from './ui/log-in';
import { Logo } from './ui/logo';
import { Navigation } from './ui/navigation';
import { Search } from './ui/search';
export const Header = () => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	const isDesktop = useMediaQuery('(min-width: 1149px)');
	return (
		<header className={css.root}>
			<div className={css.leftBlock}>
				<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
				{!isMobile && isDesktop && <Navigation navLinks={NAVIGATION_LINKS} />}
			</div>

			<div className={css.rightBlock}>
				{isMobile ? (
					<BurgerButton className={css.berger} />
				) : (
					<>
						<Search href="#" />
						<LanguageSelection />
						<LogIn />
					</>
				)}
			</div>
		</header>
	);
};
