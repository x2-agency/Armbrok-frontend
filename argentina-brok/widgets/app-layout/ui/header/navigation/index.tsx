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

	const normalizedPathname = pathname.replace(/^\/(hy|en|ru)/, '') || '/';

	return (
		<nav className={cx(css.root)}>
			<ul className={cx(css.links, { [css.linksHy]: isHyLocale })}>
				{links.map(item => {
					const normalizedHref = item.href.replace(/^\/(hy|en|ru)/, '') || '/';
					const isActive =
						normalizedPathname === normalizedHref ||
						normalizedPathname.startsWith(normalizedHref + '/');

					return (
						<li
							className={cx(css.li, { [css.active]: isActive })}
							key={item.href}
						>
							<Button
								href={item.href}
								className={cx(css.link)}
								variant="subtle"
							>
								{parser(item.label)}
							</Button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
