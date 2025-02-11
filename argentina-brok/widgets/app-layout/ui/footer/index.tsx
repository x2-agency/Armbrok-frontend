import { Container } from '@/shared/ui/container';

import { Disclaimer } from './disclaimer';
import css from './index.module.css';
import { NavigationColumn } from './navigation-column';
import { Social } from './social-links';

export const Footer = () => {
	return (
		<footer className={css.root}>
			<Container>
				<NavigationColumn />
				<Social />
				<Disclaimer />
			</Container>
		</footer>
	);
};
