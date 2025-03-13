'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const ServicesLinks = () => {
	const [isListOpen, toggleListOpen] = useState<boolean>(false);
	const { servicesLinks } = LOCALE_KEYS;
	const t = useTranslations(servicesLinks.root);
	const path = usePathname();
	const currentPath = path.split('/')[2];
	const router = useRouter();

	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (listRef.current && !listRef.current.contains(event.target as Node)) {
				toggleListOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleListItemClick = (link: string) => {
		toggleListOpen(false);
		router.push(link);
	};

	return (
		<div className={css.root} ref={listRef}>
			<Button
				variant="subtle"
				onClick={() => toggleListOpen(!isListOpen)}
				className={css.mainButton}
			>
				{t('text')}
				<TriangleSVG className={cx(css.svg, { [css.open]: isListOpen })} />
			</Button>
			<ul className={cx(css.list, { [css.open]: isListOpen })}>
				{servicesLinks.items.map((item, index) => (
					<li key={index} className={css.listElement}>
						<Button
							variant="subtle"
							className={cx(css.link, {
								[css.activeLink]: t(`links.${item}.link`) === `/${currentPath}`,
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
