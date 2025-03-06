'use client';

import useMediaQuery from '@/shared/hooks/use-media-query';
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
	const isMobile = useMediaQuery('(max-width: 767px)');

	return (
		<header className={css.root}>
			<div className={css.leftBlock}>
				<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
				<Navigation />
			</div>

			<div className={css.rightBlock}>
				{isMobile && <BurgerButton />}
				{!isMobile && (
					<>
						<Search href="/armbrok-search" />
						<LanguageSelection />
						<LogIn />
					</>
				)}
			</div>
		</header>
	);
};
