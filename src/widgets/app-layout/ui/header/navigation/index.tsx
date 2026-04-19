import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { BurgerLinks } from '@/widgets/app-layout/ui/burger-links';

import css from './index.module.css';

export const Navigation = () => {
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const { siteLinks } = useLayoutContext();
	const headerLinks = siteLinks?.header ?? [];
	const normalizedPathname = pathname.replace(/^\/(hy|en|ru)/, '') || '/';

	return (
		<nav className={cx(css.root)}>
			<ul className={cx(css.links, { [css.hyLinks]: isHyLocale })}>
				{headerLinks.map(item => {
					if (item.innerLinks.length > 0) {
						return (
							<li className={cx(css.li)} key={item.id}>
								<BurgerLinks label={item.text} items={item.innerLinks} />
							</li>
						);
					}

					const href = item.slug ? `/${item.slug}` : '#';
					const normalizedHref = `/${item.slug ?? ''}`;
					const isActive =
						normalizedPathname === normalizedHref ||
						normalizedPathname.startsWith(normalizedHref + '/');

					return (
						<li className={cx(css.li)} key={item.id}>
							<Button
								href={href}
								className={cx(
									css.link,
									{ [css.active]: isActive },
									{ [css.hy]: isHyLocale }
								)}
								variant="subtle"
							>
								{parser(item.text)}
							</Button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
