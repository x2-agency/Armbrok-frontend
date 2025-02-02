import cx from 'clsx';

import Link from 'next/link';
import { NavigationProps } from '../../types/nav-types';
import css from './index.module.css';

export const Navigation = ({ navLinks }: NavigationProps) => {
	return (
		<nav className={cx(css.root)}>
			<ul className={css.links}>
				{navLinks.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.href} className={css.link}>
								{link.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
