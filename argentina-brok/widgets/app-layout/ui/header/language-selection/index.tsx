'use client';

import cx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import TriangleSVG from '@/public/assets/icons/header/triangle.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import useMediaQuery from '@/shared/hooks/use-media-query';
import { LANGUAGES } from '@/widgets/app-layout/models/header.constants';

import css from './index.module.css';

type LanguageSelectionProps = {
	className?: string;
	theme?: 'white' | 'dark';
};

export const LanguageSelection = ({
	className,
	theme = 'white',
}: LanguageSelectionProps) => {
	const { toggleMenuOpen } = useLayoutContext();
	const isMobile = useMediaQuery('(max-width: 767px)');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedLanguage, setSelectedLanguage] = useState<string>(
		LANGUAGES[0]
	);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const handleSelectLanguage = (selectedValue: string) => {
		setSelectedLanguage(selectedValue);
		setIsOpen(false);

		if (isMobile) {
			toggleMenuOpen(false);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => document.removeEventListener('click', handleClickOutside);
	}, [isOpen]);

	return (
		<div className={cx(css.root, className)} ref={dropdownRef}>
			<button
				className={cx(css.selected, css[theme])}
				onClick={() => setIsOpen(prev => !prev)}
			>
				{selectedLanguage}
				<TriangleSVG className={cx(css.svg, { [css.open]: isOpen })} />
			</button>
			{isOpen && (
				<ul className={css.languagesList}>
					{LANGUAGES.map((value, index) => (
						<li key={index} className={css.language}>
							<button
								onClick={() => handleSelectLanguage(value)}
								className={cx(css.languageButton, {
									[css.selectedLang]: value === selectedLanguage,
								})}
							>
								{value}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
