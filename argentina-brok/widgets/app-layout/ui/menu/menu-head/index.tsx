import { MENU_HEADER } from '@/widgets/app-layout/models/menu.constants';
import { LanguageSelection } from '@/widgets/app-layout/ui/header/language-selection';
import { Logo } from '@/widgets/app-layout/ui/logo';
import { CloseMenuButton } from '@/widgets/app-layout/ui/menu/close-menu-button';
import { Search } from '@/widgets/app-layout/ui/search';

import css from './index.module.css';

export const MenuHead = () => {
	return (
		<header className={css.root}>
			<div className={css.leftPart}>
				<CloseMenuButton />
				<Logo href="/" logo={MENU_HEADER} />
			</div>
			<div className={css.rightPart}>
				<Search href="/" className={css.search} />
				<LanguageSelection theme="dark" className={css.lang} />
			</div>
		</header>
	);
};
