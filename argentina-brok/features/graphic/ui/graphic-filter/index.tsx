'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useEffect, useState } from 'react';

import type { SelectedComparisonModeData } from '@/features/graphic/hooks/use-chart-context';
import { useChartContext } from '@/features/graphic/hooks/use-chart-context';
import { FILTER_DATA } from '@/features/graphic/model/graphic.constants';
import ArrowSvg from '@/public/assets/icons/arrow-without-stick.svg';
import CrossSVG from '@/public/assets/icons/cross.svg';
import type { GraphicMode } from '@/shared/types/global.types';

import css from './index.module.css';

type GraphicFilterProps = {
	disabled?: boolean;
	className?: string;
	tabMode: GraphicMode;
};

export const GraphicFilter = ({
	disabled,
	className,
	tabMode,
}: GraphicFilterProps) => {
	const { comparisonMode, setComparisonMode } = useChartContext();
	const [isModesOpen, toggleModesOpen] = useState<boolean>(false);

	const handleModeClick = (mode: SelectedComparisonModeData) => {
		setComparisonMode(mode);
		toggleModesOpen(false);
	};

	useEffect(() => {
		if (tabMode === 'nav') {
			setComparisonMode(FILTER_DATA.values[0]);
			toggleModesOpen(false);
		}
	}, [tabMode, setComparisonMode]);

	return (
		<div className={cx(css.root, className)}>
			<label className={css.label}>{parser(FILTER_DATA.text)}</label>
			<button
				className={css.button}
				disabled={disabled}
				onClick={() => toggleModesOpen(!isModesOpen)}
			>
				{parser(comparisonMode.text)}
				{disabled ? (
					<CrossSVG className={css.arrow} />
				) : (
					<ArrowSvg className={cx(css.arrow, { [css.opened]: isModesOpen })} />
				)}
			</button>
			<ul className={cx(css.modeList, { [css.visible]: isModesOpen })}>
				{FILTER_DATA.values.map((mode, index) => (
					<li className={css.paragraph} key={index}>
						<button
							className={cx(css.listButton, {
								[css.selected]: comparisonMode.mode === mode.mode,
							})}
							onClick={() => handleModeClick(mode)}
						>
							{parser(mode.text)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
