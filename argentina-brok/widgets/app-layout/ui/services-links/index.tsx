'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import { useDropdown } from '@/shared/hooks/use-drop-down';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const ServicesLinks = () => {
	const { servicesLinks } = LOCALE_KEYS;
	const t = useTranslations(servicesLinks.root);
	const path = usePathname();
	const router = useRouter();

	const { isOpen, toggleDropdown, closeDropdown, dropdownRef } = useDropdown();

	const handleListItemClick = (link: string) => {
		closeDropdown();
		router.push(link);
	};

	return (
		<div className={css.root} ref={dropdownRef}>
			<Button
				variant="subtle"
				onClick={toggleDropdown}
				className={css.mainButton}
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
								[css.activeLink]: t(`links.${item}.link`) === path,
							})}
							onClick={() => handleListItemClick(t(`links.${item}.link`))}
						>
							{parser(t(`links.${item}.text`))}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};
