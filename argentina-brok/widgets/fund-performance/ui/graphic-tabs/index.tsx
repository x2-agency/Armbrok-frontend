import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

export type GraphicTabProps = {
	text: string;
	mode: string;
};

export type GraphicTabsProps = {
	tabs: Array<GraphicTabProps>;
	activeMode: string;
	onClick: (mode: string) => void;
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
