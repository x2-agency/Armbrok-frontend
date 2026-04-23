import {
	HOME_LINK,
	LOGO_HEADER,
} from '@/widgets/app-layout/model/header.constants';
import { Logo } from '@/widgets/app-layout/ui/logo';
import { Search } from '@/widgets/app-layout/ui/search';

import { BurgerButton } from './burger-button';
import css from './index.module.css';
import { LanguageSelection } from './language-selection';
import { LogIn } from './log-in';
import { Navigation } from './navigation';

export const Header = () => {
	return (
		<header className={css.root}>
			<div className={css.jumpedContainer}>
				<div className={css.leftBlock}>
					<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
					<Navigation />
				</div>

				<div className={css.rightBlock}>
					<BurgerButton className={css.mobileBurger} />

					<Search className={css.pcSearch} />
					<LanguageSelection className={css.pcLang} />
					<LogIn className={css.login} />
				</div>
			</div>
		</header>
	);
};
