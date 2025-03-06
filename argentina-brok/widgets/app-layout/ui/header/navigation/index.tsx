import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';

import { Button } from '@/shared/ui/button';
import { useHeaderLinks } from '@/widgets/app-layout/hooks/use-header-links';

import css from './index.module.css';

export const Navigation = () => {
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const links = useHeaderLinks();

	return (
		<nav className={cx(css.root)}>
			<ul className={cx(css.links, { [css.linksHy]: isHyLocale })}>
				{links.map((item, index) => (
					<li className={css.li} key={index}>
						<Button href={item.href} className={css.link} variant="subtle">
							{parser(item.label)}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};
