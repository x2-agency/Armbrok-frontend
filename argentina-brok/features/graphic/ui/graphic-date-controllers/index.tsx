'use client';
import cx from 'clsx';
import parser from 'html-react-parser';

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
	return (
		<div className={cx(css.root, className)}>
			{buttons.map((button, index) => (
				<Button
					className={css.button}
					onClick={() => button.setRange()}
					key={index}
				>
					{parser(button.text)}
				</Button>
			))}
		</div>
	);
};
