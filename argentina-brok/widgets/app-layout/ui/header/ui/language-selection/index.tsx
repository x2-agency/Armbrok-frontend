'use client';
import cx from 'clsx';
import { useState } from 'react';

import Arrow from '@/public/assets/icons/header/arrow.svg';
import { LANGUAGES } from '@/widgets/app-layout/ui/header/model/header.constants';

import css from './index.module.css';
export const LanguageSelection = () => {
	const [selectedLanguage, setSelectedLanguage] = useState<string>(
		LANGUAGES[0].value
	);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleSelectLanguage = (value: string) => {
		setSelectedLanguage(value);
		setIsOpen(false);
	};

	return (
		<div className={css.root}>
			<div className={css.dropdown}>
				<div className={css.selected} onClick={() => setIsOpen(!isOpen)}>
					{LANGUAGES.find(item => item.value === selectedLanguage)?.lang}
					<Arrow className={cx(css.arrow, { [css.rotated]: isOpen })} />
				</div>

				{isOpen && (
					<div className={css.options}>
						{LANGUAGES.map((item, index) => (
							<div
								key={index}
								className={css.option}
								onClick={() => handleSelectLanguage(item.value)}
							>
								{item.value}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
