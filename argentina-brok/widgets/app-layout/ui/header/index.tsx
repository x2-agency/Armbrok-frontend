'use client';

import BurgerButton from '@/public/assets/icons/header/burger_button.svg';

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
	return (
		<header className={css.root}>
			<div className={css.leftBlock}>
				<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
				<Navigation navLinks={NAVIGATION_LINKS} />
			</div>

			<div className={css.rightBlock}>
				<BurgerButton className={css.burger} />

				<Search href="#" />
				<LanguageSelection />
				<LogIn />
			</div>
		</header>
	);
};
