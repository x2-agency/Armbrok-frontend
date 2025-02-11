import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { MenuBodyProps } from '@/widgets/app-layout/types/menu.types';

import css from './index.module.css';

export const MenuBody = ({ links }: MenuBodyProps) => {
	return (
		<Container className={css.root}>
			<nav className={css.links}>
				{links.map((link, index) => (
					<Button
						variant="subtle"
						href={link.href}
						key={index}
						className={css.button}
					>
						{link.label}
					</Button>
				))}
			</nav>
			<ul className={css.buttons}>
				<Button href="#" variant="subtle" className={css.login}>
					Log in
				</Button>
				<Button
					href="#"
					variant="filled"
					category="big"
					className={css.account}
				>
					Open account
				</Button>
			</ul>
		</Container>
	);
};
