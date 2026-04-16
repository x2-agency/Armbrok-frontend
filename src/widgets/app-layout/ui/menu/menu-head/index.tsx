import cx from 'clsx';

import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';
import { MENU_HEADER } from '@/widgets/app-layout/model/menu.constants';
import { LanguageSelection } from '@/widgets/app-layout/ui/header/language-selection';
import { Logo } from '@/widgets/app-layout/ui/logo';
import { CloseMenuButton } from '@/widgets/app-layout/ui/menu/close-menu-button';
import { Search } from '@/widgets/app-layout/ui/search';

import css from './index.module.css';

export const MenuHead = () => {
	const { ref } = headerScrollObserver.useObserve('dark');

	return (
		<header className={css.root} ref={ref}>
			<div className={css.leftPart}>
				<Logo
					href="/"
					logo={MENU_HEADER}
					isDark
					className="close-menu-button"
				/>
			</div>
			<div className={css.rightPart}>
				<Search
					href="/armbrok-search"
					className={cx(css.search, 'close-menu-button')}
					isDark
				/>
				<LanguageSelection theme="dark" className={css.lang} />
				<CloseMenuButton />
			</div>
		</header>
	);
};
