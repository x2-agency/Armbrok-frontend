import cx from 'clsx';

import { Button } from '@/shared/ui/button';
import type { NavigationProps } from '@/widgets/app-layout/types/nav-types';

import css from './index.module.css';

export const Navigation = ({ navLinks }: NavigationProps) => {
	return (
		<nav className={cx(css.root)}>
			<ul className={css.links}>
				{navLinks.map((link, index) => {
					return (
						<li key={index}>
							<Button href={link.href} className={css.link} variant="subtle">
								{link.text}
							</Button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
