'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import type { SiteLinkInner } from '@/shared/api/get-site-links';
import { PARENT_FUNDS } from '@/shared/constants/funds';
import { useDropdown } from '@/shared/hooks/use-drop-down';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type ServicesLinksProps = {
	className?: string;
	rootKey?: 'servicesLinks' | 'aboutUsLinks' | 'fundsLinks';
	withLayoutContext?: boolean;
	label?: string;
	items?: SiteLinkInner[];
};

export const BurgerLinks = ({
	className,
	rootKey,
	withLayoutContext,
	label,
	items,
}: ServicesLinksProps) => {
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const object = rootKey ? LOCALE_KEYS[rootKey] : undefined;
	const t = useTranslations(object?.root ?? 'services');
	const path = usePathname();
	const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
	const activeSegment = `/${path.split('/')[2] ?? ''}`;

	return (
		<div className={cx(css.root, className)} ref={dropdownRef}>
			<Button
				variant="subtle"
				onClick={toggleDropdown}
				className={cx(css.mainButton, { [css.hy]: isHyLocale })}
			>
				{items && label ? label : t('text')}
				<TriangleSVG className={cx(css.svg, { [css.open]: isOpen })} />
			</Button>
			<ul className={cx(css.list, { [css.open]: isOpen })}>
				{items ? (
					<>
						{items.map(item => {
							const href = item.slug ? `/${item.slug}` : '#';
							return (
								<li key={item.id} className={css.listElement}>
									<Button
										variant="subtle"
										className={cx(css.link, {
											[css.activeLink]: item.slug
												? activeSegment === `/${item.slug}`
												: false,
										})}
										href={href}
									>
										{parser(item.text ?? '')}
									</Button>
								</li>
							);
						})}
					</>
				) : withLayoutContext ? (
					<>
						{PARENT_FUNDS.map((item, index) => (
							<li key={index} className={css.listElement}>
								<Button
									variant="subtle"
									className={cx(css.link, {
										[css.activeLink]: path.includes(item.link),
									})}
									href={item.link}
								>
									{parser(item.title)}
								</Button>
							</li>
						))}
					</>
				) : (
					<>
						{object?.items.map((item, index) => (
							<li key={index} className={css.listElement}>
								<Button
									variant="subtle"
									className={cx(css.link, {
										[css.activeLink]:
											t(`links.${item}.link`) === activeSegment,
									})}
									href={t(`links.${item}.link`)}
								>
									{parser(t(`links.${item}.text`))}
								</Button>
							</li>
						))}
					</>
				)}
			</ul>
		</div>
	);
};
