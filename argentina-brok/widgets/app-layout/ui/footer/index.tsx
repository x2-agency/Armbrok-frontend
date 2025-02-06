import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Column } from './ui/column';
import { Disclaimer } from './ui/disclaimer';
import { Social } from './ui/social-links';

export const Footer = () => {
	return (
		<footer className={css.root}>
			<Container>
				<Column />
				<Social />
				<Disclaimer />
			</Container>
		</footer>
	);
};
