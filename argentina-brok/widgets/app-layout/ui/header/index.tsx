import css from './index.module.css';
import {
	HOME_LINK,
	LOGO_HEADER,
	NAVIGATION_LINKS,
} from './model/header.constants';
import { Logo } from './ui/logo';
import { Navigation } from './ui/navigation';

export const Header = () => {
	return (
		<header className={css.root}>
			<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
			<Navigation navLinks={NAVIGATION_LINKS} />
		</header>
	);
};
