'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import { useDropdown } from '@/shared/hooks/use-drop-down';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type ServicesLinksProps = {
	className?: string;
	rootKey: 'servicesLinks' | 'aboutUsLinks' | 'fundsLinks';
	withLayoutContext?: boolean;
};

export const BurgerLinks = ({
	className,
	rootKey,
	withLayoutContext,
}: ServicesLinksProps) => {
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const object = LOCALE_KEYS[rootKey];
	const t = useTranslations(object?.root ?? 'services');
	const path = usePathname();
	const { headerFundsDropdownItems } = useLayoutContext();
	const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

	return (
		<div className={cx(css.root, className)} ref={dropdownRef}>
			<Button
				variant="subtle"
				onClick={toggleDropdown}
				className={cx(css.mainButton, { [css.hy]: isHyLocale })}
			>
				{t('text')}
				<TriangleSVG className={cx(css.svg, { [css.open]: isOpen })} />
			</Button>
			<ul className={cx(css.list, { [css.open]: isOpen })}>
				{withLayoutContext ? (
					<>
						{headerFundsDropdownItems && headerFundsDropdownItems.length > 0 ? (
							<>
								{headerFundsDropdownItems.map((item, index) => (
									<li key={index} className={css.listElement}>
										<Button
											variant="subtle"
											className={cx(css.link, {
												[css.activeLink]: path.includes(`/funds/${item.slug}`),
											})}
											href={`/funds/${item.slug}`}
										>
											{parser(item.title)}
										</Button>
									</li>
								))}
							</>
						) : (
							<li className={css.listElement}>No data</li>
						)}
					</>
				) : (
					<>
						{object?.items.map((item, index) => (
							<li key={index} className={css.listElement}>
								<Button
									variant="subtle"
									className={cx(css.link, {
										[css.activeLink]:
											t(`links.${item}.link`) === `/${path.split('/')[2]}`,
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
