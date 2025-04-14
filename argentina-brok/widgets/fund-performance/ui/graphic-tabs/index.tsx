import cx from 'clsx';
import parser from 'html-react-parser';

import type { GraphicMode } from '@/shared/types/global.types';

import css from './index.module.css';

export type GraphicTabProps = {
	text: string;
	mode: GraphicMode;
};

export type GraphicTabsProps = {
	tabs: Array<GraphicTabProps>;
	activeMode: string;
	onClick: (mode: GraphicMode) => void;
	className?: string;
};

export const GraphicTabs = ({
	tabs,
	className,
	activeMode,
	onClick,
}: GraphicTabsProps) => {
	return (
		<div className={cx(css.root, className)}>
			{tabs.map((tab, index) => (
				<button
					key={index}
					className={cx(css.tab, { [css.active]: tab.mode === activeMode })}
					onClick={() => onClick(tab.mode)}
				>
					{parser(tab.text)}
				</button>
			))}
		</div>
	);
};
