'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import { useDropdown } from '@/shared/hooks/use-drop-down';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type ServicesLinksProps = {
	className?: string;
};

export const ServicesLinks = ({ className }: ServicesLinksProps) => {
  const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const { servicesLinks } = LOCALE_KEYS;
	const t = useTranslations(servicesLinks.root);
	const path = usePathname();

	const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

	return (
		<div className={cx(css.root, className)} ref={dropdownRef}>
			<Button
				variant="subtle"
				onClick={toggleDropdown}
				className={cx(css.mainButton, {[css.hy]: isHyLocale})}
			>
				{t('text')}
				<TriangleSVG className={cx(css.svg, { [css.open]: isOpen })} />
			</Button>
			<ul className={cx(css.list, { [css.open]: isOpen })}>
				{servicesLinks.items.map((item, index) => (
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
			</ul>
		</div>
	);
};
