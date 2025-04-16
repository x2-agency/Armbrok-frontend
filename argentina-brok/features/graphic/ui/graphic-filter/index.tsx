'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useState } from 'react';

import { FILTER_DATA } from '@/features/graphic/model/graphic.constants';
import ArrowSvg from '@/public/assets/icons/arrow-without-stick.svg';
import CrossSVG from '@/public/assets/icons/cross.svg';

import css from './index.module.css';

type GraphicFilterProps = {
	disabled?: boolean;
	className?: string;
};

export const GraphicFilter = ({ disabled, className }: GraphicFilterProps) => {
	const [activeFilter, setActiveFilter] = useState(FILTER_DATA.values[0]);

	return (
		<div className={cx(css.root, className)}>
			<label className={css.label}>{parser(FILTER_DATA.text)}</label>
			<button className={css.button} disabled={disabled}>
				{parser(activeFilter.text)}{' '}
				{disabled ? (
					<CrossSVG className={css.arrow} />
				) : (
					<ArrowSvg className={css.arrow} />
				)}
			</button>
		</div>
	);
};
