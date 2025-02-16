import { Container } from '@/shared/ui/container';

import { Disclaimer } from './disclaimer';
import css from './index.module.css';
import { NavigationColumn } from './navigation-column';
import { SocialLinks } from './social-links';

export const Footer = () => {
	return (
		<footer className={css.root}>
			<Container>
				<NavigationColumn />
				<SocialLinks />
				<Disclaimer />
			</Container>
		</footer>
	);
};
