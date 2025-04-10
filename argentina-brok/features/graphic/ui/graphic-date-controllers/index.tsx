'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';

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
	const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

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
