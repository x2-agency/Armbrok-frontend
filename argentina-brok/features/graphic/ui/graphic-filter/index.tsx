'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

import { truncateString } from '@/features/graphic/helpers/truncate-word';
import { useChartContext } from '@/features/graphic/hooks/use-chart-context';
import {
	FILTER_DATA,
	NOT_SELECTED_VALUE,
} from '@/features/graphic/model/graphic.constants';
import ArrowSvg from '@/public/assets/icons/arrow-without-stick.svg';
import CrossSVG from '@/public/assets/icons/cross.svg';
import type { GraphicMode } from '@/shared/types/global.types';

import css from './index.module.css';

type GraphicFilterProps = {
	disabled?: boolean;
	className?: string;
	allFilters: Array<string>;
	tabMode: GraphicMode;
};

export const GraphicFilter = ({
	disabled,
	className,
	tabMode,
	allFilters,
}: GraphicFilterProps) => {
	const { comparisonMode, setComparisonMode } = useChartContext();
	const [isModesOpen, toggleModesOpen] = useState<boolean>(false);
	const filterRef = useRef<HTMLDivElement | null>(null);

	const handleModeClick = (mode: string | null) => {
		setComparisonMode(mode);
		toggleModesOpen(false);
	};

	useEffect(() => {
		if (tabMode === 'nav') {
			setComparisonMode(null);
			toggleModesOpen(false);
		}
	}, [tabMode, setComparisonMode]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				filterRef.current &&
				!filterRef.current.contains(event.target as Node)
			) {
				toggleModesOpen(false);
			}
		};

		if (isModesOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isModesOpen]);

	if (disabled) {
		return null;
	}

	return (
		<div className={cx(css.root, className)} ref={filterRef}>
			<label className={css.label}>{parser(FILTER_DATA.text)}</label>
			<button
				className={css.button}
				disabled={disabled}
				onClick={() => toggleModesOpen(!isModesOpen)}
			>
				{parser(truncateString(comparisonMode ?? NOT_SELECTED_VALUE))}
				{disabled ? (
					<CrossSVG className={css.arrow} />
				) : (
					<ArrowSvg className={cx(css.arrow, { [css.opened]: isModesOpen })} />
				)}
			</button>
			<ul className={cx(css.modeList, { [css.visible]: isModesOpen })}>
				<li className={css.paragraph}>
					<button
						className={cx(css.listButton, {
							[css.selected]: comparisonMode === null,
						})}
						onClick={() => handleModeClick(null)}
					>
						{parser(NOT_SELECTED_VALUE)}
					</button>
				</li>
				{allFilters?.length &&
					allFilters.map((mode, index) => (
						<li className={css.paragraph} key={index}>
							<button
								className={cx(css.listButton, {
									[css.selected]: comparisonMode === mode,
								})}
								onClick={() => handleModeClick(mode)}
							>
								{parser(mode)}
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};
