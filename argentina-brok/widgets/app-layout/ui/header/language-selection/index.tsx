'use client';

import cx from 'clsx';
import { useLocale } from 'next-intl';
import { useState, useEffect, useRef } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';
import { getLocalePseudonim, Locales } from '@/i18n/routing';
import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import useMediaQuery from '@/shared/hooks/use-media-query';

import css from './index.module.css';

type LanguageSelectionProps = {
	className?: string;
	theme?: 'white' | 'dark';
};

export const LanguageSelection = ({
	className,
	theme = 'white',
}: LanguageSelectionProps) => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const { toggleMenuOpen } = useLayoutContext();
	const isMobile = useMediaQuery('(max-width: 767px)');
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [selectedLanguage, setSelectedLanguage] = useState<string>(locale);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const handleSelectLanguage = (selectedValue: string) => {
		setSelectedLanguage(selectedValue);
		setIsOpened(false);

		router.replace(pathname, { locale: selectedValue });

		if (isMobile) {
			toggleMenuOpen(false);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!dropdownRef.current?.contains(event.target as Node)) {
				setIsOpened(false);
			}
		};

		if (isOpened) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => document.removeEventListener('click', handleClickOutside);
	}, [isOpened]);

	return (
		<div className={cx(css.root, className)} ref={dropdownRef}>
			<button
				className={cx(css.selected, css[theme])}
				onClick={() => setIsOpened(prev => !prev)}
			>
				{getLocalePseudonim(selectedLanguage)?.toUpperCase()}
				<TriangleSVG className={cx(css.svg, { [css.open]: isOpened })} />
			</button>
			<ul
				className={cx(css.languagesList, {
					[css.open]: isOpened,
					[css.close]: !isOpened,
				})}
			>
				{Object.entries(Locales)
					// .map(lang => lang.valueOf())
					.map(([key, value], index) => (
						<li key={index} className={css.language}>
							<button
								onClick={() => handleSelectLanguage(value)}
								className={cx(css.languageButton, {
									[css.selectedLang]: value === selectedLanguage,
								})}
							>
								{key}
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};
