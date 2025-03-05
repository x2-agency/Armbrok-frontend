import cx from 'clsx';

import { Button } from '@/shared/ui/button';
import { useHeaderLinks } from '@/widgets/app-layout/hooks/use-header-links';

import css from './index.module.css';

export const Navigation = () => {
	const links = useHeaderLinks();

	return (
		<nav className={cx(css.root)}>
			<ul className={css.links}>
				{links.map((item, index) => (
					<li key={index}>
						<Button href={item.href} className={css.link} variant="subtle">
							{item.label}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};
