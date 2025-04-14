'use client';

import parser from 'html-react-parser';
import { useState } from 'react';

import { FILTER_DATA } from '@/features/graphic/model/graphic.constants';
import ArrowSvg from '@/public/assets/icons/arrow-without-stick.svg';

import css from './index.module.css';

type GraphicFilterProps = {
	disabled?: boolean;
};

export const GraphicFilter = ({ disabled }: GraphicFilterProps) => {
	const [activeFilter, setActiveFilter] = useState(FILTER_DATA.values[0]);

	return (
		<div className={css.root}>
			<label className={css.label}>{parser(FILTER_DATA.text)}</label>
			<button className={css.button} disabled={disabled}>
				{parser(activeFilter.text)} <ArrowSvg className={css.arrow} />
			</button>
		</div>
	);
};
