import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Disclaimer } from './ui/disclaimer';
import { NavigationColumn } from './ui/navigation-column';
import { Social } from './ui/social-links';

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
