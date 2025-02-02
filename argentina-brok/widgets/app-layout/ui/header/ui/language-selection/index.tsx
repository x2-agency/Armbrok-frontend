'use client';
import cx from 'clsx';
import { useState } from 'react';
import Arrow from '../../../../../../public/assets/icon/header/arrow.svg';
import { LANGUAGE } from '../../model/header.constants';
import css from './index.module.css';
export const LanguageSelection = () => {
	const [selectedLanguage, setSelectedLanguage] = useState<string>(
		LANGUAGE[0].value
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
					{LANGUAGE.find(item => item.value === selectedLanguage)?.lang}
					<Arrow className={cx(css.arrow, { [css.rotated]: isOpen })} />
				</div>

				{isOpen && (
					<div className={css.options}>
						{LANGUAGE.map((item, index) => (
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
