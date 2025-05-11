'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import css from './index.module.css';

export type GraphicControllerProps = {
	text: string;
	setRange: () => void;
};

export type GraphicDateControllersProps = {
	buttons: Array<GraphicControllerProps>;
	className?: string;
};

export const GraphicDateControllers = ({
	className,
	buttons,
}: GraphicDateControllersProps) => {
	const t = useTranslations('graphicDateControllers');
	const defaultText = t('sixMonth');
	const defaultIndex = buttons.findIndex(button => button.text === defaultText);
	const [activeButtonIndex, setActiveButtonIndex] = useState<number>(
		defaultIndex !== -1 ? defaultIndex : buttons.length - 1
	);

	useEffect(() => {
		if (defaultIndex !== -1) {
			buttons[defaultIndex].setRange();
		}
	}, [defaultIndex, buttons]);

	const toggleButton = (setRange: () => void, index: number) => {
		setActiveButtonIndex(index);
		setRange();
	};

	return (
		<div className={cx(css.root, className)}>
			{buttons.map((button, index) => (
				<button
					className={cx(css.button, {
						[css.active]: activeButtonIndex === index,
					})}
					onClick={() => toggleButton(button.setRange, index)}
					key={index}
				>
					{parser(button.text)}
				</button>
			))}
		</div>
	);
};
